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
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>

      {/* FAQ Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-gray-100 rounded-lg p-6 transition-all duration-200 hover:shadow-md"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full flex justify-between items-center text-left group"
              aria-expanded={openItems.includes(faq.id)}
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-primary-1 transition-colors">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                <svg
                  className={`w-6 h-6 text-primary-1 transition-transform duration-200 ${
                    openItems.includes(faq.id) ? "rotate-45" : ""
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

            {/* Answer Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(faq.id)
                  ? "max-h-96 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-700 leading-relaxed">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
