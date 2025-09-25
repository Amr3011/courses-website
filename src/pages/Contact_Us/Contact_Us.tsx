import BannerSec from "@/components/shared/Banner/BannerSec";
import ContactSection from "../../components/shared/ContactSection/ContactSection";
import ContactInfoCards from "@/components/shared/ContactInfoCards/ContactInfoCards";
import Questions from "../Home/Questions/Questions";

const Contact_Us = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="w-full max-w-[1400px] justify-center mx-auto px-4">
        <BannerSec title={"Contact Us"} />
      </div>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Contact Info Cards */}
      <ContactInfoCards />

      {/* FAQ Section - Original Data */}
      <Questions />
    </div>
  );
};

export default Contact_Us;
