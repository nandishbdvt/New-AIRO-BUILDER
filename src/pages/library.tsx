import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const tabs = [
  'Overview',
  'Resources',
  'Facilities',
  'Staff',
  'Layout',
  'Gallery',
];

const staffMembers = [
  {
    name: 'Dr. Chandrakant R Bhat',
    designation: 'Chief Librarian',
  },

  {
    name: 'Satish K T',
    designation: 'Asst. Librarian (Sr. Gr.)',
  },

  {
    name: 'Shivaswamy Jois H C',
    designation: 'Asst. Librarian (Sr. Gr.)',
  },

  {
    name: 'Jayaram M',
    designation: 'Lib. Asst (Sl.Gr)',
  },

  {
    name: 'Rajashekarappa R H',
    designation: 'Lib. Asst (Sl.Gr)',
  },

  {
    name: 'Bharathkumar B M',
    designation: 'SDA',
  },

  {
    name: 'Rudresha L',
    designation: 'Attender (Sl.Gr)',
  },

  {
    name: 'Deepak V Dinakar',
    designation: 'Lib. Helper',
  },

  {
    name: 'Smt. Bharathi',
    designation: 'CMS',
  },

  {
    name: 'Rakhi S V',
    designation: 'Lib. Helper',
  },
];

const Library = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="bg-gray-50 text-gray-800 pt-[170px] lg:pt-[80px]">

      {/* Banner */}
      <section className="bg-[#0D1B3E] text-white py-4">

        <div className="max-w-1xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            Library & Information Centre
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            Jawaharlal Nehru New College of Engineering, Shivamogga
          </p>

        </div>

      </section>

      {/* Main Section */}
      <section className="py-12">

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-3">

            <div className="bg-white rounded-2xl shadow-md p-8">

              {/* Main Image */}
              <img
                src={`${import.meta.env.BASE_URL}img/libraryeditor/resources/lib1.jpg`}
                alt="Library"
                className="w-full rounded-xl mb-8"
              />

              {/* Tabs */}
              <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-5 mb-8">

                {tabs.map((tab) => (

                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-[#0D1B3E] text-white shadow-md'
                        : 'bg-gray-100 hover:bg-blue-50'
                    }`}
                  >
                    {tab}
                  </button>

                ))}

              </div>

              {/* OVERVIEW */}
              {activeTab === 'Overview' && (

                <div className="space-y-6 text-justify leading-8 text-[17px]">

                  <p>
                    The Library and Information Centre of JNNCE plays
                    a vital role in supporting academic and research
                    activities of students, faculty, and researchers.
                  </p>

                  <p>
                    The library has a spacious infrastructure with
                    modern facilities and a peaceful learning
                    environment.
                  </p>

                  <div className="border-l-4 border-blue-600 bg-blue-50 p-5 rounded-lg italic text-blue-900 font-medium">
                    “A Library is the heart of an educational institution.”
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-blue-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">
                        Library Area
                      </h3>

                      <p className="text-3xl font-bold">
                        1675.87 Sq.mts
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-green-900 mb-3">
                        Working Hours
                      </h3>

                      <p className="text-2xl font-bold">
                        9:30 AM – 5:30 PM
                      </p>
                    </div>

                  </div>

                  <p>
                    The library is fully automated and provides access
                    to printed books, journals, magazines, newspapers,
                    e-resources, digital learning platforms, and
                    research databases.
                  </p>

                </div>

              )}

              {/* RESOURCES */}
              {activeTab === 'Resources' && (

                <div>

                  <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8">
                    Library Resources
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-blue-50 rounded-2xl p-6 border">
                      <h3 className="text-lg font-bold mb-3 text-blue-900">
                        Titles
                      </h3>

                      <p className="text-4xl font-bold">
                        15,919
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-6 border">
                      <h3 className="text-lg font-bold mb-3 text-green-900">
                        Total Books
                      </h3>

                      <p className="text-4xl font-bold">
                        125,695
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded-2xl p-6 border">
                      <h3 className="text-lg font-bold mb-3 text-orange-900">
                        Lending Section Books
                      </h3>

                      <p className="text-4xl font-bold">
                        70,810
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-2xl p-6 border">
                      <h3 className="text-lg font-bold mb-3 text-purple-900">
                        General Book Bank
                      </h3>

                      <p className="text-4xl font-bold">
                        48,857
                      </p>
                    </div>

                    <div className="bg-red-50 rounded-2xl p-6 border">
                      <h3 className="text-lg font-bold mb-3 text-red-900">
                        Reference Section Books
                      </h3>

                      <p className="text-4xl font-bold">
                        6,028
                      </p>
                    </div>

                    <div className="bg-cyan-50 rounded-2xl p-6 border">
                      <h3 className="text-lg font-bold mb-3 text-cyan-900">
                        SC / ST Books
                      </h3>

                      <p className="text-4xl font-bold">
                        3,983
                      </p>
                    </div>

                  </div>

                  <div className="mt-10 space-y-5">

                    <div className="border rounded-xl p-5">
                      <h3 className="text-2xl font-semibold mb-3">
                        Journals
                      </h3>

                      <p>
                        23 National Printed Journals are available for
                        students and faculty.
                      </p>
                    </div>

                    <div className="border rounded-xl p-5">
                      <h3 className="text-2xl font-semibold mb-3">
                        Newspapers & Magazines
                      </h3>

                      <p>
                        07 Newspapers and 13 Magazines are subscribed
                        regularly.
                      </p>
                    </div>

                    <div className="border rounded-xl p-5">
                      <h3 className="text-2xl font-semibold mb-3">
                        Digital Resources
                      </h3>

                      <ul className="list-disc list-inside space-y-2">
                        <li>VTU Consortium</li>
                        <li>DELNET Membership</li>
                        <li>National Digital Library (NDL)</li>
                        <li>E-Journals & E-Books</li>
                      </ul>
                    </div>

                  </div>

                </div>

              )}

              {/* FACILITIES */}
              {activeTab === 'Facilities' && (

                <div>

                  <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8">
                    Facilities
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-gray-50 rounded-2xl p-6 border">
                      <h3 className="text-xl font-bold mb-3">
                        Digital Library
                      </h3>

                      <p>
                        Access to digital learning resources and
                        online journals.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 border">
                      <h3 className="text-xl font-bold mb-3">
                        Reading Hall
                      </h3>

                      <p>
                        Spacious reading environment for students and
                        staff members.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 border">
                      <h3 className="text-xl font-bold mb-3">
                        Book Bank
                      </h3>

                      <p>
                        Book bank facility available for deserving
                        students.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 border">
                      <h3 className="text-xl font-bold mb-3">
                        Internet Facility
                      </h3>

                      <p>
                        High-speed internet access for academic and
                        research activities.
                      </p>
                    </div>

                  </div>

                </div>

              )}

              {/* STAFF */}
              {activeTab === 'Staff' && (

                <div>

                  <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8">
                    Library Staff
                  </h2>

                  <div className="space-y-5">

                    {staffMembers.map((staff, index) => (

                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:justify-between md:items-center border rounded-2xl p-6 bg-gray-50"
                      >

                        <div>

                          <h3 className="text-xl font-bold">
                            {staff.name}
                          </h3>

                        </div>

                        <div className="mt-3 md:mt-0">

                          <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-medium">
                            {staff.designation}
                          </span>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              )}

              {/* LAYOUT */}
              {activeTab === 'Layout' && (

                <div className="space-y-8">

                  <h2 className="text-3xl font-bold text-[#0D1B3E]">
                    Library Layout
                  </h2>

                  <div className="border rounded-2xl p-6 bg-gray-50">

                    <h3 className="text-2xl font-semibold mb-4">
                      Ground Floor
                    </h3>

                    <ul className="list-disc list-inside space-y-2">
                      <li>Circulation Section</li>
                      <li>Reference Section</li>
                      <li>Newspaper Section</li>
                      <li>Digital Library</li>
                    </ul>

                  </div>

                  <div className="border rounded-2xl p-6 bg-gray-50">

                    <h3 className="text-2xl font-semibold mb-4">
                      Third Floor
                    </h3>

                    <ul className="list-disc list-inside space-y-2">
                      <li>Reading Hall</li>
                      <li>Journal Section</li>
                      <li>Stack Area</li>
                    </ul>

                  </div>

                </div>

              )}

              {/* GALLERY */}
              {activeTab === 'Gallery' && (

                <div>

                  <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8">
                    Photo Gallery
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <img
                      src={`${import.meta.env.BASE_URL}img/libraryeditor/resources/lib1.jpg`}
                      alt="Library"
                      className="rounded-2xl h-64 w-full object-cover shadow"
                    />

                    <img
                      src={`${import.meta.env.BASE_URL}img/libraryeditor/resources/IMG_20230901_145124 - Copy.jpg`}
                      alt="Library"
                      className="rounded-2xl h-64 w-full object-cover shadow"
                    />

                    <img
                      src={`${import.meta.env.BASE_URL}img/libraryeditor/resources/IMG_20230901_145032 - Copy.jpg`}
                      alt="Library"
                      className="rounded-2xl h-64 w-full object-cover shadow"
                    />

                    <img
                      src={`${import.meta.env.BASE_URL}img/libraryeditor/resources/IMG_20230901_145000 - Copy.jpg`}
                      alt="Library"
                      className="rounded-2xl h-64 w-full object-cover shadow"
                    />

                    <img
                      src={`${import.meta.env.BASE_URL}img/libraryeditor/resources/IMG_20230901_144245 - Copy - Copy (2).jpg`}
                      alt="Library"
                      className="rounded-2xl h-64 w-full object-cover shadow"
                    />

                    <img
                      src={`${import.meta.env.BASE_URL}img/libraryeditor/resources/IMG_20230901_144119 - Copy - Copy (2).jpg`}
                      alt="Library"
                      className="rounded-2xl h-64 w-full object-cover shadow"
                    />

                  </div>

                </div>

              )}

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
                  to="/library"
                  className="block px-4 py-3 bg-gray-100 font-medium text-[#0D1B3E]"
                >
                  Library & Information Centre
                </Link>

                <Link
                  to="/facility"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Facilities
                </Link>

                <Link
                  to="/gallery"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Photo Gallery
                </Link>

                <a
                  href="https://libinfo.jnnce.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Digital Library
                </a>

              </div>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#0D1B3E] text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold mb-6">
            Explore Knowledge Without Limits
          </h2>

          <p className="text-lg leading-8 text-blue-100 mb-8">
            The Library & Information Centre supports students,
            faculty, and researchers with world-class resources
            and digital learning facilities.
          </p>

          <a
            href="https://libinfo.jnnce.ac.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-[#0D1B3E] font-semibold px-8 py-4 rounded-xl hover:bg-blue-100 transition"
          >
            Visit Digital Library
          </a>

        </div>

      </section>

    </div>
  );
};

export default Library;