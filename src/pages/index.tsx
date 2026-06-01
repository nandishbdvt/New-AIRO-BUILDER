import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { ChevronDown, Award, Users, TrendingUp, Building2, ArrowRight } from 'lucide-react';

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── Fade-in wrapper ─────────────────────────────────────────────────────────
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

const courses = [
  {
    code: 'AIML',
    name: 'Artificial Intelligence and Machine Learning',
    slug: 'aiml',
    intake: 120,
    highlights: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
    ],
  },

  {
    code: 'CDS',
    name: 'Computer Science and Engineering (Data Science)',
    slug: 'cds',
    intake: 60,
    highlights: [
      'Data Science',
      'Big Data Analytics',
      'Machine Learning',
    ],
  },

  {
    code: 'CIVIL',
    name: 'Civil Engineering',
    slug: 'civil',
    intake: 60,
    highlights: [
      'Structural Engineering',
      'Geo-Technical Engineering',
      'Environmental Engineering',
    ],
  },

  {
    code: 'CSE',
    name: 'Computer Science and Engineering',
    slug: 'cse',
    intake: 240,
    highlights: [
      'AI & Machine Learning',
      'Cloud Computing',
      'Data Structures & Algorithms',
    ],
  },

  {
    code: 'ECE',
    name: 'Electronics and Communication Engineering',
    slug: 'ece',
    intake: 180,
    highlights: [
      'VLSI Design',
      'Embedded Systems',
      'Signal Processing',
    ],
  },

  {
    code: 'EEE',
    name: 'Electrical and Electronics Engineering',
    slug: 'eee',
    intake: 60,
    highlights: [
      'Power Systems',
      'Control Systems',
      'Renewable Energy',
    ],
  },

  {
    code: 'ISE',
    name: 'Information Science and Engineering',
    slug: 'ise',
    intake: 180,
    highlights: [
      'Cyber Security',
      'Database Systems',
      'Software Engineering',
    ],
  },

  {
    code: 'MECH',
    name: 'Mechanical Engineering',
    slug: 'mech',
    intake: 60,
    highlights: [
      'CAD/CAM',
      'Thermal Engineering',
      'Manufacturing Processes',
    ],
  },

  {
    code: 'RAI',
    name: 'Robotics and Artificial Intelligence',
    slug: 'rai',
    intake: 60,
    highlights: [
      'Robotics',
      'Automation',
      'Artificial Intelligence',
    ],
  },

  {
    code: 'TCE',
    name: 'Electronics and Telecommunication Engineering',
    slug: 'tce',
    intake: 60,
    highlights: [
      'Wireless Communication',
      'Embedded Systems',
      'Network Technologies',
    ],
  },

 
  {
    code: 'MBA',
    name: 'Master of Business Administration',
    slug: 'mba',
    intake: 180,
    highlights: [
      'Marketing Management',
      'Finance',
      'Human Resource Management',
    ],
  },

  {
    code: 'MCA',
    name: 'Master of Computer Applications',
    slug: 'mca',
    intake: 120,
    highlights: [
      'Software Development',
      'Web Technologies',
      'Database Management',
    ],
  },
];


const recruiters = [
  'TCS', 'Infosys', 'Wipro', 'L&T', 'Bosch', 'Accenture',
  'HCL Technologies', 'Cognizant', 'Tech Mahindra', 'Capgemini',
  'Mphasis', 'Mindtree',
];



const management = [
  { name: 'Dr. Rajesh Kumar', role: 'Vice Chancellor Representative', dept: 'Administration' },
  { name: 'Prof. Anita Sharma', role: 'Dean, Academics', dept: 'Academic Affairs' },
  { name: 'Dr. Suresh Patil', role: 'Dean, Research & Development', dept: 'R&D' },
  { name: 'Prof. Meena Rao', role: 'Dean, Student Affairs', dept: 'Student Welfare' },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="pt-20">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
     //     style={{ backgroundImage: `url('/airo-assets/images/pages/home/hero')` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0D1B3E]/70" />

        {/* Watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-[18vw] font-bold text-[#C9A84C]/5 whitespace-nowrap leading-none"
            style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
          >
            EST. 1986
          </span>
        </div>

      {/* Content */}
<div className="relative z-10 overflow-hidden py-4 bg-[#0D1B3E]">
  {/* Marquee */}
  <div className="relative w-full overflow-hidden mb-16">
    <motion.div
      className="flex gap-6 w-max"
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        repeat: Infinity,
        duration: 25,
        ease: 'linear',
      }}
    >
      {[
        '/img/vtuathleticsmeet.jpg',
        '/img/techzone.jpg',
        '/img/beorient.jpg',
        '/img/kscst.jpg',
        '/img/graduationpg.jpg',
		'/img/graduationbe.jpg',
		

        // Duplicate images for smooth infinite loop
        '/img/vtuathleticsmeet.jpg',
        '/img/techzone.jpg',
        '/img/beorient.jpg',
        '/img/kscst.jpg',
        '/img/graduationpg.jpg',
		'/img/graduationbe.jpg',
      ].map((image, index) => (
        <div
          key={index}
         className="min-w-[320px] sm:min-w-[400px] lg:min-w-[500px] h-[220px] sm:h-[280px] lg:h-[320px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
		 // className="min-w-[500px] sm:min-w-[650px] lg:min-w-[850px] h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img
            src={`${import.meta.env.BASE_URL}${image}`}
            alt={`Campus ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </motion.div>

    {/* Left Fade */}
    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0D1B3E] to-transparent z-10" />

    {/* Right Fade */}
    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0D1B3E] to-transparent z-10" />
  </div>

  {/* Text Section */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' as const }}
      className="max-w-1xl"
    >
      <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
        Shivamogga, Karnataka
      </p>

      <h1
        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        style={{
          fontFamily: 'var(--font-heading, "Playfair Display", serif)',
        }}
      >
        Shaping Engineers.
        <br />
        <span className="text-[#C9A84C]">Building Futures.</span>
      </h1>

      <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
        JNN College of Engineering, Shivamogga — Affiliated to VTU,
        Approved by AICTE. Nurturing technical excellence since 1986.
      </p>

    </motion.div>
  </div>
</div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' as const }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={12} />
        </motion.div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <section className="bg-[#0D1B3E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, value: 40, suffix: '+', label: 'Years of Excellence' },
              { icon: Users, value: 2000, suffix: '+', label: 'Students Enrolled' },
              { icon: TrendingUp, value: 95, suffix: '%', label: 'Placement Rate' },
              { icon: Building2, value: 50, suffix: '+', label: 'Industry Partners' },
            ].map(({ icon: Icon, value, suffix, label }, i) => (
              <FadeIn key={label} delay={i * 0.1}>
                <div className="text-center">
                  <Icon size={24} className="text-[#C9A84C] mx-auto mb-2" />
                  <div
                    className="text-4xl font-bold text-[#C9A84C] mb-1"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <p className="text-white/60 text-sm tracking-wide">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Courses ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                B.E. Programs
              </p>
              <h2
                className="text-4xl sm:text-5xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                Engineering Programs
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
              <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                Four-year undergraduate programs affiliated to Visvesvaraya Technological
                University (VTU), Belagavi.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(13,27,62,0.12)' }}
                className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer group transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-3xl font-bold text-[#0D1B3E]/10 group-hover:text-[#C9A84C]/20 transition-colors"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {course.code}
                  </span>
                  <span className="text-xs bg-[#0D1B3E]/5 text-[#0D1B3E] px-2.5 py-1 rounded-full font-medium">
                    {course.intake} seats
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-[#0D1B3E] mb-3 leading-snug group-hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  {course.name}
                </h3>
                <ul className="space-y-1.5 mb-5">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-4">
                  <Link
                    to="/courses"
                    className="text-[#0D1B3E] text-sm font-semibold flex items-center gap-1.5 group-hover:text-[#C9A84C] transition-colors"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Placements ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Stats */}
            <FadeIn>
              <div>
                <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                  Career Outcomes
                </p>
                <h2
                  className="text-4xl sm:text-5xl font-bold text-[#0D1B3E] mb-4"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  Placement Excellence
                </h2>
                <div className="w-16 h-0.5 bg-[#C9A84C] mb-6" />
                <p className="text-gray-600 leading-relaxed mb-10">
                  Our dedicated Training & Placement Cell works year-round to connect students
                  with leading companies across India. JNNCE graduates are trusted by top
                  employers in IT, manufacturing, and infrastructure sectors.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { value: '₹12 LPA', label: 'Highest Package' },
                    { value: '₹5.2 LPA', label: 'Average Package' },
                    { value: '80+', label: 'Companies Visited' },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center p-4 bg-[#F8F6F0] rounded-lg">
                      <div
                        className="text-2xl font-bold text-[#C9A84C] mb-1"
                        style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                      >
                        {value}
                      </div>
                      <p className="text-xs text-gray-500 font-medium">{label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/placements"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D1B3E] text-white text-sm font-semibold rounded hover:bg-[#162d5e] transition-colors"
                >
                  View Placement Details <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>

            {/* Right: Recruiters + Image */}
            <FadeIn delay={0.15}>
              <div>
                <div
                  className="rounded-lg overflow-hidden mb-8 h-52"
                  style={{
          //          backgroundImage: `url('/airo-assets/images/pages/home/placements-section')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <p className="text-xs text-gray-400 tracking-widest uppercase font-medium mb-4">
                  Our Recruiters
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {recruiters.map((r) => (
                    <div
                      key={r}
                      className="border border-gray-200 rounded px-3 py-2.5 text-center text-xs font-semibold text-gray-600 hover:border-[#C9A84C] hover:text-[#0D1B3E] transition-colors"
                    >
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Facilities ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Campus Infrastructure
              </p>
              <h2
                className="text-4xl sm:text-5xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                World-Class Facilities
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
            </div>
          </FadeIn>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Large card — Library */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(13,27,62,0.14)' }}
              className="lg:col-span-2 relative rounded-xl overflow-hidden h-72 group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            //    style={{ backgroundImage: `url('/airo-assets/images/pages/home/library')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/80 via-[#0D1B3E]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3
                  className="text-white text-2xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  Central Library
                </h3>
                <p className="text-white/70 text-sm">
                  Over 40,000 volumes, digital journals, and 24×7 reading rooms.
                </p>
              </div>
            </motion.div>

            {/* Computer Labs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' as const }}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(13,27,62,0.14)' }}
              className="relative rounded-xl overflow-hidden h-72 group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              //  style={{ backgroundImage: `url('/airo-assets/images/pages/home/lab')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/80 via-[#0D1B3E]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3
                  className="text-white text-xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  Computer Labs
                </h3>
                <p className="text-white/70 text-xs">
                  High-speed internet and licensed software suites.
                </p>
              </div>
            </motion.div>

            {/* Hostel */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' as const }}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(13,27,62,0.14)' }}
              className="relative rounded-xl overflow-hidden h-56 group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
           //     style={{ backgroundImage: `url('/airo-assets/images/pages/home/hostel')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/80 via-[#0D1B3E]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3
                  className="text-white text-xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  Student Hostel
                </h3>
                <p className="text-white/70 text-xs">
                  Separate hostels for boys and girls with modern amenities.
                </p>
              </div>
            </motion.div>

            {/* Sports */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' as const }}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(13,27,62,0.14)' }}
              className="lg:col-span-2 relative rounded-xl overflow-hidden h-56 group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
               // style={{ backgroundImage: `url('/airo-assets/images/pages/home/sports')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/80 via-[#0D1B3E]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3
                  className="text-white text-xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  Sports Complex
                </h3>
                <p className="text-white/70 text-xs">
                  Cricket, football, basketball, volleyball, and indoor games.
                </p>
              </div>
            </motion.div>
          </div>

          <FadeIn delay={0.2} className="text-center mt-10">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0D1B3E] text-[#0D1B3E] text-sm font-semibold rounded hover:bg-[#0D1B3E] hover:text-white transition-colors"
            >
              Explore All Facilities <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Management ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Principal's Message */}
            <FadeIn>
              <div>
                <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                  Leadership
                </p>
                <h2
                  className="text-4xl font-bold text-white mb-6"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  Principal's Message
                </h2>
                <div className="flex gap-5 mb-6">
                  <div
                    className="w-24 h-28 rounded-lg bg-cover bg-center shrink-0 border-2 border-[#C9A84C]/30"
                    style={{
                   ///   backgroundImage: `url('/airo-assets/images/pages/home/principal')`,
                    }}
                  />
                  <div>
                    <h3
                      className="text-[#C9A84C] text-lg font-bold"
                      style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                    >
                      Dr. S. N. Hiremath
                    </h3>
                    <p className="text-white/50 text-sm mb-3">Principal, JNNCE</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Ph.D. (IISc Bangalore) | 25+ Years in Academia
                    </p>
                  </div>
                </div>
                <blockquote className="border-l-2 border-[#C9A84C] pl-5 text-white/70 leading-relaxed italic text-sm">
                  "At JNNCE, we believe that engineering education must go beyond textbooks.
                  We nurture critical thinkers, innovators, and responsible citizens who are
                  ready to face the challenges of a rapidly evolving world. Our commitment to
                  academic excellence, research, and industry collaboration ensures that every
                  graduate is equipped to make a meaningful contribution to society."
                </blockquote>
              </div>
            </FadeIn>

            {/* Leadership Cards */}
            <FadeIn delay={0.15}>
              <div>
                <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-6">
                  Senior Leadership
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {management.map((person, i) => (
                    <motion.div
                      key={person.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const }}
                      className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-[#C9A84C]/40 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center mb-3">
                        <span
                          className="text-[#C9A84C] font-bold text-sm"
                          style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                        >
                          {person.name.split(' ').pop()?.charAt(0)}
                        </span>
                      </div>
                      <h4
                        className="text-[#C9A84C] font-bold text-sm mb-0.5"
                        style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                      >
                        {person.name}
                      </h4>
                      <p className="text-white/70 text-xs mb-1">{person.role}</p>
                      <p className="text-white/40 text-xs">{person.dept}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    to="/management"
                    className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold hover:underline"
                  >
                    View Full Management Team <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#F8F6F0] overflow-hidden">
        {/* Diagonal accent */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-[#0D1B3E]"
          style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <FadeIn>
              <div>
                <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                  Admissions 2025
                </p>
                <h2
                  className="text-4xl sm:text-5xl font-bold text-[#0D1B3E] leading-tight"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  Begin Your
                  <br />
                  Engineering Journey
                </h2>
                <div className="w-16 h-0.5 bg-[#C9A84C] mt-4" />
              </div>
            </FadeIn>

            {/* Right */}
            <FadeIn delay={0.15}>
              <div className="lg:pl-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                  <h3
                    className="text-white text-xl font-bold mb-4"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    Admission Information
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Eligibility: 10+2 with PCM (45% min)',
                      'Admission via KCET / COMEDK / Management Quota',
                      'Duration: 4 Years (8 Semesters)',
                      'Affiliated to VTU, Belagavi',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/admissions"
                    className="block text-center px-8 py-3.5 bg-[#C9A84C] text-[#0D1B3E] font-bold rounded hover:bg-[#b8943e] transition-colors text-sm tracking-wide"
                  >
                    Apply for Admissions 2025
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
