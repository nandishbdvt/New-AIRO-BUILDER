import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Briefcase,
  HeartHandshake,
  Wallet,
} from "lucide-react";

const benefits = [
  {
    title: "Gratuity",
    icon: <Wallet size={20} />,
    content: (
      <>
        <p className="text-gray-700 leading-7">
          It is a defined benefit plan and is one of the many retirement
          benefits offered by the employer to the employee upon leaving the
          job. An individual who has worked in an organization for a minimum
          period of 5 years is eligible for this benefit.
        </p>

        <p className="mt-3 text-gray-700 leading-7">
          JNNCE is extending gratuity of{" "}
          <strong>Rs. 20,00,000/-</strong> (maximum amount) to all its
          employees as per Government of India notification.
        </p>
      </>
    ),
  },

  {
    title: "Employee Provident Fund & Employee Pension Scheme",
    icon: <Briefcase size={20} />,
    content: (
      <>
        <p className="text-gray-700 leading-7">
          Employee Provident Fund (EPF) and Employee Pension Scheme (EPS) are
          provided to eligible employees as per Central Government norms.
        </p>

        <p className="mt-3 text-gray-700 leading-7">
          Under EPF, 12% of employee salary is contributed towards provident
          fund, while the employer also contributes according to government
          rules.
        </p>

        <p className="mt-3 text-gray-700 leading-7">
          JNNCE extends EPF & EPS benefits to all eligible employees.
        </p>
      </>
    ),
  },

  {
    title: "Employee State Insurance Corporation",
    icon: <Shield size={20} />,
    content: (
      <>
        <p className="text-gray-700 leading-7">
          Employees’ State Insurance (ESI) is a comprehensive social security
          scheme that provides medical and financial support during sickness,
          maternity, injury, or disability.
        </p>

        <p className="mt-3 text-gray-700 leading-7">
          JNNCE provides ESI facility for employees earning less than{" "}
          <strong>Rs. 21,000/- per month.</strong>
        </p>
      </>
    ),
  },

  {
    title: "Group Personal Accident Policy",
    icon: <HeartHandshake size={20} />,
    content: (
      <>
        <p className="text-gray-700 leading-7">
          All JNNCE employees are covered under Group Personal Accident
          Insurance with a sum assured of{" "}
          <strong>Rs. 6,00,000/-</strong>.
        </p>

        <p className="mt-3 text-gray-700 leading-7">
          The policy also covers hospitalization expenses up to{" "}
          <strong>Rs. 1,00,000/-</strong> and OPD treatment up to{" "}
          <strong>Rs. 20,000/-</strong>.
        </p>

        <a
          href="https://jnnce.ac.in/jnndemo/accidentalinsurance.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-700 font-medium hover:underline"
        >
          View More Details →
        </a>
      </>
    ),
  },

  {
    title: "Maternity Benefit",
    icon: <HeartHandshake size={20} />,
    content: (
      <>
        <p className="text-gray-700 leading-7">
          Lady employees can avail{" "}
          <strong>180 days of maternity leave</strong> with full salary.
        </p>

        <p className="mt-3 text-gray-700 leading-7">
          JNNCE extends maternity leave benefits to eligible employees as per
          Government notification.
        </p>
      </>
    ),
  },

  {
    title: "Paternity Benefit",
    icon: <HeartHandshake size={20} />,
    content: (
      <>
        <p className="text-gray-700 leading-7">
          Male employees can avail{" "}
          <strong>14 days of paternity leave</strong> with full salary.
        </p>

        <p className="mt-3 text-gray-700 leading-7">
          JNNCE extends paternity leave benefits to eligible employees as per
          Government notification.
        </p>
      </>
    ),
  },

  {
    title: "Advance Salary Benefits",
    icon: <Wallet size={20} />,
    content: (
      <>
        <p className="text-gray-700 leading-7">
          JNNCE provides advance salary benefits for medical emergencies,
          marriage, children education, and other approved reasons.
        </p>

        <p className="mt-3 text-gray-700 leading-7">
          Maximum advance amount is{" "}
          <strong>3 months salary or Rs. 50,000/-</strong>, whichever is lower.
        </p>

        <p className="mt-3 text-gray-700 leading-7">
          The amount will be recovered in 20 monthly installments.
        </p>
      </>
    ),
  },
];

const EmpBenefits = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <div className="bg-gray-50 text-gray-800 pt-[170px] lg:pt-[80px]">	  
      {/* Banner */}
      <section className="bg-[#0D1B3E] text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Employee Benefits</h1>
          <p className="mt-3 text-gray-200">
            JNNCE provides various welfare schemes and benefits for employees.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow border p-6">
              <h2 className="text-2xl font-bold text-[#0D1B3E] mb-6">
                Employee Welfare Schemes
              </h2>

              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between px-5 py-4 bg-gray-100 hover:bg-gray-200 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-[#0D1B3E]">{item.icon}</div>
                        <span className="font-semibold text-left text-[#0D1B3E]">
                          {item.title}
                        </span>
                      </div>

                      {openIndex === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>

                    {openIndex === index && (
                      <div className="p-5 bg-white">{item.content}</div>
                    )}
                  </div>
                ))}
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
                  className="block px-4 py-3 hover:bg-gray-50"
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
    </div>
  );
};

export default EmpBenefits;