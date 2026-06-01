import { Helmet } from '@dr.pogodin/react-helmet';

export default function VisionPage() {
  return (
    <>
     <div className="bg-gray-50 text-gray-800 pt-[170px] lg:pt-[80px]">	  
	   {/* Banner */}
      <section className="bg-[#0D1B3E] text-white py-4">
        <div className="max-w-1xl mx-auto px-4 text-center">

          <h5 className="text-4xl md:text-5xl font-bold">
            Vision, Mission and Quality Policy
          </h5>

        </div>
      </section>

     

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-10">

          {/* Main Content */}
          <div className="lg:col-span-3">

            <div className="space-y-10">

              <div>
                <h2 className="text-3xl font-bold text-[#0D1B3E] mb-4">
                  Vision
                </h2>

                <div className="bg-gray-100 border-l-4 border-[#C9A84C] p-6 rounded">
                  <p className="text-lg text-gray-700 leading-8">
                    To be a pacesetting institute in Technical &
                    Management Education and Research for producing
                    highly competent Engineers, Managers &
                    Entrepreneurs to meet the needs of Industry
                    and Society.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0D1B3E] mb-4">
                  Mission
                </h2>

                <ul className="space-y-4 text-gray-700 leading-8 list-disc pl-6">
                  <li>
                    Impart Quality Education through flexible and
                    innovative Teaching Learning Process.
                  </li>

                  <li>
                    Enable and Ignite young minds to excel in
                    their career and life with Entrepreneurial
                    spirit, Professional ethics and Human values.
                  </li>

                  <li>
                    Facilitate Invention based Research and
                    collaborate with Industries to address
                    societal needs.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0D1B3E] mb-4">
                  Quality Policy
                </h2>

                <ul className="space-y-4 text-gray-700 leading-8 list-disc pl-6">
                  <li>
                    Providing state-of-the-art Technology support
                    and best possible Educational Infrastructure.
                  </li>

                  <li>
                    Development of faculty through supporting
                    policies and procedures towards achieving
                    Higher Qualifications.
                  </li>

                  <li>
                    Encourage R&D, Consultancy and improve
                    Teaching Learning process by introducing
                    Innovative Pedagogical methods.
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Sidebar */}
          <aside className="space-y-4">

            <div className="bg-white shadow rounded-xl border overflow-hidden">
              <div className="bg-[#0D1B3E] text-white px-4 py-3 font-semibold">
                Navigation
              </div>

              <div className="divide-y">

                <a
                  href="/aboutjnnce"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  About JNNCE
                </a>

                <a
                  href="/vision"
                  className="block px-4 py-3 bg-gray-100 font-medium text-[#0D1B3E]"
                >
                  Vision & Mission
                </a>

                <a
                  href="/aboutnes"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  About NES
                </a>

                <a
                  href="/ranking"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Accreditation
                </a>

                <a
                  href="/contact"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Contact Us
                </a>

              </div>
            </div>

          </aside>

        </div>
      </section>
	  </div>
    </>
  );
}