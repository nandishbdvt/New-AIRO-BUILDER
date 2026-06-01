import React, { useState } from "react";
import {
  Droplets,
  Leaf,
  CloudRain,
  Sun,
  Recycle,
  Fuel,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const initiatives = [
  {
    title: "Sewage Treatment Plant (STP)",
    icon: <Droplets className="w-6 h-6 text-green-700" />,
    images: ["img/STP-1.jpg", "img/STP-2.jpg"],
    content: (
      <>
        <p className="text-gray-700 leading-8 text-justify">
          Sewage water treatment is the process of removing contaminants from
          wastewater, primarily from household sewage. It includes physical,
          chemical, and biological processes to remove contaminants and produce
          environmentally safer treated wastewater.
        </p>

        <p className="text-gray-700 leading-8 text-justify mt-4">
          JNNCE has installed a Sewage Treatment Plant (STP) to treat sewage
          produced in the campus. The treated water is utilized to maintain the
          cricket stadium grass and lawns. The solid sludge obtained is used as
          manure for gardening. The capacity of the STP is 200KLD.
        </p>
      </>
    ),
  },

  {
    title: "Phyto-Remediation System",
    icon: <Leaf className="w-6 h-6 text-green-700" />,
    images: ["img/phtyoGPS.jpg"],
    content: (
      <>
        <p className="text-gray-700 leading-8 text-justify">
          The institute has a pilot plant of 5KLD phyto-remediation system to
          treat sewage. The system is developed based on research carried out at
          Chirantana Green Technology Center, JNNCE.
        </p>

        <p className="text-gray-700 leading-8 text-justify mt-4">
          The system uses selected plant species to absorb salts and degrade
          organic matter present in sewage. Treated water is used for gardening
          purposes.
        </p>

        <ul className="list-disc pl-6 mt-5 space-y-2 text-gray-700">
          <li>Very low construction and maintenance cost.</li>
          <li>Removes color and odour effectively.</li>
          <li>Uses locally available plants and materials.</li>
          <li>Negligible electrical energy requirement.</li>
          <li>Conserves water resources sustainably.</li>
        </ul>
      </>
    ),
  },

  {
    title: "Rain Water Harvesting",
    icon: <CloudRain className="w-6 h-6 text-green-700" />,
    images: ["img/RWH-1.jpg", "img/RWH-2.jpg"],
    content: (
      <>
        <p className="text-gray-700 leading-8 text-justify">
          Rain water harvesting involves collecting and storing rain water for
          irrigation and groundwater recharge purposes.
        </p>

        <p className="text-gray-700 leading-8 text-justify mt-4">
          Rain water from all buildings in the campus is collected in a massive
          reservoir with a capacity of 10 million liters. The annual collection
          is around 6 million liters.
        </p>

        <p className="text-gray-700 leading-8 text-justify mt-4">
          The collected water is treated using indigenously developed systems
          and supplied for non-drinking purposes within the campus.
        </p>
      </>
    ),
  },

  {
    title: "Solar Power Plant",
    icon: <Sun className="w-6 h-6 text-green-700" />,
    images: [
      "img/SPP-1.jpg",
      "img/SPP-2.jpg",
      "img/SPP-3.jpg",
      "img/SPP-4.jpg",
      "img/SPP-5.jpg",
      "img/SPP-6.jpg",
    ],
    content: (
      <>
        <p className="text-gray-700 leading-8 text-justify">
          JNNCE is committed to its green policy. The annual electricity
          consumption of the campus is around 1 million units with approximately
          1000 tons of CO₂ emission annually.
        </p>

        <p className="text-gray-700 leading-8 text-justify mt-4">
          A 400 kW Solar Roof Top system was installed to meet nearly 80% of
          the total energy requirement of the campus and prevent around 800 tons
          of carbon dioxide emissions every year.
        </p>
      </>
    ),
  },

  {
    title: "Solid Waste Management (SWM)",
    icon: <Recycle className="w-6 h-6 text-green-700" />,
    images: ["img/SWM-1.jpg", "img/SWM-2.jpg", "img/SWM-3.jpg"],
    content: (
      <>
        <p className="text-gray-700 leading-8 text-justify">
          A Solid Waste Management System of one ton per day capacity was
          established at JNNCE in 2017.
        </p>

        <p className="text-gray-700 leading-8 text-justify mt-4">
          The system includes shredders and chopper machines. Biodegradable
          waste generated in the campus and hostels is processed into manure
          using compost culture.
        </p>

        <p className="text-gray-700 leading-8 text-justify mt-4">
          The manure obtained is used for campus gardens, while excess manure is
          sold to farmers at a marginal price.
        </p>
      </>
    ),
  },

  {
    title: "Biofuel Plant",
    icon: <Fuel className="w-6 h-6 text-green-700" />,
    images: [
      "img/BFP-1.jpg",
      "img/BFP-2.jpg",
      "img/BFP-3.jpg",
      "img/BFP-4.jpg",
    ],
    content: (
      <>
        <p className="text-gray-700 leading-8 text-justify">
          The institute has a biodiesel production unit funded by Karnataka
          State Bio Energy Development Board.
        </p>

        <p className="text-gray-700 leading-8 text-justify mt-4">
          The center produces biodiesel using pongamia seeds and used cooking
          oil. The biodiesel is blended with diesel and used in college buses.
        </p>

        <p className="text-gray-700 leading-8 text-justify mt-4">
          Byproducts such as pongamia cake and glycerin soaps are also sold in
          the local market.
        </p>
      </>
    ),
  },
];

const AccordionItem = ({
  title,
  icon,
  images,
  content,
}: {
  title: string;
  icon: React.ReactNode;
  images: string[];
  content: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-green-100 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 bg-gradient-to-r from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200 transition"
      >
        <div className="flex items-center gap-4">
          {icon}
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-left">
            {title}
          </h3>
        </div>

        {open ? (
          <ChevronUp className="text-green-700" />
        ) : (
          <ChevronDown className="text-green-700" />
        )}
      </button>

      {open && (
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {content}
        </div>
      )}
    </div>
  );
};

const GreenPolicy = () => {
  return (
   <div className="bg-green-50 text-green-800 pt-[170px] lg:pt-[80px]">	  
      {/* Hero Section */}
      <div className="relative bg-[url('/img/green-bg.jpg')] bg-cover bg-center">
        <div className="bg-green-900/75 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              JNNCE Green Initiatives
            </h1>

            <p className="text-lg md:text-xl text-green-100 max-w-4xl mx-auto leading-9">
              JNNCE, located at the foothills of the Western Ghats, is committed
              to environmental protection, sustainable development, pollution
              prevention, and efficient use of natural resources through various
              green initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="space-y-8">
          {initiatives.map((item, index) => (
            <AccordionItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GreenPolicy;