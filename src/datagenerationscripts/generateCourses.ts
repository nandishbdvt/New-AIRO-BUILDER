import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

interface Faculty {
  name: string;
  designation: string;
  qualification: string;
  specialisation: string;
  experience: string;
  email: string;
  patents: string[];
  publications: number;
  selectedPublications: string[];
  bio: string;
  photoInitials: string;
  photoColor: string;
}

interface Course {
  code: string;
  slug: string;
  name: string;
  link: string;
  intake: number;
  duration: string;
  overview: string;
  subjects: string[];
  labs: string[];
  careers: string[];
  eligibility: string;
  affiliation: string;
  faculty: Faculty[];
}

async function generateCourses() {
  try {
    // =========================================
    // DATABASE CONNECTION
    // =========================================

      const db = await mysql.createConnection({
      host: 'jams-jnnce.in',
      user: 'cjmn_jams',
      password: '759Ramlalla@UP',
      database: 'jams',
      port: 3306,
    });


    console.log('✅ MySQL Connected');

    // =========================================
    // GET EMPLOYEES
    // =========================================

    const [employees]: any = await db.execute(`
      SELECT *
      FROM jams_Employee
      WHERE STATUS='ACTIVE'
      AND Category='TEACHING' ORDER BY Rank
    `);

    // =========================================
    // GET JOURNALS
    // =========================================

    const [journals]: any = await db.execute(`
      SELECT *
      FROM jams_faculty_journal
      WHERE stat='Approved'
    `);

    // =========================================
    // GET PATENTS
    // =========================================

    const [patents]: any = await db.execute(`
      SELECT *
      FROM jams_faculty_patent_details
      WHERE status='Approved'
    `);

    // =========================================
    // DEPARTMENT MAP
    // =========================================

const deptMap: any = {
  AIML: {
    name: 'Artificial Intelligence and Machine Learning',
    slug: 'aiml',
  },

  CDS: {
    name: 'Computer Science and Engineering (Data Science)',
    slug: 'cds',
  },

  CHEM: {
    name: 'Chemistry',
    slug: 'chem',
  },

  CIVIL: {
    name: 'Civil Engineering',
    slug: 'civil',
  },

  CSE: {
    name: 'Computer Science and Engineering',
    slug: 'cse',
  },

  ECE: {
    name: 'Electronics and Communication Engineering',
    slug: 'ece',
  },

  EEE: {
    name: 'Electrical and Electronics Engineering',
    slug: 'eee',
  },

  ISE: {
    name: 'Information Science and Engineering',
    slug: 'ise',
  },

  MATHS: {
    name: 'Mathematics',
    slug: 'maths',
  },

  MBA: {
    name: 'Master of Business Administration',
    slug: 'mba',
  },

  MCA: {
    name: 'Master of Computer Applications',
    slug: 'mca',
  },

  MECH: {
    name: 'Mechanical Engineering',
    slug: 'mech',
  },

  RAI: {
    name: 'Robotics and Artificial Intelligence',
    slug: 'rai',
  },

  TCE: {
    name: 'Electronics and Telecommunication Engineering',
    slug: 'tce',
  },

  PHY: {
    name: 'Physics',
    slug: 'phy',
  },
};

    // =========================================
    // GROUP BY DEPARTMENT
    // =========================================

    const deptFaculty: any = {};

    for (const emp of employees) {
      const dept = emp.Dept;

      if (!deptMap[dept]) continue;

      if (!deptFaculty[dept]) {
        deptFaculty[dept] = [];
      }

      // =====================================
      // PUBLICATIONS
      // =====================================

      const facultyJournals = journals.filter(
        (j: any) =>
          j.femail &&
          emp.Email &&
          j.femail.toLowerCase() === emp.Email.toLowerCase()
      );

      // =====================================
      // PATENTS
      // =====================================

      const facultyPatents = patents.filter(
        (p: any) =>
          p.eid &&
          emp.EID &&
          String(p.eid) === String(emp.EID)
      );

      // =====================================
      // EXPERIENCE
      // =====================================

      let experience = '0 years';

      if (emp.DOJ) {
        const doj = new Date(emp.DOJ);
        const now = new Date();

        const years =
          now.getFullYear() - doj.getFullYear();

        experience = `${years} years`;
      }

      // =====================================
      // INITIALS
      // =====================================

      const initials = emp.Ename
        ? emp.Ename.split(' ')
            .map((x: string) => x[0])
            .join('')
            .substring(0, 2)
            .toUpperCase()
        : 'NA';

      // =====================================
      // FACULTY OBJECT
      // =====================================

      const faculty: Faculty = {
        name: (emp.SAL || '') + ' ' + (emp.Ename || ''),

        designation: emp.Designation || '',

        qualification: 'M.Tech / Ph.D',

        specialisation: deptMap[dept].name,

        experience,

        email: emp.Email || '',

        patents: facultyPatents.map(
          (p: any) => p.title
        ),

        publications: facultyJournals.length,

        selectedPublications: facultyJournals
          .slice(0, 3)
          .map((j: any) => j.title),

        bio: `${emp.Ename} is a faculty member in the ${deptMap[dept].name} department with experience in academics and research.`,

        photoInitials: initials,

        photoColor: '#7C3AED',
      };

      deptFaculty[dept].push(faculty);
    }

    // =========================================
    // BUILD COURSES ARRAY
    // =========================================

    const courses: Course[] = [];

    for (const deptCode in deptFaculty) {
      const dept = deptMap[deptCode];

      courses.push({
        code: deptCode,

        slug: dept.slug,

        name: dept.name,

        link: `/departments/${dept.slug}`,

        intake: 60,

        duration: '4 Years',

        overview: `${dept.name} department offers quality technical education and research opportunities.`,

        subjects: [],

        labs: [],

        careers: [],

        eligibility:
          '10+2 with PCM',

        affiliation:
          'VTU, Belagavi',

        faculty:
          deptFaculty[deptCode],
      });
    }

    // =========================================
    // GENERATE TS FILE
    // =========================================

    const tsContent = `

export interface Faculty {
  name: string;
  designation: string;
  qualification: string;
  specialisation: string;
  experience: string;
  email: string;
  patents: string[];
  publications: number;
  selectedPublications: string[];
  bio: string;
  photoInitials: string;
  photoColor: string;
}

export interface Course {
  code: string;
  slug: string;
  name: string;
  link: string;
  intake: number;
  duration: string;
  overview: string;
  subjects: string[];
  labs: string[];
  careers: string[];
  eligibility: string;
  affiliation: string;
  faculty: Faculty[];
}

export const courses: Course[] =
${JSON.stringify(courses, null, 2)};

`;

    // =========================================
    // SAVE FILE
    // =========================================

    const outputPath = path.join(
      process.cwd(),
      'data',
      'courses.ts'
    );

    fs.mkdirSync(
      path.dirname(outputPath),
      { recursive: true }
    );

    fs.writeFileSync(outputPath, tsContent);

    console.log('✅ courses.ts generated');
    console.log(outputPath);

    await db.end();

  } catch (err) {
    console.error('\n❌ ERROR\n');
    console.error(err);
  }
}

// =========================================
// RUN
// =========================================

generateCourses();