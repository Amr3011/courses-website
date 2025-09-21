import { FAQComponent, faqData } from "@/components/FAQ";

const Questions = () => {
  return (
    <div className="container my-10">
      <div className="flex ">
        <div className="flex-1 pt-28">
          <div className="sticky top-[50px]  max-w-lg">
            <h1 className="text-5xl font-semibold max-w-[400px] ">
              Frequently Asked Questions
            </h1>
            <p className="py-10 text-sm">
              Find quick answers to common questions about Vintar, our courses,
              learning process, and platform features.
            </p>
          </div>
        </div>
        <div className="flex-1">
          {/* FAQ Section - Original Data */}
          <div className="w-full max-w-[1400px] mx-auto px-4 pt-20">
            <FAQComponent WithOutheading cols={1} faqs={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
