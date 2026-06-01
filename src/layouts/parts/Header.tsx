import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

const topLinks = [
  { label: 'NIRF', to: '/nirf' },
  { label: 'VTU', to: '/vtu' },
  { label: 'NAAC', to: '/naac' },
  { label: 'Virtual Tour 360°', to: '/virtual-tour' },
  { label: 'IRINS', to: '/irins' },
];

const navLinks = [
  {
    label: 'Home',
    to: '/',
    submenu: [
      {
        label: 'About JNNCE',
        to: '/aboutjnnce',
      },
      {
        label: 'Vision & Mission',
        to: '/vision',
      },
      {
        label: 'About NES',
        to: '/aboutnes',
      },
      {
        label: 'Messages',
        to: '#',
        submenu: [
          {
            label: 'President Message',
            to: '/messagefrompresident',
          },
          {
            label: 'Secretary Message',
            to: '/messagefromsecretary',
          },
          {
            label: 'Principal Message',
            to: '/messagefromprincipal',
          },
          {
            label: 'Dean Academic Message',
            to: '/messagefromac',
          },
        ],
      },
      {
        label: 'Governance',
        to: '#',
        submenu: [
          {
            label: 'Governing Council',
            to: '/governingcouncil',
          },
          {
            label: 'Statutory Committees',
            to: '/statutory-committees',
          },
          {
            label: 'Administrative Committees',
            to: '/admin-committees',
          },
        ],
      },
      {
        label: 'Administration',
        to: '#',
        submenu: [
          {
            label: 'Principal',
            to: '/principal',
          },
          {
            label: 'Key Functionaries',
            to: '/keyfunctionaries',
          },
          {
            label: 'Administrative Section',
            to: '/administrativesection',
          },
        ],
      },
      {
        label: 'Reports & Downloads',
        to: '/downloads',
      },
      {
        label: 'Accreditation & Ranking',
        to: '/ranking',
      },
      {
        label: 'Green Initiatives',
        to: '/greenpolicy',
      },
      {
        label: 'Employee Benefits',
        to: '/empbenefits',
      },
      {
        label: 'College Automation',
        to: '/automation',
      },
      {
        label: 'Contact Us',
        to: '/contact',
      },
    ],
  },

  {
    label: 'Admissions',
    to: '/admissions',
    submenu: [
      {
        label: 'UG Programme',
        to: '/ug',
      },
      {
        label: 'PG Programme',
        to: '/pg',
      },
      {
        label: 'Research Programme',
        to: '/phd',
      },
      {
        label: 'Prospectus',
        to: '/prospectus',
      },
      {
        label: 'Admission Help Desk',
        to: '/admissioncontact',
      },
    ],
  },

  {
    label: 'Academics',
    to: '/academics',
    submenu: [
      {
        label: 'Departments',
        to: '/departments',
        submenu: [
          {
            label: 'Civil Engineering',
            to: '/courses/civil',
          },
          {
            label: 'Mechanical Engineering',
            to: '/courses/mech',
          },
          {
            label:
              'Electrical & Electronics Engineering',
            to: '/courses/eee',
          },
          {
            label:
              'Electronics & Communication Engineering',
            to: '/courses/ece',
          },
          {
            label:
              'Computer Science & Engineering',
            to: '/courses/cse',
          },
          {
            label:
              'Information Science & Engineering',
            to: '/courses/ise',
          },
          {
            label:
              'Electronics & Telecommunication',
            to: '/courses/tce',
          },
          {
            label: 'AIML',
            to: '/courses/aiml',
          },
          {
            label: 'RAI',
            to: '/courses/rai',
          },
          {
            label: 'MBA',
            to: '/courses/mba',
          },
          {
            label: 'MCA',
            to: '/courses/mca',
          },
          {
            label: 'Physics',
            to: '/courses/phy',
          },
          {
            label: 'Chemistry',
            to: '/courses/chem',
          },
          {
            label: 'Mathematics',
            to: '/courses/maths',
          },
        ],
      },
      {
        label: 'Calendar of Events',
        to: '/coe',
      },
      {
        label: 'Professional Bodies',
        to: '/iei',
        submenu: [
          {
            label: 'IE(I)',
            to: '/iei',
          },
          {
            label: 'CSI',
            to: '/csi',
          },
          {
            label: 'SAE',
            to: '/sae',
          },
          {
            label: 'IIF',
            to: '/iif',
          },
          {
            label: 'IETE',
            to: '/iete',
          },
          {
            label: 'ISTE',
            to: '/iste',
          },
          {
            label: 'IEEE',
            to: '/ieee',
          },
        ],
      },
      {
        label: 'Industry Collaboration & MoUs',
        to: '/mou',
      },
      {
        label: 'JNNCE Newsletter',
        to: '/newsletter',
      },
    ],
  },

  {
    label: 'Facilities',
    to: '/facilities',
    submenu: [
      {
        label: 'Library',
        to: '/library',
      },
      {
        label: 'Hostel',
        to: '/hostel',
      },
      {
        label: 'Sports',
        to: '/sports',
      },
      {
        label: 'Transport',
        to: '/transport',
      },
      {
        label: 'Medical Centre',
        to: '/mcentre',
      },
      {
        label: 'Guest House',
        to: '/guesthouse',
      },
      {
        label: 'Post Office',
        to: '/pof',
      },
      {
        label: 'Canara Bank',
        to: '/cba',
      },
      {
        label: 'Canteen',
        to: '/cant',
      },
    ],
  },

  {
    label: 'Student Support',
    to: '/studentsupport',
    submenu: [
      {
        label: 'Scholarships',
        to: '/scholarship',
      },
      {
        label: 'Mentoring Scheme',
        to: '/mentoring',
      },
      {
        label: 'Anti Ragging',
        to: '/antiragging',
      },
      {
        label: 'Exam',
        to: '/exam',
      },
      {
        label: 'Fee Payment',
        to: '/feepayment',
      },
      {
        label: 'NSS',
        to: '/nss',
      },
      {
        label: 'Red Cross',
        to: '/redcross',
      },
      {
        label: 'NPTEL',
        to: '/nptel',
      },
      {
        label: 'Cultural Crew',
        to: '/culturalcrew',
      },
      {
        label: 'Student Clubs',
        to: '/studentclubs',
      },
      {
        label: 'Meritorious Awards',
        to: '/meritoriousawards',
      },
    ],
  },

  {
    label: 'CIE & Research Park',
    to: '/cie',
    submenu: [
      {
        label:
          'Center for Innovation & Entrepreneurship',
        to: '/cie',
      },
      {
        label: 'NAINC',
        to: '/nainc',
      },
      {
        label: 'NewGen IEDC',
        to: '/newgeniedc',
      },
      {
        label: 'CART',
        to: '/cart',
      },
      {
        label: 'TBI',
        to: '/tbi',
      },
      {
        label: 'Research Centre',
        to: '/rcentre',
      },
      {
        label: 'Research Park',
        to: '/rpark',
      },
      {
        label: 'Consultancy',
        to: '/consultaancy',
      },
      {
        label: 'Funding',
        to: '/funding',
      },
    ],
  },

  {
    label: 'Training & Placement',
    to: '/placement',
    submenu: [
      {
        label: 'Placement',
        to: '/placement',
      },
      {
        label: 'Training',
        to: '/training',
      },
      {
        label: 'Internship',
        to: '/internship',
      },
    ],
  },

  {
    label: 'IQAC',
    to: '/iqac',
    submenu: [
      {
        label: 'Chairman Message',
        to: '/cm',
      },
      {
        label: 'Members',
        to: '/iqacmembers',
      },
      {
        label: 'Calendar',
        to: '/iqac-calendar',
      },
      {
        label: 'Meeting Proceedings',
        to: '/iqacmeepro',
      },
    ],
  },

  {
    label: 'More',
    to: '/more',
    submenu: [
      {
        label: 'Alumni',
        to: '/alumni',
      },
      {
        label: 'Photo Gallery',
        to: '/gallery',
      },
      {
        label: 'Campus Life',
        to: '/campuslife',
      },
      {
        label: 'Media Coverage',
        to: '/media',
      },
      {
        label: 'Career Opportunity',
        to: '/jnncecareer',
      },
    ],
  },
];

type MenuItemProps = {
  item: any;
};

function DesktopMenuItem({
  item,
}: MenuItemProps) {
  return (
    <div className="relative group">
      <Link
        to={item.to}
        className="flex items-center gap-1 py-5 text-white hover:text-[#C9A84C] transition text-sm font-medium"
      >
        {item.label}

        {item.submenu && (
          <ChevronDown size={16} />
        )}
      </Link>

      {item.submenu && (
        <div className="absolute left-0 top-full hidden group-hover:block bg-white min-w-[280px] shadow-2xl rounded-md z-50">

          {item.submenu.map((sub: any) => (
            <div
              key={sub.label}
              className="relative group/sub"
            >
              <Link
                to={sub.to}
                className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-[#0D1B3E] hover:text-white border-b"
              >
                {sub.label}

                {sub.submenu && (
                  <ChevronRight size={15} />
                )}
              </Link>

              {sub.submenu && (
                <div className="absolute top-0 left-full hidden group-hover/sub:block bg-white min-w-[280px] shadow-2xl rounded-md overflow-hidden">

                  {sub.submenu.map(
                    (third: any) => (
                      <Link
                        key={third.to}
                        to={third.to}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#0D1B3E] hover:text-white border-b"
                      >
                        {third.label}
                      </Link>
                    )
                  )}

                </div>
              )}
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">

      {/* TOP BAR */}
      <div className="bg-[#0D1B3E] text-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="h-10 flex items-center justify-center gap-6 text-xs font-medium">

            {topLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-[#C9A84C] transition"
              >
                {link.label}
              </Link>
            ))}

          </div>

        </div>
      </div>

      {/* HEADER */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="py-4 flex items-center justify-between">

            <Link
              to="/"
              className="flex items-center gap-4"
            >
              <img
                src={`${import.meta.env.BASE_URL}jnnlogo.jfif`}
                alt="JNNCE Logo"
                className="w-20 h-20 object-contain"
              />

              <div>

                <h1 className="text-gray-700 font-medium text-sm">
                  National Education Society (R)
                </h1>

                <p className="text-2xl font-bold text-[#0D1B3E] leading-snug">
                  Jawaharlal Nehru New College of
                  Engineering (JNNCE)
                </p>

                <p className="text-sm text-gray-600">
                  Shivamogga, Karnataka
                </p>

                <p className="text-xs leading-tight text-gray-500 max-w-4xl">
                  Approved by AICTE, Accredited by NBA
                  and NAAC, Affiliated to VTU Belagavi
                </p>

              </div>
            </Link>

            <div className="hidden lg:block text-right">

              <p className="font-semibold text-[#0D1B3E]">
                CET CODE: E065
              </p>

              <p className="font-semibold text-[#0D1B3E]">
                COMEDK CODE: E059
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4">

          <div className="h-16 flex items-center justify-between">

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-6">

              {navLinks.map((item) => (
                <DesktopMenuItem
                  key={item.label}
                  item={item}
                />
              ))}

            </nav>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden text-white"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >
              {menuOpen ? <X /> : <Menu />}
            </button>

          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="lg:hidden pb-4 bg-[#0D1B3E] max-h-[80vh] overflow-y-auto">

              {navLinks.map((link) => (
                <div key={link.label}>

                  <Link
                    to={link.to}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="block py-3 text-white border-b border-white/10 font-medium"
                  >
                    {link.label}
                  </Link>

                  {link.submenu && (
                    <div className="bg-[#13254f]">

                      {link.submenu.map(
                        (sub: any) => (
                          <div key={sub.label}>

                            <Link
                              to={sub.to}
                              className="block pl-5 py-2 text-sm text-gray-300 border-b border-white/5"
                            >
                              • {sub.label}
                            </Link>

                            {sub.submenu && (
                              <div className="bg-[#183066]">

                                {sub.submenu.map(
                                  (
                                    third: any
                                  ) => (
                                    <Link
                                      key={
                                        third.to
                                      }
                                      to={
                                        third.to
                                      }
                                      className="block pl-10 py-2 text-xs text-gray-400 border-b border-white/5"
                                    >
                                      -{' '}
                                      {
                                        third.label
                                      }
                                    </Link>
                                  )
                                )}

                              </div>
                            )}

                          </div>
                        )
                      )}

                    </div>
                  )}

                </div>
              ))}

            </div>
          )}

        </div>
      </div>
    </header>
  );
}