import BannerSec from "@/components/shared/Banner/BannerSec.tsx";
import { FAQComponent, faqData } from "@/components/FAQ";
import type { FAQItem } from "@/components/FAQ";

 const additionalFAQs: FAQItem[] = [
  {
    id: 7,
    question: "What types of courses does Vintar offer?",
    answer:
      "We offer courses in five main categories: Technology, Business, Design, Language, and Personal Development.",
  },
  {
    id: 8,
    question: "Can I download course materials?",
    answer: "Yes, all courses can be accessed and completed at your own pace.",
  },
  {
    id: 9,
    question: "How long do courses typically take to complete?",
    answer:
      "Courses range from 3 to 12 hours, depending on the topic and depth.",
  },
  {
    id: 10,
    question: "Do I need any experience to start a course?",
    answer: "Each course lists prerequisites, but many are beginner-friendly.",
  },
  {
    id: 11,
    question: "Are Vintar courses updated regularly?",
    answer:
      "Yes, our content is reviewed and updated to stay relevant with industry trends.",
  },
  {
    id: 12,
    question: "Can I get a certificate after completing a course?",
    answer:
      "Yes, every course includes a certificate you can download and share.",
  },
];

const Faq = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="w-full max-w-[1400px] justify-center mx-auto px-4">
        <BannerSec
          title={"Frequently Asked "}
          colorTitle={"Question"}
          paragraph={
            "Find quick answers to common questions about our platform, courses, and how to get started at Vintar."
          }
        />
      </div>

      {/* FAQ Section - Original Data */}
      <div className="w-full max-w-[1400px] mx-auto px-4 pt-20">
        <FAQComponent faqs={faqData} />
      </div>

      {/* Divider Line */}
      <div className="w-full flex justify-center py-6 pt-20">
        <div className="w-full max-w-[1400px] px-4">
          <hr className="border-t border-gray-300" />
        </div>
      </div>

      {/* FAQ Section - Additional Data */}
      <div className="w-full max-w-[1400px] mx-auto px-4 pt-20">
        <FAQComponent
          title="Questions About Our Courses"
          faqs={additionalFAQs}
        />
      </div>
    </div>
  );
};

export default Faq;
