import { useStore } from "@/store/store";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const LeftMentor = () => {
  const data = useStore((state) => state.AllMentors);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card-mentor") as HTMLElement[];

    gsap.set(cards, { y: "100vh" });
    gsap.set(cards[0], { y: "0%" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Frames-Sec",
        start: "top top",
        end: `+=${cards.length * 450}px`,
        scrub: 1.5,
      },
    });

    cards.forEach((_, i) => {
      if (i < cards.length - 1) {
        tl.to(cards[i], {
          y: "-100vh",
          duration: 0.4,
          ease: "power2.inOut",
        })
          .to(
            cards[i + 1],
            {
              y: "0%",
              duration: 0.4,
              ease: "power2.inOut",
            },
            "<0.2"
          )
          .to({}, { duration: 0.3 });
      }
    });
  }, []);

  return (
    <div className="left-mentor-wrapper flex-1 ">
      <div className="aspect-square relative">
        <div className="card-mentor absolute inset-0 flex flex-col gap-4 items-center justify-center w-full h-full z-[2] ">
          <p className="text-sub-title text-xs font-semibold uppercase">
            {data[0].namePosition}
          </p>
          <h1 className="text-heading-color text-5xl font-bold">
            {data[0].name}
          </h1>
          <div>
            <ul className={`flex gap-11 ${"justify-center gap-14 py-2"}`}>
              {data[0].socialMedia.map((el, idx) => (
                <li className="h-4 w-4" key={idx}>
                  <a href={el.link} target="_blank">
                    <img src={el.icon} alt="link" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-mentor absolute inset-0 flex flex-col gap-4 items-center justify-center w-full h-full z-[1]">
          <p className="text-sub-title text-xs font-semibold uppercase">
            {data[1].namePosition}
          </p>
          <h1 className="text-heading-color text-5xl font-bold">
            {data[1].name}
          </h1>
          <div>
            <ul className={`flex gap-11 ${"justify-center gap-14 py-2"}`}>
              {data[1].socialMedia.map((el, idx) => (
                <li className="h-4 w-4" key={idx}>
                  <a href={el.link} target="_blank">
                    <img src={el.icon} alt="link" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-mentor absolute inset-0 flex flex-col gap-4 items-center justify-center w-full h-full z-[0]">
          <p className="text-sub-title text-xs font-semibold uppercase">
            {data[2].namePosition}
          </p>
          <h1 className="text-heading-color text-5xl font-bold">
            {data[2].name}
          </h1>
          <div>
            <ul className={`flex gap-11 ${"justify-center gap-14 py-2"}`}>
              {data[2].socialMedia.map((el, idx) => (
                <li className="h-4 w-4" key={idx}>
                  <a href={el.link} target="_blank">
                    <img src={el.icon} alt="link" />
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

export default LeftMentor;
