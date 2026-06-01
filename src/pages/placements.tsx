import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Building2, Award, ArrowRight, CheckCircle } from 'lucide-react';

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

const stats = [
  { icon: TrendingUp, value: '₹12 LPA', label: 'Highest Package', sub: 'Academic Year 2024–25' },
  { icon: Award, value: '₹5.2 LPA', label: 'Average Package', sub: 'Across all branches' },
  { icon: Building2, value: '80+', label: 'Companies Visited', sub: 'Every academic year' },
  { icon: Users, value: '95%', label: 'Placement Rate', sub: 'Eligible students placed' },
];

const recruiters = [
  { name: 'TCS', sector: 'IT Services' },
  { name: 'Infosys', sector: 'IT Services' },
  { name: 'Wipro', sector: 'IT Services' },
  { name: 'Accenture', sector: 'Consulting' },
  { name: 'Cognizant', sector: 'IT Services' },
  { name: 'HCL Technologies', sector: 'IT Services' },
  { name: 'Tech Mahindra', sector: 'IT & Telecom' },
  { name: 'Capgemini', sector: 'Consulting' },
  { name: 'L&T', sector: 'Engineering' },
  { name: 'Bosch', sector: 'Manufacturing' },
  { name: 'Mphasis', sector: 'IT Services' },
  { name: 'Mindtree', sector: 'IT Services' },
  { name: 'Hexaware', sector: 'IT Services' },
  { name: 'Persistent Systems', sector: 'IT Services' },
  { name: 'KPIT Technologies', sector: 'Automotive IT' },
  { name: 'Siemens', sector: 'Engineering' },
  { name: 'ABB', sector: 'Power & Automation' },
  { name: 'Schneider Electric', sector: 'Energy' },
];

const branchStats = [
  { branch: 'CSE', placed: 98, total: 110, avg: '₹6.1 LPA' },
  { branch: 'ISE', placed: 92, total: 100, avg: '₹5.8 LPA' },
  { branch: 'ECE', placed: 85, total: 95, avg: '₹4.9 LPA' },
  { branch: 'EEE', placed: 78, total: 88, avg: '₹4.5 LPA' },
  { branch: 'ME', placed: 72, total: 85, avg: '₹4.2 LPA' },
  { branch: 'CV', placed: 65, total: 78, avg: '₹3.9 LPA' },
];

const tpcActivities = [
  'Pre-placement training in aptitude, reasoning, and verbal ability',
  'Mock interviews and group discussion sessions',
  'Resume building and LinkedIn profile workshops',
  'Industry expert guest lectures and webinars',
  'Internship facilitation with partner companies',
  'Soft skills and communication development programs',
];

export default function PlacementsPage() {
  return (
    <main className="pt-20 bg-[#F8F6F0]">
      {/* Hero */}
      <section className="bg-[#0D1B3E] py-20 relative overflow-hidden">
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
              Career Outcomes
            </p>
            <h1
              className="text-5xl sm:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
            >
              Placements
            </h1>
            <div className="w-16 h-0.5 bg-[#C9A84C] mb-6" />
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              JNNCE's Training & Placement Cell bridges the gap between academia and industry,
              ensuring our graduates are career-ready and sought after by leading employers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label, sub }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <div className="text-center p-6 border border-gray-100 rounded-xl hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-[#0D1B3E]/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-[#0D1B3E]" />
                  </div>
                  <div
                    className="text-3xl font-bold text-[#C9A84C] mb-1"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {value}
                  </div>
                  <p className="text-[#0D1B3E] font-semibold text-sm mb-1">{label}</p>
                  <p className="text-gray-400 text-xs">{sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Branch-wise Stats */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                2024–25 Data
              </p>
              <h2
                className="text-4xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                Branch-wise Placement Statistics
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mt-4" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {branchStats.map(({ branch, placed, total, avg }, i) => {
              const pct = Math.round((placed / total) * 100);
              return (
                <motion.div
                  key={branch}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const }}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-2xl font-bold text-[#0D1B3E]"
                      style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                    >
                      {branch}
                    </span>
                    <span className="text-[#C9A84C] font-bold text-lg">{pct}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                    <motion.div
                      className="bg-[#C9A84C] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.07 + 0.2, ease: 'easeOut' as const }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>
                      {placed}/{total} students placed
                    </span>
                    <span className="font-semibold text-[#0D1B3E]">{avg}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recruiters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Our Recruiters
              </p>
              <h2
                className="text-4xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                Companies That Hire From JNNCE
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recruiters.map(({ name, sector }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04, ease: 'easeOut' as const }}
                className="border border-gray-200 rounded-lg p-4 text-center hover:border-[#C9A84C] hover:shadow-sm transition-all duration-200 group"
              >
                <p className="font-bold text-[#0D1B3E] text-sm group-hover:text-[#C9A84C] transition-colors">
                  {name}
                </p>
                <p className="text-gray-400 text-xs mt-1">{sector}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TPC Activities */}
      <section className="py-20 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                  Training & Placement Cell
                </p>
                <h2
                  className="text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  How We Prepare You
                </h2>
                <div className="w-16 h-0.5 bg-[#C9A84C] mb-8" />
                <ul className="space-y-4">
                  {tpcActivities.map((activity, i) => (
                    <motion.li
                      key={activity}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' as const }}
                      className="flex items-start gap-3 text-white/70 text-sm leading-relaxed"
                    >
                      <CheckCircle size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                      {activity}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3
                  className="text-[#C9A84C] text-xl font-bold mb-6"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  Contact Placement Cell
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    { label: 'T&P Officer', value: 'Prof. Kiran Kumar B.S.' },
                    { label: 'Email', value: 'placements@jnnce.ac.in' },
                    { label: 'Phone', value: '+91 8182 234568' },
                    { label: 'Office Hours', value: 'Mon–Sat, 9:00 AM – 5:00 PM' },
                  ].map(({ label, value }) => (
                    <div key={label} className="border-b border-white/10 pb-3">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                        {label}
                      </p>
                      <p className="text-white text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/admissions"
                  className="block text-center px-6 py-3 bg-[#C9A84C] text-[#0D1B3E] font-bold text-sm rounded hover:bg-[#b8943e] transition-colors"
                >
                  Register for Campus Recruitment
                </Link>
              </div>
            </FadeIn>
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
              Ready to Launch Your Career?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Join JNNCE and benefit from our strong industry connections and dedicated placement
              support.
            </p>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0D1B3E] text-white font-semibold rounded hover:bg-[#162d5e] transition-colors text-sm"
            >
              Apply for Admissions 2025 <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
