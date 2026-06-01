import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const quickLinks = [
  { label: 'About JNNCE', href: '/' },
  { label: 'Admissions 2025', href: '/admissions' },
  { label: 'Placements', href: '/placements' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'College Management', href: '/management' },
  { label: 'Contact Us', href: '/admissions' },
];

const courses = [
  'Computer Science & Engg.',
  'Electronics & Comm. Engg.',
  'Mechanical Engineering',
  'Civil Engineering',
  'Electrical & Electronics Engg.',
  'Information Science & Engg.',
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B3E] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span
                className="text-3xl font-bold text-[#C9A84C] block"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                JNNCE
              </span>
              <span className="text-xs text-white/50 tracking-widest uppercase">
                JNN College of Engineering
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              Shaping engineers and building futures since 1986. Affiliated to Visvesvaraya
              Technological University (VTU) and approved by AICTE.
            </p>
            <div className="mt-6 flex gap-3">
              <span className="px-3 py-1 border border-[#C9A84C]/40 text-[#C9A84C] text-xs rounded tracking-widest">
                VTU AFFILIATED
              </span>
              <span className="px-3 py-1 border border-[#C9A84C]/40 text-[#C9A84C] text-xs rounded tracking-widest">
                AICTE APPROVED
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-[#C9A84C]/40 rounded-full group-hover:bg-[#C9A84C] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4
              className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
            >
              Programs Offered
            </h4>
            <ul className="space-y-2.5">
              {courses.map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-white/60 text-sm hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-[#C9A84C]/40 rounded-full group-hover:bg-[#C9A84C] transition-colors" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Bhadravathi Road, Shivamogga,
                  <br />
                  Karnataka – 577 204
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">+91 8182 234567</span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">principal@jnnce.ac.in</span>
              </li>
              <li className="flex gap-3">
                <ExternalLink size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <a
                  href="https://www.jnnce.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-[#C9A84C] transition-colors"
                >
                  www.jnnce.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} JNN College of Engineering, Shivamogga. All rights
            reserved.
          </p>
          <p className="text-white/40 text-xs">
            Affiliated to VTU, Belagavi &nbsp;|&nbsp; Approved by AICTE, New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
