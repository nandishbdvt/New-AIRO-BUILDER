import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, GraduationCap, Award, BookOpen } from 'lucide-react';

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const governingBody = [
  {
    name: 'Sri. J. N. Nayak',
    role: 'Chairman, Governing Body',
    org: 'JNN Education Trust',
    note: 'Founder & Patron',
  },
  {
    name: 'Sri. Ramesh Nayak',
    role: 'Secretary, Governing Body',
    org: 'JNN Education Trust',
    note: 'Managing Trustee',
  },
  {
    name: 'Dr. K. S. Rangappa',
    role: 'Nominee, VTU',
    org: 'Visvesvaraya Technological University',
    note: 'University Representative',
  },
  {
    name: 'Sri. Mohan Kumar',
    role: 'Nominee, AICTE',
    org: 'All India Council for Technical Education',
    note: 'Regulatory Representative',
  },
  {
    name: 'Dr. Priya Venkatesh',
    role: 'Industry Nominee',
    org: 'Infosys Ltd.',
    note: 'Industry Representative',
  },
  {
    name: 'Prof. Anand Rao',
    role: 'Faculty Nominee',
    org: 'JNNCE, Shivamogga',
    note: 'Senior Faculty Representative',
  },
];

const principal = {
  name: 'Dr. S. N. Hiremath',
  designation: 'Principal',
  qualification: 'Ph.D. (IISc Bangalore), M.Tech (NIT Surathkal), B.E. (BVB College)',
  experience: '25+ Years in Academia & Research',
  specialisation: 'Power Systems & Control Engineering',
  email: 'principal@jnnce.ac.in',
  phone: '+91 8182 234567',
  message:
    'At JNNCE, we believe that engineering education must go beyond textbooks. We nurture critical thinkers, innovators, and responsible citizens who are ready to face the challenges of a rapidly evolving world. Our commitment to academic excellence, research, and industry collaboration ensures that every graduate is equipped to make a meaningful contribution to society. I warmly invite you to be part of the JNNCE family and embark on a journey of discovery, growth, and achievement.',
  publications: 28,
  projects: 6,
  yearsAtJNNCE: 14,
};

const seniorFaculty = [
  {
    name: 'Prof. Anita Sharma',
    role: 'Dean, Academics',
    dept: 'Computer Science & Engineering',
    qualification: 'Ph.D. (IIT Bombay)',
    experience: '18 Years',
    specialisation: 'Machine Learning & Data Mining',
  },
  {
    name: 'Dr. Suresh Patil',
    role: 'Dean, Research & Development',
    dept: 'Electronics & Communication Engg.',
    qualification: 'Ph.D. (NITK Surathkal)',
    experience: '20 Years',
    specialisation: 'VLSI Design & Embedded Systems',
  },
  {
    name: 'Prof. Meena Rao',
    role: 'Dean, Student Affairs',
    dept: 'Civil Engineering',
    qualification: 'M.Tech (IIT Madras)',
    experience: '15 Years',
    specialisation: 'Structural Engineering',
  },
  {
    name: 'Dr. Ravi Kumar',
    role: 'Head of Department',
    dept: 'Mechanical Engineering',
    qualification: 'Ph.D. (VTU)',
    experience: '16 Years',
    specialisation: 'Thermal Engineering & CAD/CAM',
  },
  {
    name: 'Prof. Kavitha Nair',
    role: 'Head of Department',
    dept: 'Electrical & Electronics Engg.',
    qualification: 'M.Tech (NIT Calicut)',
    experience: '12 Years',
    specialisation: 'Power Electronics & Drives',
  },
  {
    name: 'Dr. Arun Shetty',
    role: 'Head of Department',
    dept: 'Information Science & Engg.',
    qualification: 'Ph.D. (Manipal University)',
    experience: '14 Years',
    specialisation: 'Cyber Security & Cloud Computing',
  },
  {
    name: 'Prof. Deepa Kulkarni',
    role: 'Controller of Examinations',
    dept: 'Mathematics',
    qualification: 'M.Sc., M.Phil.',
    experience: '17 Years',
    specialisation: 'Applied Mathematics',
  },
  {
    name: 'Dr. Nagesh Bhat',
    role: 'Training & Placement Officer',
    dept: 'Computer Science & Engineering',
    qualification: 'Ph.D. (VTU)',
    experience: '11 Years',
    specialisation: 'Software Engineering & HR Development',
  },
];

const adminTeam = [
  { name: 'Sri. Venkatesh K.', role: 'Registrar', dept: 'Administration' },
  { name: 'Smt. Lakshmi Prasad', role: 'Accounts Officer', dept: 'Finance & Accounts' },
  { name: 'Sri. Girish Naik', role: 'Administrative Officer', dept: 'Administration' },
  { name: 'Smt. Rekha Shetty', role: 'Librarian', dept: 'Central Library' },
  { name: 'Sri. Manjunath B.', role: 'Systems Administrator', dept: 'IT & Networking' },
  { name: 'Smt. Usha Rani', role: 'Hostel Warden (Girls)', dept: 'Student Welfare' },
  { name: 'Sri. Prakash M.', role: 'Hostel Warden (Boys)', dept: 'Student Welfare' },
  { name: 'Sri. Kiran Kumar', role: 'Physical Education Director', dept: 'Sports' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function InitialAvatar({ name, large = false }: { name: string; large?: boolean }) {
  const parts = name.replace(/^(Dr\.|Prof\.|Sri\.|Smt\.)\s*/i, '').split(' ');
  const initials = parts
    .slice(0, 2)
    .map((p) => p[0])
    .join('');
  return (
    <div
      className={`rounded-full bg-[#C9A84C]/20 border-2 border-[#C9A84C]/30 flex items-center justify-center shrink-0 ${large ? 'w-20 h-20' : 'w-12 h-12'}`}
    >
      <span
        className={`font-bold text-[#C9A84C] ${large ? 'text-2xl' : 'text-sm'}`}
        style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
      >
        {initials}
      </span>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ManagementPage() {
  return (
    <main className="pt-20 bg-[#F8F6F0]">
      {/* Hero */}
      <section className="relative bg-[#0D1B3E] py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('/airo-assets/images/pages/facilities/hero')` }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Leadership & Governance
            </p>
            <h1
              className="text-5xl sm:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
            >
              College Management
            </h1>
            <div className="w-16 h-0.5 bg-[#C9A84C] mb-6" />
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              JNNCE is guided by an experienced governing body, visionary academic leadership, and
              a dedicated administrative team committed to excellence in technical education.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Principal's Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Academic Leadership
              </p>
              <h2
                className="text-4xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                From the Principal's Desk
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Profile Card */}
            <FadeIn className="lg:col-span-1">
              <div className="bg-[#0D1B3E] rounded-2xl overflow-hidden">
                {/* Portrait */}
                <div
                  className="h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/airo-assets/images/pages/home/principal')`,
                  }}
                />
                {/* Info */}
                <div className="p-6">
                  <h3
                    className="text-[#C9A84C] text-xl font-bold mb-1"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {principal.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-5">{principal.designation}, JNNCE</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2.5">
                      <GraduationCap size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                      <span className="text-white/70 text-xs leading-relaxed">
                        {principal.qualification}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Award size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                      <span className="text-white/70 text-xs">{principal.experience}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <BookOpen size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                      <span className="text-white/70 text-xs">{principal.specialisation}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {[
                      { value: principal.publications, label: 'Publications' },
                      { value: principal.projects, label: 'Projects' },
                      { value: principal.yearsAtJNNCE, label: 'Yrs at JNNCE' },
                    ].map(({ value, label }) => (
                      <div
                        key={label}
                        className="bg-white/5 rounded-lg p-2.5 text-center border border-white/10"
                      >
                        <div
                          className="text-lg font-bold text-[#C9A84C]"
                          style={{
                            fontFamily: 'var(--font-heading, "Playfair Display", serif)',
                          }}
                        >
                          {value}
                        </div>
                        <p className="text-white/40 text-[10px] mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <a
                      href={`mailto:${principal.email}`}
                      className="flex items-center gap-2 text-white/50 text-xs hover:text-[#C9A84C] transition-colors"
                    >
                      <Mail size={13} /> {principal.email}
                    </a>
                    <a
                      href={`tel:${principal.phone}`}
                      className="flex items-center gap-2 text-white/50 text-xs hover:text-[#C9A84C] transition-colors"
                    >
                      <Phone size={13} /> {principal.phone}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Message */}
            <FadeIn delay={0.15} className="lg:col-span-2">
              <div className="h-full flex flex-col justify-center">
                <div className="mb-6">
                  <span
                    className="text-8xl text-[#C9A84C]/20 font-serif leading-none block -mb-6"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    "
                  </span>
                  <blockquote
                    className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-[#C9A84C] pl-6"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {principal.message}
                  </blockquote>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    {
                      title: 'Academic Vision',
                      desc: 'Fostering a culture of inquiry, innovation, and interdisciplinary learning across all departments.',
                    },
                    {
                      title: 'Industry Connect',
                      desc: 'Building strong partnerships with industry to ensure curriculum relevance and placement success.',
                    },
                    {
                      title: 'Research Focus',
                      desc: 'Encouraging faculty and students to pursue funded research and publish in reputed journals.',
                    },
                    {
                      title: 'Holistic Development',
                      desc: 'Nurturing leadership, communication, and ethical values alongside technical skills.',
                    },
                  ].map(({ title, desc }) => (
                    <div
                      key={title}
                      className="bg-[#F8F6F0] rounded-lg p-4 border border-gray-100"
                    >
                      <h4
                        className="text-[#0D1B3E] font-bold text-sm mb-1.5"
                        style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                      >
                        {title}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Governing Body */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Governance
              </p>
              <h2
                className="text-4xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                Governing Body
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
              <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
                The Governing Body of JNNCE comprises eminent academicians, industry leaders, and
                regulatory nominees who provide strategic direction to the institution.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {governingBody.map(({ name, role, org, note }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const }}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-300 flex gap-4 items-start"
              >
                <InitialAvatar name={name} />
                <div className="min-w-0">
                  <h3
                    className="text-[#0D1B3E] font-bold text-base leading-snug"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {name}
                  </h3>
                  <p className="text-[#C9A84C] text-xs font-semibold mt-0.5">{role}</p>
                  <p className="text-gray-400 text-xs mt-1 truncate">{org}</p>
                  <span className="inline-block mt-2 text-[10px] bg-[#0D1B3E]/5 text-[#0D1B3E] px-2 py-0.5 rounded-full font-medium">
                    {note}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Faculty & HODs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Academic Team
              </p>
              <h2
                className="text-4xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                Senior Faculty & Heads of Departments
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {seniorFaculty.map(({ name, role, dept, qualification, experience, specialisation }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' as const }}
                className="bg-[#F8F6F0] rounded-xl p-5 border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-300"
              >
                <InitialAvatar name={name} />
                <div className="mt-4">
                  <h3
                    className="text-[#0D1B3E] font-bold text-sm leading-snug"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {name}
                  </h3>
                  <p className="text-[#C9A84C] text-xs font-semibold mt-1">{role}</p>
                  <p className="text-gray-500 text-xs mt-1">{dept}</p>
                  <div className="mt-3 pt-3 border-t border-gray-200 space-y-1.5">
                    <p className="text-gray-400 text-xs flex items-start gap-1.5">
                      <GraduationCap size={11} className="mt-0.5 shrink-0 text-[#C9A84C]" />
                      {qualification}
                    </p>
                    <p className="text-gray-400 text-xs flex items-start gap-1.5">
                      <Award size={11} className="mt-0.5 shrink-0 text-[#C9A84C]" />
                      {experience}
                    </p>
                    <p className="text-gray-400 text-xs flex items-start gap-1.5">
                      <BookOpen size={11} className="mt-0.5 shrink-0 text-[#C9A84C]" />
                      {specialisation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Staff */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Operations
              </p>
              <h2
                className="text-4xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                Administrative Team
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {adminTeam.map(({ name, role, dept }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: 'easeOut' as const }}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-sm transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#0D1B3E]/5 flex items-center justify-center shrink-0">
                  <span
                    className="text-[#0D1B3E] font-bold text-sm"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {name.replace(/^(Sri\.|Smt\.)\s*/i, '').split(' ')[0][0]}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4
                    className="text-[#0D1B3E] font-bold text-sm truncate"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {name}
                  </h4>
                  <p className="text-[#C9A84C] text-xs font-medium">{role}</p>
                  <p className="text-gray-400 text-xs truncate">{dept}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Org Chart Summary */}
      <section className="py-20 bg-[#0D1B3E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Structure
              </p>
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                Organisational Hierarchy
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
            </div>
          </FadeIn>

          <div className="flex flex-col items-center gap-0">
            {[
              { level: 'JNN Education Trust', sub: 'Governing Body', width: 'w-72' },
              { level: 'Principal', sub: 'Academic & Administrative Head', width: 'w-64' },
              { level: 'Deans', sub: 'Academics · R&D · Student Affairs', width: 'w-80' },
              { level: 'Heads of Departments', sub: 'CSE · ECE · ME · CV · EEE · ISE', width: 'w-96' },
              { level: 'Faculty & Administrative Staff', sub: 'Teaching · Non-Teaching · Support', width: 'w-full max-w-lg' },
            ].map(({ level, sub, width }, i) => (
              <FadeIn key={level} delay={i * 0.1} className="flex flex-col items-center w-full">
                {i > 0 && (
                  <div className="w-px h-8 bg-[#C9A84C]/30" />
                )}
                <div
                  className={`${width} bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center hover:border-[#C9A84C]/40 transition-colors`}
                >
                  <p
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {level}
                  </p>
                  <p className="text-white/40 text-xs mt-1">{sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="text-3xl font-bold text-[#0D1B3E] mb-4"
              style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
            >
              Join the JNNCE Community
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Our leadership team is committed to providing every student with the best possible
              academic experience. Admissions for 2025–26 are now open.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0D1B3E] text-white font-bold rounded hover:bg-[#162d5e] transition-colors text-sm"
              >
                Apply for Admissions 2025 <ArrowRight size={16} />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#0D1B3E] text-[#0D1B3E] font-semibold rounded hover:bg-[#0D1B3E] hover:text-white transition-colors text-sm"
              >
                Explore Programs
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
