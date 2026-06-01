import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageTitle = "About National Education Society (R), Shivamogga";

const navigationLinks = [
  { label: "About JNNCE", to: "/aboutjnnce" },
  { label: "Vision & Mission", to: "/vision" },
  { label: "About NES", to: "/aboutnes" },
  { label: "Executive Committee", to: "/executivecommittee" },
  { label: "Contact Us", to: "/contact" },
];

const executiveMembers = [
  `${import.meta.env.BASE_URL}img/NES/Emem/1.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/2.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/3.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/4.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/5.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/6.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/7.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/8.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/9.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/10.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/11.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/12.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/13.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/14.png`,
  `${import.meta.env.BASE_URL}img/NES/Emem/15.png`,
];

const lifeMembers = [
  `${import.meta.env.BASE_URL}img/NES/Lmem/1.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/2.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/3.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/4.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/5.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/6.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/7.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/8.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/9.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/10.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/11.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/12.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/13.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/14.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/15.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/16.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/17.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/18.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/19.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/20.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/21.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/22.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/23.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/24.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/25.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/26.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/27.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/28.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/29.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/30.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/31.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/32.png`,
  `${import.meta.env.BASE_URL}img/NES/Lmem/33.png`,
];

const Aboutnes = () => {
  return (
    <div className="bg-gray-50 text-gray-800 pt-[170px] lg:pt-[80px]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#0D1B3E] to-[#163c82] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {pageTitle}
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Jawaharlal Nehru National College of Engineering, Shivamogga
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">

            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-lg border p-6 md:p-10">

              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-6">
                ABOUT NATIONAL EDUCATION SOCIETY (R), SHIVAMOGGA
              </h2>

              <img
                src={`${import.meta.env.BASE_URL}img/nes.jpg`}
                alt="NES"
                className="w-full rounded-2xl shadow mb-8"
              />

              <div className="space-y-6 text-justify leading-8 text-gray-700">

                <p>
                  During the Indian Freedom Struggle, Mahatma Gandhi,
                  the Father of the Nation, highlighted the importance
                  of quality rural education and the advancement of
                  women&apos;s education. He called upon leaders and
                  youth to support these causes.
                </p>

                <p>
                  Responding to this call, the people of Shivamogga,
                  including several prominent freedom fighters,
                  established the National Education Society (NES)
                  in 1946. The Society was founded with the vision
                  and commitment of leaders such as
                  Mr. S.V. Krishna Murthy Rao,
                  Mr. H.S. Rudrappa,
                  Mr. P. Murudappa,
                  Mr. R.K. Jayatheerthachar,
                  Mr. S. Narasimha Murthy,
                  and Mr. S.R. Nagappa Shrestty.
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                  <p>
                    Many illustrious leaders and statesmen visited
                    the National Education Society and appreciated
                    its dedicated service. Among them were
                    Dr. Rajendra Prasad,
                    Dr. S. Radhakrishnan,
                    Lal Bahadur Shastri,
                    Sri Jayachamaraj Wodeyar,
                    and Sri Vinoba Bhave.
                  </p>

                  <img
                    src={`${import.meta.env.BASE_URL}img/nesjnn.png`}
                    alt="NES History"
                    className="rounded-2xl shadow-lg"
                  />

                </div>

                <p>
                  Despite facing numerous challenges during and after
                  India&apos;s freedom struggle, the National Education
                  Society remained steadfast in its mission to promote
                  education.
                </p>

                <p>
                  The National Education Society observed its Golden
                  Jubilee during 1998 and dedicated a statue to
                  Mr. S.R. Nagappa Shrestty, a man who devoted his
                  life to the development of the society.
                </p>

                <p>
                  Today, the society runs 36 educational institutions,
                  serving more than 18,000 students with over 1,000
                  staff members. It contributes significantly in
                  Engineering, Law, Commerce, Pharmacy,
                  Applied Sciences, and Home Science education.
                </p>

                <p>
                  The Executive Committee continuously works toward
                  academic excellence, infrastructure development,
                  and holistic student growth while preserving the
                  vision of the founders.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">

                  <a
                    href="http://nes-shimoga.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition"
                  >
                    Visit NES Website
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}img/NES/executive.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0D1B3E] hover:bg-[#163c82] text-white font-semibold px-6 py-3 rounded-xl transition"
                  >
                    Executive Committee Members
                  </a>

                </div>
              </div>
            </div>

            {/* Executive Members */}
            <div className="bg-white rounded-3xl shadow-lg border p-6 md:p-10">

              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8">
                Executive Committee Members
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {executiveMembers.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
                  >

                    <img
                      src={img}
                      alt={`Executive Member ${index + 1}`}
                      className="w-full h-[220px] object-contain p-4"
                    />

                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-lg text-[#0D1B3E]">
                        Executive Member {index + 1}
                      </h3>
                    </div>

                  </motion.div>
                ))}

              </div>
            </div>

            {/* Life Members */}
            <div className="bg-white rounded-3xl shadow-lg border p-6 md:p-10">

              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8">
                Life Members
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {lifeMembers.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
                  >

                    <img
                      src={img}
                      alt={`Life Member ${index + 1}`}
                      className="w-full h-[220px] object-contain p-4"
                    />

                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-lg text-[#0D1B3E]">
                        Life Member {index + 1}
                      </h3>
                    </div>

                  </motion.div>
                ))}

              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="space-y-4">

            <div className="bg-white shadow-xl rounded-2xl border overflow-hidden sticky top-32">

              <div className="bg-[#0D1B3E] text-white px-4 py-4 font-semibold text-lg">
                Navigation
              </div>

              <div className="divide-y">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-5 py-4 hover:bg-gray-50 hover:text-[#0D1B3E] transition font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

            </div>

          </aside>

        </div>
      </section>
    </div>
  );
};

export default Aboutnes;