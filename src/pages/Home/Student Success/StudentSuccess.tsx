import BannerSec from "@/components/shared/Banner/BannerSec";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const StudentSuccess = () => {
  const studentSuccessData = [
    {
      id: 1,
      img: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6825f49e0c41f2a7830d2608_pexels-skgphotography-21378372.webp",
      name: "Rina Sasmita",
      namePosition: "Content Creator & Influencer",
      text: "The Digital Marketing class helped me grow my audience and understand analytics. Highly recommended for creators!",
    },
    {
      id: 2,
      img: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6825f49e0c41f2a7830d2608_pexels-skgphotography-21378372.webp",
      name: "Ahmed Ali",
      namePosition: "Web Developer",
      text: "The programming courses were amazing. I learned React and got my dream job in just 6 months!",
    },
    {
      id: 3,
      img: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6825f49e0c41f2a7830d2608_pexels-skgphotography-21378372.webp",
      name: "Sarah Johnson",
      namePosition: "UX Designer",
      text: "The design courses transformed my career. Now I work with top companies creating user-friendly interfaces.",
    },
    {
      id: 4,
      img: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6825f49e0c41f2a7830d2608_pexels-skgphotography-21378372.webp",
      name: "Mohamed Hassan",
      namePosition: "Data Analyst",
      text: "The data science program was comprehensive. I can now analyze complex datasets and make data-driven decisions.",
    },
    {
      id: 5,
      img: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6825f49e0c41f2a7830d2608_pexels-skgphotography-21378372.webp",
      name: "Lisa Chen",
      namePosition: "Project Manager",
      text: "The project management course helped me lead teams more effectively and deliver projects on time.",
    },
    {
      id: 6,
      img: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6825f49e0c41f2a7830d2608_pexels-skgphotography-21378372.webp",
      name: "Omar Ibrahim",
      namePosition: "Mobile App Developer",
      text: "From zero to hero! The mobile development course helped me create my first app that got 10k downloads.",
    },
    {
      id: 7,
      img: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6825f49e0c41f2a7830d2608_pexels-skgphotography-21378372.webp",
      name: "Emma Thompson",
      namePosition: "Graphic Designer",
      text: "The creative design courses unleashed my artistic potential. I now run my own design studio!",
    },
  ];

  useGSAP(() => {
    gsap.to(".student-success-wrapper", {
      x: "-30%",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".con",
        start: "top bottom",
        end: `400px`,
        scrub: 1.5,
      },
    });
    gsap.set(".student-success-wrapper2", { x: "-40%" });
    gsap.to(".student-success-wrapper2", {
      x: "10%",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".con",
        start: "top bottom",
        end: `400px`,
        scrub: 1.5,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="bg-background-accent">
      <BannerSec
        title="Student Success"
        colorTitle="Stories"
        paragraph="Discover how Vintar has helped them grow, upskill, and achieve their goals."
      />

      <div className="con">
        <div className="overflow-x-hidden">
          <div className="flex w-[2200px] justify-start items-center  gap-4 py-10 student-success-wrapper">
            {studentSuccessData.map((student) => (
              <CardStudentSuccess
                key={student.id}
                img={student.img}
                name={student.name}
                namePosition={student.namePosition}
                text={student.text}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="con2">
        <div className="overflow-x-hidden">
          <div className="flex w-[2200px] justify-end items-center  gap-4 py-10 student-success-wrapper2">
            {studentSuccessData.map((student) => (
              <CardStudentSuccess
                key={`second-${student.id}`}
                img={student.img}
                name={student.name}
                namePosition={student.namePosition}
                text={student.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSuccess;

const CardStudentSuccess = ({
  img,
  name,
  namePosition,
  text,
}: {
  img: string;
  name: string;
  namePosition: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-2 max-w-[300px] h-[300px] bg-white p-5 rounded-xl">
      <img src={img} alt="" className="size-20  object-cover rounded-full" />
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-sm text-text">{namePosition}</p>
      <p className="text-sm text-text">{text}</p>
    </div>
  );
};
