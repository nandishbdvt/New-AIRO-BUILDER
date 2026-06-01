import React from "react";

const contactData = {
  admissions: {
    phones: ["9632471667", "9900837182", "9448255843"],
    note: "Please add the extension mentioned for each department to 08182-268800 to connect directly.",
  },

  administrative: [
    {
      name: "Establishment",
      email: "est@jnnce.ac.in",
      extension: "803",
    },
    {
      name: "Accounts",
      email: "accounts@jnnce.ac.in",
      extension: "804",
    },
    {
      name: "Scholarship",
      email: "jnnce-scholarship@jnnce.ac.in",
      extension: "805",
    },
    {
      name: "Exam",
      email: "exam@jnnce.ac.in",
      extension: "805",
    },
    {
      name: "Hostel",
      email: "est-hostel@jnnce.ac.in / account-hostel@jnnce.ac.in",
      extension: "865",
    },
    {
      name: "Transportation",
      email: "chairman_transport@jnnce.ac.in",
      extension: "908",
    },
    {
      name: "Co-operative Society",
      extension: "848",
    },
    {
      name: "Canara Bank",
      extension: "849",
    },
  ],

  departments: [
    {
      name: "Civil Engineering",
      email: "hod_civil@jnnce.ac.in",
      extension: "850",
    },
    {
      name: "Mechanical Engineering",
      email: "hod_mechanical@jnnce.ac.in",
      extension: "870",
    },
    {
      name: "EEE",
      email: "hod_eee@jnnce.ac.in",
      extension: "930",
    },
    {
      name: "ECE",
      email: "hod_ece@jnnce.ac.in",
      extension: "820",
    },
    {
      name: "TCE",
      email: "hod_tce@jnnce.ac.in",
      extension: "840",
    },
    {
      name: "CSE",
      email: "hod_cse@jnnce.ac.in",
      extension: "890",
    },
    {
      name: "ISE",
      email: "hod_ise@jnnce.ac.in",
      extension: "910",
    },
    {
      name: "MBA",
      email: "hod_mba@jnnce.ac.in",
      extension: "970",
    },
    {
      name: "MCA",
      email: "hod_mca@jnnce.ac.in",
      extension: "980",
    },
    {
      name: "Physics",
      email: "hod_physics@jnnce.ac.in",
    },
    {
      name: "Chemistry",
      email: "hod_chemistry@jnnce.ac.in",
    },
    {
      name: "Mathematics",
      email: "hod_maths@jnnce.ac.in",
    },
    {
      name: "Library",
      email: "hod_library@jnnce.ac.in",
    },
    {
      name: "Sports",
      email: "sports@jnnce.ac.in",
    },
    {
      name: "Placement",
      email: "placement@jnnce.ac.in",
    },
  ],
};

const ContactCard = ({ item }) => {
  return (
  

    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-blue-900 mb-3">
        {item.name}
      </h3>

      {item.email && (
        <p className="text-gray-700 mb-2 break-all">
          <span className="font-semibold">Email:</span>{" "}
          <a
            href={`mailto:${item.email}`}
            className="text-blue-600 hover:underline"
          >
            {item.email}
          </a>
        </p>
      )}

      {item.extension && (
        <p className="text-gray-700">
          <span className="font-semibold">Landline:</span> 08182-268800 Ext.{" "}
          {item.extension}
        </p>
      )}
    </div>
  );
};

const Contact = () => {
  return (
  
    <div className="bg-gray-100 min-h-screen pt-[170px] lg:pt-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Contact Details
          </h1>

          <p className="text-lg text-purple-700 font-medium mb-2">
            For Admissions Contact:
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {contactData.admissions.phones.map((phone, index) => (
              <a
                key={index}
                href={`tel:${phone}`}
                className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
              >
                {phone}
              </a>
            ))}
          </div>

          <p className="text-red-600 font-medium">
            {contactData.admissions.note}
          </p>
        </div>

        {/* Administrative Office */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
            Administrative Office
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactData.administrative.map((item, index) => (
              <ContactCard key={index} item={item} />
            ))}
          </div>
        </section>

        {/* Departments */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-700 pl-4">
            Departments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactData.departments.map((item, index) => (
              <ContactCard key={index} item={item} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-3">
            Jawaharlal Nehru National College of Engineering
          </h3>

          <p className="mb-2">Navule, Shivamogga - 577204, Karnataka, India</p>

          <p className="mb-2">
            Principal:{" "}
            <a
              href="tel:08182225341"
              className="underline hover:text-gray-200"
            >
              08182 - 225341
            </a>
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:principal@jnnce.ac.in"
              className="underline hover:text-gray-200"
            >
              principal@jnnce.ac.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;