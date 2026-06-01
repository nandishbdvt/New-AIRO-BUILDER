import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Monitor,
  FlaskConical,
  Home,
  Trophy,
  Utensils,
  Wifi,
  Bus,
  HeartPulse,
  Landmark,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

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

const categories = [
  { id: 'all', label: 'All Facilities' },
  { id: 'academic', label: 'Academic' },
  { id: 'residential', label: 'Residential' },
  { id: 'sports', label: 'Sports & Recreation' },
  { id: 'support', label: 'Student Support' },
];

const facilities = [
  {
    id: 'library',
    category: 'academic',
    icon: BookOpen,
    title: 'Central Library',
    tagline: '40,000+ volumes & digital resources',
    image: '/airo-assets/images/pages/home/library',
    description:
      'The JNNCE Central Library is a knowledge hub spread across two floors with a seating capacity of 300 students. It houses over 40,000 books, national and international journals, and provides access to digital databases including IEEE Xplore, Springer, and NPTEL.',
    highlights: [
      '40,000+ books and reference volumes',
      'Subscriptions to IEEE Xplore, Springer & NPTEL',
      'Dedicated digital resource centre with 50 terminals',
      '24×7 reading room access for students',
      'Book bank facility for economically weaker students',
      'Inter-library loan facility with VTU libraries',
    ],
    area: '2,400 sq.ft.',
    capacity: '300 seats',
  },
  {
    id: 'computer-labs',
    category: 'academic',
    icon: Monitor,
    title: 'Computer Laboratories',
    tagline: '300+ workstations with high-speed internet',
    image: '/airo-assets/images/pages/home/lab',
    description:
      'JNNCE operates six fully equipped computer laboratories with over 300 workstations running the latest hardware and software. All labs are connected to a 1 Gbps internet backbone and are available to students beyond class hours.',
    highlights: [
      '6 dedicated computer labs with 300+ workstations',
      '1 Gbps internet connectivity across campus',
      'Licensed software: MATLAB, AutoCAD, Oracle, Visual Studio',
      'Dedicated AI & Machine Learning lab',
      'Open access labs available till 9 PM on weekdays',
      'Wi-Fi enabled throughout all lab buildings',
    ],
    area: '6 labs × 600 sq.ft.',
    capacity: '300+ workstations',
  },
  {
    id: 'research-labs',
    category: 'academic',
    icon: FlaskConical,
    title: 'Research & Specialised Labs',
    tagline: 'Branch-specific labs for hands-on learning',
    image: '/airo-assets/images/pages/home/lab',
    description:
      'Each engineering department at JNNCE is equipped with specialised laboratories aligned with the VTU curriculum and industry requirements. These labs support both undergraduate experiments and faculty research projects.',
    highlights: [
      'VLSI & Embedded Systems Lab (ECE)',
      'Fluid Mechanics & Thermal Engineering Lab (ME)',
      'Structures & Geo-Technical Lab (CV)',
      'Power Electronics & Electrical Machines Lab (EEE)',
      'IoT & Cyber Security Lab (ISE)',
      'Project & Innovation Lab for final-year students',
    ],
    area: '15+ specialised labs',
    capacity: 'Department-wise',
  },
  {
    id: 'hostel',
    category: 'residential',
    icon: Home,
    title: 'Student Hostels',
    tagline: 'Separate hostels for boys and girls',
    image: '/airo-assets/images/pages/home/hostel',
    description:
      'JNNCE provides comfortable and secure hostel accommodation for outstation students. Separate hostels for boys and girls are located within the campus, with round-the-clock security and all essential amenities.',
    highlights: [
      'Separate hostels for boys (capacity: 300) and girls (capacity: 200)',
      'Furnished rooms with study tables and wardrobes',
      'Hot water supply and 24×7 power backup',
      'In-house mess with hygienic vegetarian and non-vegetarian meals',
      'Common room with TV, indoor games, and reading area',
      'CCTV surveillance and security personnel on duty',
    ],
    area: 'On-campus',
    capacity: '500 students',
  },
  {
    id: 'sports',
    category: 'sports',
    icon: Trophy,
    title: 'Sports Complex',
    tagline: 'Outdoor and indoor sports for all students',
    image: '/airo-assets/images/pages/home/sports',
    description:
      'The JNNCE Sports Complex encourages physical fitness and competitive spirit among students. The campus has dedicated grounds for multiple outdoor sports and a well-equipped indoor sports hall.',
    highlights: [
      'Cricket ground with practice nets',
      'Football and volleyball courts',
      'Basketball and badminton courts',
      'Table tennis and chess facilities',
      'Annual sports meet and inter-college tournaments',
      'Qualified physical education instructor on staff',
    ],
    area: '5+ acres',
    capacity: 'Open to all students',
  },
  {
    id: 'canteen',
    category: 'support',
    icon: Utensils,
    title: 'Canteen & Cafeteria',
    tagline: 'Hygienic, affordable meals on campus',
    image: '/airo-assets/images/pages/facilities/canteen',
    description:
      'The campus canteen serves freshly prepared, hygienic meals and snacks throughout the day. A separate faculty cafeteria is also available. The canteen is managed under the supervision of the college administration to maintain quality and affordability.',
    highlights: [
      'Breakfast, lunch, and evening snacks served daily',
      'Vegetarian and non-vegetarian options available',
      'Subsidised meal rates for students',
      'Seating capacity of 200+ students',
      'Regular hygiene audits by college administration',
      'Special menus during festivals and events',
    ],
    area: '2,000 sq.ft.',
    capacity: '200+ seats',
  },
  {
    id: 'wifi',
    category: 'support',
    icon: Wifi,
    title: 'Campus-wide Wi-Fi',
    tagline: '1 Gbps internet across the entire campus',
    image: '/airo-assets/images/pages/home/lab',
    description:
      'JNNCE provides seamless high-speed Wi-Fi connectivity across all academic buildings, hostels, and common areas. Students can access digital learning resources, online courses, and research databases from anywhere on campus.',
    highlights: [
      '1 Gbps internet backbone with redundant links',
      'Wi-Fi coverage in all classrooms, labs, and hostels',
      'Dedicated bandwidth for research and e-learning',
      'Firewall-protected and content-filtered network',
      'Access to NPTEL, Coursera, and VTU e-learning portals',
      '24×7 network monitoring and IT support',
    ],
    area: 'Entire campus',
    capacity: 'Unlimited users',
  },
  {
    id: 'transport',
    category: 'support',
    icon: Bus,
    title: 'Transport Facility',
    tagline: 'Bus routes covering Shivamogga city and surroundings',
    image: '/airo-assets/images/pages/home/hero',
    description:
      'JNNCE operates a fleet of college buses covering major routes across Shivamogga city and surrounding towns. The transport facility ensures safe and timely commute for day scholars.',
    highlights: [
      '12 buses covering 15+ routes across Shivamogga',
      'Routes to Bhadravathi, Shimoga, Sagar, and Thirthahalli',
      'GPS-tracked vehicles for safety',
      'Nominal transport fee charged per semester',
      'Dedicated transport coordinator for grievances',
      'Special buses for examination and event days',
    ],
    area: 'City & surroundings',
    capacity: '600+ students',
  },
  {
    id: 'health',
    category: 'support',
    icon: HeartPulse,
    title: 'Health Centre',
    tagline: 'On-campus medical care for students and staff',
    image: '/airo-assets/images/pages/home/hostel',
    description:
      'The JNNCE Health Centre provides primary medical care to students and staff. A qualified doctor visits the campus regularly, and a nurse is available on all working days. Tie-ups with nearby hospitals ensure emergency care.',
    highlights: [
      'Qualified nurse available on all working days',
      'Doctor visits twice a week',
      'First-aid and emergency care facilities',
      'Tie-up with McGann Hospital, Shivamogga for referrals',
      'Free consultation for students',
      'Ambulance facility for emergencies',
    ],
    area: 'On-campus',
    capacity: 'All students & staff',
  },
  {
    id: 'auditorium',
    category: 'academic',
    icon: Landmark,
    title: 'Auditorium & Seminar Halls',
    tagline: 'Spaces for events, seminars, and cultural activities',
    image: '/airo-assets/images/pages/facilities/hero',
    description:
      'JNNCE has a well-equipped main auditorium and multiple seminar halls that host technical symposia, cultural events, guest lectures, and convocation ceremonies throughout the academic year.',
    highlights: [
      'Main auditorium with 800-seat capacity',
      '3 seminar halls with 100–150 seats each',
      'Audio-visual equipment and projection systems',
      'Air-conditioned conference room for faculty meetings',
      'Hosts annual technical fest "Technovanza"',
      'Cultural events and inter-college competitions',
    ],
    area: '8,000 sq.ft. (auditorium)',
    capacity: '800 (main hall)',
  },
];

function FacilityCard({
  facility,
  index,
}: {
  facility: (typeof facilities)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = facility.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' as const }}
      className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url('${facility.image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 flex items-end gap-3">
          <div className="w-9 h-9 bg-[#C9A84C] rounded-lg flex items-center justify-center shrink-0">
            <Icon size={18} className="text-[#0D1B3E]" />
          </div>
          <div>
            <h3
              className="text-white font-bold text-lg leading-tight"
              style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
            >
              {facility.title}
            </h3>
            <p className="text-white/70 text-xs">{facility.tagline}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Meta */}
        <div className="flex gap-4 mb-4">
          <div className="text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Area</p>
            <p className="text-xs font-semibold text-[#0D1B3E] mt-0.5">{facility.area}</p>
          </div>
          <div className="w-px bg-gray-100" />
          <div className="text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Capacity</p>
            <p className="text-xs font-semibold text-[#0D1B3E] mt-0.5">{facility.capacity}</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {facility.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold hover:text-[#b8943e] transition-colors"
        >
          {expanded ? 'Show Less' : 'View Highlights'}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={15} />
          </motion.span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' as const }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                {facility.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FacilitiesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? facilities
      : facilities.filter((f) => f.category === activeCategory);

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
              Campus Infrastructure
            </p>
            <h1
              className="text-5xl sm:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
            >
              Facilities
            </h1>
            <div className="w-16 h-0.5 bg-[#C9A84C] mb-6" />
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              JNNCE provides world-class infrastructure to support academic excellence, research,
              residential life, and the overall well-being of every student.
            </p>
          </FadeIn>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-12">
            {[
              { value: '25+', label: 'Laboratories' },
              { value: '40,000+', label: 'Library Books' },
              { value: '500+', label: 'Hostel Capacity' },
              { value: '15+', label: 'Bus Routes' },
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

      {/* Filter Tabs + Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-[#0D1B3E] text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0D1B3E] hover:text-[#0D1B3E]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((facility, i) => (
                <FacilityCard key={facility.id} facility={facility} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Campus Life Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                Life at JNNCE
              </p>
              <h2
                className="text-4xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
              >
                A Campus Built for Growth
              </h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: '/airo-assets/images/pages/home/library',
                title: 'Academic Excellence',
                desc: 'State-of-the-art labs, a rich library, and digital resources to fuel your learning.',
              },
              {
                image: '/airo-assets/images/pages/home/hostel',
                title: 'Comfortable Living',
                desc: 'Safe, well-maintained hostels with all amenities so you can focus on studies.',
              },
              {
                image: '/airo-assets/images/pages/home/sports',
                title: 'Active Campus Life',
                desc: 'Sports, cultural events, and clubs to develop you beyond the classroom.',
              },
            ].map(({ image, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${image}')` }}
                  />
                  <div className="p-5">
                    <h3
                      className="text-[#0D1B3E] font-bold text-lg mb-2"
                      style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}
                    >
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
              Experience JNNCE for Yourself
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Visit our campus in Shivamogga to see our facilities firsthand. Admissions for
              2025–26 are now open.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9A84C] text-[#0D1B3E] font-bold rounded hover:bg-[#b8943e] transition-colors text-sm"
              >
                Apply for Admissions 2025 <ArrowRight size={16} />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded hover:border-white transition-colors text-sm"
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
