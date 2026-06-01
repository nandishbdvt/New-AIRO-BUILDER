import React from "react";
import { Link } from "react-router-dom";

type ContentBlock =
  | { type: "heading"; level: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: Array<{ text: string; href?: string }> }
  | { type: "table"; rows: string[][] }
  | { type: "image"; src: string; alt?: string }
  | { type: "link"; text: string; href: string };

const pageTitle = "Consultancy";

const contentBlocks: ContentBlock[] = [
  {
    "type": "heading",
    "level": "h4",
    "text": "Consultancy"
  },
  {
    "type": "paragraph",
    "text": "Scope, Range and Objectives:"
  },
  {
    "type": "list",
    "ordered": false,
    "items": [
      {
        "text": "To develop linkages with industries and initiate placement.",
        "href": ""
      },
      {
        "text": "Continuous training for skill enhancement programs.",
        "href": ""
      },
      {
        "text": "To provide information about higher studies and career opportunities.",
        "href": ""
      },
      {
        "text": "To organize industrial visits and to arrange guest lectures by corporate heads.",
        "href": ""
      },
      {
        "text": "To bridge the gap between the academic output and socio-economic expectations.",
        "href": ""
      },
      {
        "text": "To organize specific entrepreneurship development programs to equip the students for self-employment.",
        "href": ""
      },
      {
        "text": "To arrange alumni interaction programs.",
        "href": ""
      },
      {
        "text": "To blend the technical skills of students with entrepreneurial skill and hence to convert innovative ideas of students into enterprise.",
        "href": ""
      },
      {
        "text": "To form a strong platform wherein students, faculty, industry personnel and the alumni coordinate each other to start campus ventures.",
        "href": ""
      }
    ]
  },
  {
    "type": "paragraph",
    "text": "Broad Areas and Major Consultancy Services (Revenue in Lakhs generated in last four years)"
  }
];

const navigationLinks = [
  { label: "About JNNCE", to: "/aboutjnnce" },
  { label: "Vision & Mission", to: "/vision" },
  { label: "About NES", to: "/aboutnes" },
  { label: "Accreditation", to: "/ranking" },
  { label: "Contact Us", to: "/contact" },
];

const Consultaancy = () => {
  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "heading":
        return (
          <h2 key={index} className="mt-6 text-2xl font-bold text-[#0D1B3E] first:mt-0">
            {block.text}
          </h2>
        );
      case "paragraph":
        return (
          <p key={index} className="text-gray-700 leading-7 text-justify">
            {block.text}
          </p>
        );
      case "list": {
        const ListTag = block.ordered ? "ol" : "ul";
        return (
          <ListTag
            key={index}
            className={`ml-5 space-y-2 text-gray-700 leading-7 ${
              block.ordered ? "list-decimal" : "list-disc"
            }`}
          >
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-blue-700 font-medium hover:underline"
                  >
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </li>
            ))}
          </ListTag>
        );
      }
      case "table":
        return (
          <div key={index} className="overflow-x-auto rounded-xl border">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <tbody className="divide-y divide-gray-200">
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="odd:bg-white even:bg-gray-50">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-3 text-gray-700 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "image":
        return (
          <img
            key={index}
            src={block.src}
            alt={block.alt || pageTitle}
            className="max-h-[420px] w-full rounded-xl border object-contain bg-white"
          />
        );
      case "link":
        return (
          <a
            key={index}
            href={block.href}
            target={block.href.startsWith("http") ? "_blank" : undefined}
            rel={block.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-block text-blue-700 font-medium hover:underline"
          >
            {block.text}
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 pt-[170px] lg:pt-[80px]">
      {/* Banner */}
      <section className="bg-[#0D1B3E] text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">{pageTitle}</h1>
          <p className="mt-3 text-gray-200">
            Jawaharlal Nehru National College of Engineering, Shivamogga
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow border p-6">
              <div className="space-y-4">
                {contentBlocks.length > 0 ? (
                  contentBlocks.map(renderBlock)
                ) : (
                  <p className="text-gray-700 leading-7">Content coming soon.</p>
                )}
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
                {navigationLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-3 hover:bg-gray-50"
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

export default Consultaancy;
