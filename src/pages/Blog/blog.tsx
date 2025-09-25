import BannerSec from "@/components/shared/Banner/BannerSec";
import InsightsSection from "@/components/shared/InsightsSection/InsightsSection";

const Blog = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="w-full max-w-[1400px] justify-center mx-auto px-4">
        <BannerSec title={"Vintar's "} colorTitle={"Blog"} />
      </div>

      {/* Insights Section */}
      <InsightsSection />
    </div>
  );
};

export default Blog;
