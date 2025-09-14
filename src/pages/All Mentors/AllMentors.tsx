import BannerSec from "@/components/shared/Banner/BannerSec";
import CardMentor from "@/components/shared/Cards/CardMentor";
import HeaderSec from "@/components/shared/HeaderSec/HeaderSec";

const AllMentors = () => {
  const data = [
    {
      img: "https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745af6ce0804310f4e5d48_pexels-zen-chung-5745170_enhanced%20(1)-p-1600.webp",
      namePosition: "Web Developer",
      name: "David Tan",
      socialMedia: [
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
      ],
    },
    {
      img: "https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745af6ce0804310f4e5d48_pexels-zen-chung-5745170_enhanced%20(1)-p-1600.webp",
      namePosition: "Web Developer",
      name: "David Tan",
      socialMedia: [
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
      ],
    },
    {
      img: "https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745af6ce0804310f4e5d48_pexels-zen-chung-5745170_enhanced%20(1)-p-1600.webp",
      namePosition: "Web Developer",
      name: "David Tan",
      socialMedia: [
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
      ],
    },
    {
      img: "https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745af6ce0804310f4e5d48_pexels-zen-chung-5745170_enhanced%20(1)-p-1600.webp",
      namePosition: "Web Developer",
      name: "David Tan",
      socialMedia: [
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
      ],
    },
    {
      img: "https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745af6ce0804310f4e5d48_pexels-zen-chung-5745170_enhanced%20(1)-p-1600.webp",
      namePosition: "Web Developer",
      name: "David Tan",
      socialMedia: [
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
      ],
    },
    {
      img: "https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745af6ce0804310f4e5d48_pexels-zen-chung-5745170_enhanced%20(1)-p-1600.webp",
      namePosition: "Web Developer",
      name: "David Tan",
      socialMedia: [
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
      ],
    },
  ];
  return (
    <section className="container ">
      <BannerSec
        title="Meet Our Vintar"
        colorTitle="Mentors"
        paragraph="At Vintar, our mentors are experienced professionals dedicated to helping learners reach their full potential."
      />
      <div className="my-16">
        <HeaderSec
          Ftitle="Inspiring"
          Ltitle="Proven Results
"
          paragraph="Learn from experienced professionals who bring real-world insights and practical skills to every course.

"
          spantitle="Mentors"
        />
      </div>
      <div className="grid grid-cols-4 my-10 gap-4 ">
        {data.map((el) => {
          return (
            <CardMentor
              img={el.img}
              namePosition={el.namePosition}
              name={el.name}
              socialMedia={el.socialMedia}
              center
            />
          );
        })}
      </div>
    </section>
  );
};

export default AllMentors;
