import BannerSec from "@/components/shared/Banner/BannerSec.tsx";
import { FAQComponent, faqData } from "@/components/FAQ";

const Faq = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="w-[1200px] justify-center mx-auto">
        <BannerSec
          title={"Frequently Asked "}
          colorTitle={"Question"}
          paragraph={
            "Find quick answers to common questions about our platform, courses, and how to get started at Vintar."
          }
        />
      </div>

      {/* FAQ Section */}
      <FAQComponent faqs={faqData} />
    </div>
  );
};

export default Faq;
