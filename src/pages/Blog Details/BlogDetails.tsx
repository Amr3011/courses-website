import BannerSec from "@/components/shared/Banner/BannerSec";
import CardText from "@/components/shared/Cards/CardText";

const BlogDetails = () => {
  const socialMedia = [
    {
      link: "www.google.com",
      icon: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6823527eea8a09e021553a63_twitter.svg",
    },
    {
      link: "www.google.com",
      icon: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6823527e1a24265b12ffa3ed_linkedin.svg",
    },
    {
      link: "www.google.com",
      icon: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6823527e723ce1c55a9a7417_instagram.svg",
    },
  ];
  return (
    <div className="container">
      <BannerSec
        title=" How Ongoing Training Shapes Future Leadership"
        paragraph="July 14, 2025 Professional Growth"
      />
      <div className="mx-24 my-28">
        <img
          src="https://cdn.prod.website-files.com/681546135f34d96fc2aab532/6842da0f89d385e56b96e2dd_pexels-ivan-samkov-8127702%20(1)-p-1600.webp"
          alt="img"
          className="max-h-[450px] rounded-xl w-full object-cover"
        />
        <div className="my-16 mx-8">
          <div className="space-y-12">
            <CardText
              title="Keeping Up with Innovation"
              p="Industries across the globe are evolving at unprecedented rates. From new design trends and coding frameworks to business automation and AI integration, staying current requires ongoing education. Continuous learning helps professionals maintain relevance and adapt quickly to these shifts. Rather than being left behind, lifelong learners ride the wave of innovation and remain competitive, regardless of the field they're in."
            />
            <CardText
              title="Adapting to New Tools"
              p="As tools evolve, so must the people using them. Whether it's switching to a new design platform, mastering a software update, or adopting modern productivity apps, learning new tools is no longer optional. Courses that prioritize continual learning equip you with the skills to understand emerging platforms faster and apply them confidently in your day-to-day work. Adaptability is the new stability."
            />
            <CardText
              title="Lifelong Learning Culture"
              p="Embracing a mindset of lifelong learning creates a ripple effect across your personal and professional development. It fosters curiosity, humility, and openness to new ideas. Professionals who consistently seek out knowledge are more likely to lead innovation, mentor others, and pursue diverse career opportunities. Learning becomes a habit, not a task—and that shift in mindset is transformative."
            />
            <CardText
              title="Investing in Your Future"
              p="Each course, workshop, or book is a stepping stone to bigger goals. Learning is an investment that multiplies over time. It increases your value in the job market, supports career pivots, and opens doors to promotions and leadership roles. The most successful professionals are not necessarily the most experienced, but the most adaptable—and adaptability is built through continuous growth."
            />
            <CardText
              title="Conclusion"
              p="In a world where the only constant is change, continuous learning is no longer optional—it's essential. It prepares you to meet new challenges head-on, embrace evolving roles, and thrive in uncertain environments. More than just a strategy, it's a philosophy that fuels long-term success. Make learning a lifelong companion and you'll always be one step ahead."
            />
          </div>

          <hr className="h-[1px] bg-gray-200 my-12" />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              Follow Our Social Accounts
            </h3>
            <ul className="flex items-center gap-6">
              {socialMedia.map((el) => (
                <li key={el.icon}>
                  <a
                    href={el.link}
                    title="Social Media"
                    className="block p-2 rounded-full bg-gray-50 hover:bg-light-color transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={el.icon}
                      alt="social media icon"
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
