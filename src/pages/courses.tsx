import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Clock } from 'lucide-react';
import { courses } from '../data/courses';

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

function CourseCard({ course, index }: { course: (typeof courses)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' as const }}
      className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Card Header */}
      <div className="bg-[#0D1B3E] p-6">
        <div className="flex items-start justify-between mb-3">
          <span
            className="text-4xl font-bold text-[#C9A84C]/30"
            style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
          >
            {course.code}
          </span>
          <span className="text-xs bg-[#C9A84C]/20 text-[#C9A84C] px-3 py-1 rounded-full font-medium">
            {course.intake} seats
          </span>
        </div>
        <h3
          className="text-white text-xl font-bold leading-snug"
          style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
        >
          {course.name}
        </h3>
        <div className="flex gap-4 mt-3">
          <span className="flex items-center gap-1.5 text-white/50 text-xs">
            <Clock size={12} /> {course.duration}
          </span>
          <span className="flex items-center gap-1.5 text-white/50 text-xs">
            <Users size={12} /> {course.intake} students/year
          </span>
          <span className="flex items-center gap-1.5 text-white/50 text-xs">
            <BookOpen size={12} /> 8 Semesters
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-gray-600 text-sm leading-relaxed mb-5">{course.overview}</p>

        {/* Key Subjects preview */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-[#0D1B3E] uppercase tracking-wider mb-3">
            Key Subjects
          </p>
          <div className="flex flex-wrap gap-2">
            {course.subjects.slice(0, 4).map((s) => (
              <span
                key={s}
                className="text-xs bg-[#F8F6F0] text-gray-600 px-2.5 py-1 rounded border border-gray-100"
              >
                {s}
              </span>
            ))}
            {course.subjects.length > 4 && (
              <span className="text-xs text-[#C9A84C] font-medium px-2.5 py-1">
                +{course.subjects.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Faculty count */}
        <p className="text-xs text-gray-400 mb-5">
          <span className="font-semibold text-[#0D1B3E]">{course.faculty.length}</span> faculty members · {course.labs.length} labs
        </p>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            to={`/courses/${course.slug}`}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#0D1B3E] text-white text-sm font-semibold rounded-lg hover:bg-[#162d5e] transition-colors"
          >
            View Full Details <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function CoursesPage() {
  return (
    <main className="pt-20 bg-[#F8F6F0]">
      {/* Hero */}
      <section className="relative bg-[#0D1B3E] py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('/airo-assets/images/pages/courses/hero')` }}
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
              B.E. Programs — VTU Affiliated
            </p>
            <h1
              className="text-5xl sm:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
            >
              Engineering Programs
            </h1>
            <div className="w-16 h-0.5 bg-[#C9A84C] mb-6" />
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              Six four-year undergraduate programs affiliated to Visvesvaraya Technological
              University (VTU), Belagavi, and approved by AICTE, New Delhi.
            </p>
          </FadeIn>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-12">
            {[
              { value: '6', label: 'Programs' },
              { value: '420', label: 'Total Intake' },
              { value: '4 Yrs', label: 'Duration' },
              { value: 'VTU', label: 'Affiliated To' },
            ].map(({ value, label }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div
                    className="text-2xl font-bold text-[#C9A84C]"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {value}
                  </div>
                  <p className="text-white/50 text-xs mt-1">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Explore All Branches
              </p>
              <h2
                className="text-4xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                Choose Your Engineering Path
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
              <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
                Click "View Full Details" on any program to explore subjects, labs, career paths, and faculty.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <CourseCard key={course.code} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                How to Join
              </p>
              <h2
                className="text-4xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                Admission Process
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Appear for KCET / COMEDK',
                desc: 'Register and appear for Karnataka CET or COMEDK entrance examination.',
              },
              {
                step: '02',
                title: 'Counselling & Seat Allotment',
                desc: 'Participate in centralised counselling conducted by KEA for seat allotment.',
              },
              {
                step: '03',
                title: 'Document Verification',
                desc: 'Submit original documents — marks cards, caste certificate, and transfer certificate.',
              },
              {
                step: '04',
                title: 'Fee Payment & Enrolment',
                desc: 'Pay the semester fee and complete enrolment at the college office.',
              },
            ].map(({ step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 0.1}>
                <div className="relative p-6 border border-gray-100 rounded-xl hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-300">
                  <span
                    className="text-6xl font-bold text-[#0D1B3E]/5 absolute top-4 right-4 leading-none select-none"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {step}
                  </span>
                  <div className="w-8 h-8 bg-[#C9A84C] rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#0D1B3E] text-xs font-bold">{step}</span>
                  </div>
                  <h3
                    className="text-[#0D1B3E] font-bold mb-2 text-base"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fee-structure" className="py-20 bg-[#F8F6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Transparency in Fees
              </p>
              <h2
                className="text-4xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                Fee Structure (2025–26)
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0D1B3E] text-white">
                    <th className="text-left px-6 py-4 font-semibold">Program</th>
                    <th className="text-center px-4 py-4 font-semibold">Govt. Quota</th>
                    <th className="text-center px-4 py-4 font-semibold">Management Quota</th>
                    <th className="text-center px-4 py-4 font-semibold">NRI Quota</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map(({ code, name }, i) => (
                    <tr
                      key={code}
                      className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8F6F0]/50'}`}
                    >
                      <td className="px-6 py-4">
                        <span className="font-semibold text-[#0D1B3E]">{code}</span>
                        <span className="text-gray-400 text-xs ml-2 hidden sm:inline">{name}</span>
                      </td>
                      <td className="text-center px-4 py-4 text-gray-600">₹55,000/yr</td>
                      <td className="text-center px-4 py-4 text-gray-600">₹1,10,000/yr</td>
                      <td className="text-center px-4 py-4 text-gray-600">USD 3,000/yr</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-6 py-4 bg-[#F8F6F0] border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  * Fees are indicative and subject to revision by the Fee Fixation Committee,
                  Government of Karnataka. Hostel and transport charges are additional.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
            >
              Ready to Begin Your Engineering Journey?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Applications for the 2025–26 academic year are now open. Secure your seat at JNNCE.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9A84C] text-[#0D1B3E] font-bold rounded hover:bg-[#b8943e] transition-colors text-sm"
              >
                Apply for Admissions 2025 <ArrowRight size={16} />
              </Link>
              <Link
                to="/placements"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded hover:border-white transition-colors text-sm"
              >
                View Placement Records
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
