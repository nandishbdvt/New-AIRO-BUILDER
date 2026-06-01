import React from "react";
import { Link } from "react-router-dom";

const automationModules = [
  "Academics Automation Module",
  "Administration Automation Module",
  "Accreditation Readiness Engine (Supports NBA, NAAC, NIRF and others)",
];

const facilities = [
  {
    title: "Library and Information Center",
    description:
      "One of the best places in the campus with extensive learning resources and digital facilities.",
    icon: "📚",
  },
  {
    title: "Hi-Tech Auditorium",
    description:
      "Well furnished A/C auditorium equipped with modern audio visual systems.",
    icon: "🎤",
  },
  {
    title: "Modern Class Rooms",
    description:
      "Smart classrooms equipped with projectors, smartboards and digital learning tools.",
    icon: "🏫",
  },
  {
    title: "Hostel and Transport",
    description:
      "Comfortable hostel accommodation and transport facilities for students.",
    icon: "🚌",
  },
  {
    title: "Well Equipped Labs",
    description:
      "Spacious laboratories and workshops for practical and research activities.",
    icon: "🧪",
  },
  {
    title: "Sports and Cafeteria",
    description:
      "Sports facilities and cafeteria supporting overall student development.",
    icon: "🏅",
  },
];

const Automation = () => {
  return (
   <div className="bg-gray-50 text-gray-800 pt-[170px] lg:pt-[80px]">

      {/* Banner */}
      <section className="bg-[#0D1B3E] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            College Automation System
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            JNNCE Automation and Maintenance Services Portal (JAMS)
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Content */}
          <div className="lg:col-span-3">

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              COLLEGE AUTOMATION SYSTEM
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              For College Automation, JNNCE uses an in-house package called
              <span className="font-semibold">
                {" "}JAMS (JNNCE Automation and Maintenance Services Portal)
              </span>,
              which helps all stakeholders access information and data with ease.
            </p>

            {/* Modules */}
            <div className="bg-gray-100 rounded-2xl p-6 mb-8">

              <h3 className="text-2xl font-semibold text-[#0D1B3E] mb-5">
                JAMS Comprises Of
              </h3>

              <ul className="space-y-4">

                {automationModules.map((module, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-green-600 text-xl">✓</span>
                    <span>{module}</span>
                  </li>
                ))}

              </ul>

            </div>

            <p className="text-gray-700 leading-8 mb-6">
              JAMS helps students access their timetable, IA marks,
              holidays, remedial classes, campus facilities, events and many
              other academic activities.
            </p>

            <p className="text-gray-700 leading-8 mb-6">
              It also supports parents and guardians by providing real-time
              updates regarding student progress, attendance, timetable and
              academic performance.
            </p>

            <p className="text-gray-700 leading-8 mb-8">
              JAMS is conceptualized and designed as a future-ready,
              continuously evolving platform with the flexibility to adapt to
              new requirements.
            </p>

            {/* JAMS Portal */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm mb-10">

              <h3 className="text-2xl font-bold text-[#0D1B3E] mb-4">
                Access JAMS Portal
              </h3>

              <p className="text-gray-700 leading-7 mb-5">
                Students and parents can access the JAMS portal using their
                respective User ID and Password provided by the institution.
              </p>

              <a
                href="https://jams-jnnce.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0D1B3E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
              >
                Visit JAMS Portal
              </a>

            </div>

            {/* Screenshot */}
            <div className="mb-12">

              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                JAMS Portal Screenshot
              </h3>

              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">

                <img
                  src="/images/jams-screenshot.png"
                  alt="JAMS Portal Screenshot"
                  className="w-full h-auto object-cover"
                />

              </div>

              <img
                src={`${import.meta.env.BASE_URL}img/jams-screenshot.png`}
                alt="JNNCE"
                className="w-full rounded-xl mb-8"
              />

            </div>

          

          </div>
	
          {/* Sidebar */}
          <aside className="space-y-4">

            <div className="bg-white shadow rounded-xl border overflow-hidden sticky top-40">

              <div className="bg-[#0D1B3E] text-white px-4 py-3 font-semibold">
                Navigation
              </div>

              <div className="divide-y">

                <Link
                  to="/aboutjnnce"
                  className="block px-4 py-3 bg-gray-100 font-medium text-[#0D1B3E]"
                >
                  About JNNCE
                </Link>

                <Link
                  to="/vision"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Vision & Mission
                </Link>

                <Link
                  to="/aboutnes"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  About NES
                </Link>

                <Link
                  to="/ranking"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Accreditation
                </Link>

                <Link
                  to="/contact"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-[#0D1B3E] text-white py-16 mt-10">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold leading-tight">
            Your Future of Excellence Begins Here
          </h2>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            Our commitment to quality and excellence ensures innovative
            teaching methods and a real-time learning environment
            for every student.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-white text-[#0D1B3E] px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Contact Now
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Automation;