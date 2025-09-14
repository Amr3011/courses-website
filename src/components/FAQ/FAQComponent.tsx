import React, { useState } from "react";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQComponentProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

const FAQComponent: React.FC<FAQComponentProps> = ({
  title = "Get to Know Vintar Better",
  subtitle,
  faqs,
}) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === id ? null : id));
  };

  return (
    <div className="w-full px-0 py-6">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">{title}</h2>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* FAQ Grid - Two Columns */}
      <div
        className="grid md:grid-cols-2 gap-8"
        style={{ gridAutoRows: "max-content" }}
      >
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`w-full rounded-xl p-8 transition-all duration-200 hover:shadow-lg ${
              openItem === faq.id
                ? "bg-white border-2 border-primary-1 shadow-lg"
                : "bg-gray-100"
            }`}
          >
            {/* Question Header */}
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full flex justify-between items-center text-left group"
              aria-expanded={openItem === faq.id}
            >
              <h3 className="text-xl font-semibold text-gray-900 pr-6 group-hover:text-primary-1 transition-colors leading-relaxed">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                <svg
                  className={`w-8 h-8 text-primary-1 transition-transform duration-200 ${
                    openItem === faq.id ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </button>

            {/* Answer Content - Normal Flow */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                openItem === faq.id
                  ? "mt-4 opacity-100"
                  : "h-0 overflow-hidden opacity-0"
              }`}
            >
              {openItem === faq.id && (
                <div className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
