import React from 'react';
import { Link } from 'react-router-dom';

const ugPrograms = [
  'Civil Engineering',
  'Mechanical Engineering',
  'Electrical & Electronics Engineering',
  'Electronics & Communication Engineering',
  'Computer Science & Engineering',
  'Information Science & Engineering',
  'Electronics & Telecommunication Engineering',
  'Artificial Intelligence & Machine Learning',
  'Robotics & Artificial Intelligence',
  'Computer Science & Engineering (Data Science)',
];

const AboutJnnce = () => {
  return (
  <div className="bg-gray-50 text-gray-800 pt-[170px] lg:pt-[80px]">

      {/* Banner */}
      <section className="bg-[#0D1B3E] text-white py-4">
        <div className="max-w-1xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            About J N N C E
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            Jawaharlal Nehru New College of Engineering, Shivamogga
          </p>

        </div>
      </section>

      {/* Main Section */}
      <section className="py-12">

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Content */}
          <div className="lg:col-span-3">

            <div className="bg-white rounded-2xl shadow-md p-8">

              <img
                src={`${import.meta.env.BASE_URL}img/admin 1.jpg`}
                alt="JNNCE"
                className="w-full rounded-xl mb-8"
              />

              <div className="space-y-6 text-justify leading-8 text-[17px]">

                <p>
                  Jawaharlal Nehru New College of Engineering (JNNCE)
                  has a rich legacy of providing quality education.
                  Established in 1980 by the National Education Society (NES),
                  the institution has grown into one of Karnataka’s respected
                  technical institutions.
                </p>

                <p>
                  Affiliated with Visvesvaraya Technological University (VTU),
                  Belagavi, approved by AICTE, and recognized by the Government
                  of Karnataka, JNNCE continues to deliver excellence in
                  engineering and management education.
                </p>

                <p>
                  JNNCE is a flagship institution of the National Education
                  Society (NES), founded by visionary freedom fighters and
                  philanthropists.
                </p>

                <div className="border-l-4 border-blue-600 bg-blue-50 p-5 rounded-lg italic text-blue-900 font-medium">
                  “To provide quality education at reasonable cost”
                </div>

                <p>
                  JNNCE is dedicated to providing high-quality technical
                  education and training to students from across India.
                </p>

                {/* UG Programs */}
                <div className="border-2 border-blue-600 rounded-xl p-6 bg-white">

                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Undergraduate Programs
                  </h3>

                  <ol className="list-decimal list-inside space-y-2">

                    {ugPrograms.map((program, index) => (
                      <li key={index}>
                        {program}
                      </li>
                    ))}

                  </ol>

                </div>

                <p>
                  Additionally, JNNCE offers postgraduate programs including
                  MBA and MCA.
                </p>

                <p>
                  Seven undergraduate programs and the MBA program are
                  accredited by NBA, New Delhi. The institution is also
                  accredited with an “A” Grade by NAAC.
                </p>

                <p>
                  Spread across a lush green campus of 39.4 acres, JNNCE
                  serves more than 4,500 students and 500 staff members
                  with state-of-the-art infrastructure.
                </p>

                <p>
                  The institution has highly qualified faculty members
                  including numerous Ph.D. holders and research scholars.
                </p>

                <p>
                  Research and innovation are integral to JNNCE’s mission.
                  Faculty members have published over 500 research papers
                  and carried out funded projects.
                </p>

                <p>
                  Students actively participate in technical fests,
                  seminars, conferences, sports, and cultural activities.
                </p>

                <p>
                  Top companies including BEL, TCS, Wipro, HP,
                  Texas Instruments, Tech Mahindra, and Cadence recruit
                  students through campus placements.
                </p>

                <p>
                  Over 20,000 alumni from JNNCE have contributed
                  significantly across industries, academia,
                  research organizations, and government sectors.
                </p>

              </div>

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

      {/* CTA */}
      <section className="bg-[#0D1B3E] text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold mb-6">
            Your Future of Excellence Begins Here
          </h2>

          <p className="text-lg leading-8 text-blue-100 mb-8">
            Our commitment to quality and excellence ensures
            innovative teaching and real-time learning experiences
            for every student.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-[#0D1B3E] font-semibold px-8 py-4 rounded-xl hover:bg-blue-100 transition"
          >
            Contact Now
          </Link>

        </div>

      </section>

    </div>
  );
};

export default AboutJnnce;