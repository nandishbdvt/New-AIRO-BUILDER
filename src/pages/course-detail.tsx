import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  BookOpen,
  Users,
  Clock,
  CheckCircle,
  FlaskConical,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Mail,
  Award,
  FileText,
  Lightbulb,
} from 'lucide-react';
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

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <Navigate to="/courses" replace />;

  const otherCourses = courses.filter((c) => c.slug !== slug);

  return (
    <main className="pt-20 bg-[#F8F6F0]">
      {/* Hero */}
      <section className="bg-[#0D1B3E] py-16 relative overflow-hidden">
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
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#C9A84C] transition-colors mb-6"
            >
              <ArrowLeft size={15} /> Back to All Programs
            </Link>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-2">
                  B.E. Program · {course.affiliation}
                </p>
                <h1
                  className="text-5xl sm:text-6xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  {course.code}
                </h1>
                <p className="text-white/70 text-xl">{course.name}</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  { icon: Users, label: `${course.intake} Seats` },
                  { icon: Clock, label: course.duration },
                  { icon: BookOpen, label: '8 Semesters' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/70 text-sm"
                  >
                    <Icon size={14} className="text-[#C9A84C]" /> {label}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h2
                  className="text-2xl font-bold text-[#0D1B3E] mb-4"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  Program Overview
                </h2>
                <div className="w-10 h-0.5 bg-[#C9A84C] mb-5" />
                <p className="text-gray-600 leading-relaxed">{course.overview}</p>
              </div>
            </FadeIn>

            {/* Core Subjects */}
            <FadeIn delay={0.05}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-[#0D1B3E]/5 rounded-lg flex items-center justify-center">
                    <BookOpen size={18} className="text-[#C9A84C]" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#0D1B3E]"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    All Core Subjects
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.subjects.map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05, ease: 'easeOut' as const }}
                      className="flex items-center gap-3 bg-[#F8F6F0] rounded-lg px-4 py-3 border border-gray-100"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#C9A84C] shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{s}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Laboratory Facilities */}
            <FadeIn delay={0.08}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-[#0D1B3E]/5 rounded-lg flex items-center justify-center">
                    <FlaskConical size={18} className="text-[#C9A84C]" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#0D1B3E]"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    Laboratory Facilities
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.labs.map((lab, i) => (
                    <motion.div
                      key={lab}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.07, ease: 'easeOut' as const }}
                      className="bg-[#0D1B3E] rounded-xl px-5 py-4 flex items-center gap-3"
                    >
                      <FlaskConical size={16} className="text-[#C9A84C] shrink-0" />
                      <span className="text-white text-sm font-medium">{lab}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Career Opportunities */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-[#0D1B3E]/5 rounded-lg flex items-center justify-center">
                    <Briefcase size={18} className="text-[#C9A84C]" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#0D1B3E]"
                    style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                  >
                    Career Opportunities
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {course.careers.map((c) => (
                    <span
                      key={c}
                      className="px-4 py-2 border-2 border-[#C9A84C]/40 text-[#0D1B3E] rounded-lg text-sm font-semibold hover:bg-[#C9A84C]/10 transition-colors"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Department Faculty */}
            <FadeIn delay={0.12}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-[#0D1B3E]/5 rounded-lg flex items-center justify-center">
                    <GraduationCap size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <h2
                      className="text-2xl font-bold text-[#0D1B3E]"
                      style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                    >
                      Department Faculty
                    </h2>
                    <p className="text-gray-400 text-xs mt-0.5">{course.faculty.length} faculty members · HOD listed first</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {course.faculty.map((f, i) => (
                    <motion.div
                      key={f.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.04, ease: 'easeOut' as const }}
                      className={`rounded-xl border overflow-hidden ${i === 0 ? 'border-[#C9A84C]/40 bg-[#FFFDF5]' : 'border-gray-100 bg-[#F8F6F0]/50'}`}
                    >
                      {/* Top strip for HOD */}
                      {i === 0 && (
                        <div className="bg-[#C9A84C] px-4 py-1.5 flex items-center gap-2">
                          <Award size={12} className="text-[#0D1B3E]" />
                          <span className="text-[#0D1B3E] text-xs font-bold tracking-wide uppercase">Head of Department</span>
                        </div>
                      )}

                      <div className="p-5">
                        {/* Header row: avatar + name + meta */}
                        <div className="flex items-start gap-4 mb-4">
                          {/* Avatar */}
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-lg shadow-md"
                            style={{ backgroundColor: f.photoColor, fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                          >
                            {f.photoInitials}
                          </div>

                          {/* Name + designation + meta */}
                          <div className="flex-1 min-w-0">
                            <h3
                              className="text-[#0D1B3E] font-bold text-base leading-snug"
                              style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                            >
                              {f.name}
                            </h3>
                            <p className="text-[#C9A84C] text-xs font-semibold mt-0.5">{f.designation}</p>
                            <p className="text-gray-500 text-xs mt-1">{f.qualification}</p>
                            <div className="flex flex-wrap gap-3 mt-2">
                              <span className="flex items-center gap-1 text-gray-400 text-xs">
                                <Briefcase size={11} /> {f.experience} experience
                              </span>
                              <span className="flex items-center gap-1 text-gray-400 text-xs">
                                <FileText size={11} /> {f.publications} publications
                              </span>
                              {f.patents.length > 0 && (
                                <span className="flex items-center gap-1 text-gray-400 text-xs">
                                  <Lightbulb size={11} /> {f.patents.length} patent{f.patents.length > 1 ? 's' : ''}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Email */}
                          <a
                            href={`mailto:${f.email}`}
                            className="hidden sm:flex items-center gap-1.5 text-xs text-[#0D1B3E]/50 hover:text-[#C9A84C] transition-colors shrink-0"
                          >
                            <Mail size={13} /> {f.email}
                          </a>
                        </div>

                        {/* Specialisation badge */}
                        <div className="mb-3">
                          <span className="inline-block bg-[#0D1B3E]/5 text-[#0D1B3E] text-xs font-medium px-3 py-1 rounded-full border border-[#0D1B3E]/10">
                            {f.specialisation}
                          </span>
                        </div>

                        {/* Bio */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{f.bio}</p>

                        {/* Publications */}
                        {f.selectedPublications.length > 0 && (
                          <div className="mb-4">
                            <p className="text-xs font-semibold text-[#0D1B3E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <FileText size={11} className="text-[#C9A84C]" /> Selected Publications
                            </p>
                            <ul className="space-y-1.5">
                              {f.selectedPublications.map((pub) => (
                                <li key={pub} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                                  <span className="w-1 h-1 rounded-full bg-[#C9A84C] mt-1.5 shrink-0" />
                                  {pub}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Patents */}
                        {f.patents.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold text-[#0D1B3E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                              <Lightbulb size={11} className="text-[#C9A84C]" /> Patents Filed / Granted
                            </p>
                            <ul className="space-y-1.5">
                              {f.patents.map((pat) => (
                                <li key={pat} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                                  <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                  {pat}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Eligibility Card */}
            <FadeIn delay={0.1}>
              <div className="bg-[#0D1B3E] rounded-2xl p-6 sticky top-24">
                <h3
                  className="text-[#C9A84C] font-bold text-lg mb-4"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  Eligibility & Admission
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    '10+2 with Physics, Chemistry & Mathematics',
                    'Minimum 45% aggregate in PCM',
                    '40% for SC/ST candidates',
                    'Valid KCET or COMEDK rank',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-green-400 mt-0.5 shrink-0" />
                      <span className="text-white/70 text-xs leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4 mb-5">
                  <p className="text-white/40 text-xs mb-1">Affiliated to</p>
                  <p className="text-white text-sm font-semibold">{course.affiliation}</p>
                  <p className="text-white/40 text-xs mt-2 mb-1">Approved by</p>
                  <p className="text-white text-sm font-semibold">AICTE, New Delhi</p>
                </div>
                <Link
                  to="/admissions"
                  className="block w-full text-center px-5 py-3 bg-[#C9A84C] text-[#0D1B3E] font-bold text-sm rounded-lg hover:bg-[#b8943e] transition-colors"
                >
                  Apply Now <ArrowRight size={14} className="inline ml-1" />
                </Link>
                <Link
                  to="/placements"
                  className="block w-full text-center px-5 py-3 border border-white/20 text-white/70 font-medium text-sm rounded-lg hover:border-white/50 transition-colors mt-3"
                >
                  View Placement Records
                </Link>
              </div>
            </FadeIn>

            {/* Other Programs */}
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3
                  className="text-[#0D1B3E] font-bold text-base mb-4"
                  style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                >
                  Other Programs
                </h3>
                <div className="space-y-2">
                  {otherCourses.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/courses/${c.slug}`}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#F8F6F0] transition-colors group"
                    >
                      <div>
                        <span className="text-[#C9A84C] text-xs font-bold">{c.code}</span>
                        <p className="text-[#0D1B3E] text-xs font-medium leading-snug">{c.name}</p>
                      </div>
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-[#C9A84C] transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
