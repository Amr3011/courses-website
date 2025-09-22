import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const RightMentor = () => {
  // follower animation
  useGSAP(() => {
    // تمركز الفولوور في المركز بدلاً من الزاوية
    gsap.set(".follower", {
      xPercent: -570, // زيادة القيمة لتمركز أفضل
      yPercent: -50,
    });

    const xTo = gsap.quickTo(".follower", "x", {
        duration: 0.1,
        ease: "power2.out",
      }),
      yTo = gsap.quickTo(".follower", "y", {
        duration: 0.1,
        ease: "power2.out",
      });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
    const follower = document.querySelector(".follower");
    const cont = document.querySelector(".cont");
    gsap.set(follower, { clipPath: `inset(0 0 100% 0)` });
    cont?.addEventListener("mouseenter", () => {
      gsap.to(follower, {
        clipPath: `inset(0 0 0% 0)`,
        duration: 0.7,
        ease: "power2.inOut",
      });
    });
    cont?.addEventListener("mouseleave", () => {
      gsap.to(follower, {
        clipPath: `inset(0 0 100% 0)`,
        duration: 0.7,
        ease: "power2.inOut",
      });
    });
  });
  // frames animation
  useGSAP(() => {
    const frames = gsap.utils.toArray(".frame");
    gsap.set(frames, { clipPath: `inset(0 0 0% 0)` });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Frames-Sec",
        start: "top top",
        end: `+=${frames.length * 450}px`,
        scrub: 1.5,
        pin: true,
      },
    });
    frames.forEach((frame, i) => {
      if (i !== frames.length - 1) {
        tl.to(frame as HTMLElement, {
          clipPath: `inset(0 0 100% 0)`,
          duration: 0.7,
          ease: "power2.inOut",
        });
      }
    });
  }, []);
  return (
    <div className="right-mentor-wrapper flex-1 ">
      <div className="pointer-events-none follower fixed top-0 left-0 z-50 text-primary-color bg-white px-4 py-1 rounded-full font-body text-xs ">
        View
      </div>

      <div className="cont aspect-square relative">
        <a
          href="/1"
          title="img"
          className="frame absolute inset-0 frame z-[2] cursor-pointer"
        >
          <img
            src="https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745ae04d8457e5921ceb51_pexels-joshua-lim-2864621-22601752_enhanced%20(1)-p-1600.webp"
            alt=""
            className="rounded-3xl"
          />
        </a>
        <a
          href="/2"
          title="img"
          className="frame absolute inset-0 frame z-[1]"
        >
          <img
            src="https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745af6ce0804310f4e5d48_pexels-zen-chung-5745170_enhanced%20(1)-p-1600.webp"
            alt=""
            className="rounded-3xl "
          />
        </a>
        <a
          href="/3"
          title="img"
          className="frame absolute inset-0 frame z-[0]"
        >
          <img
            src="https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745b0617dc81496815e0c2_pexels-anna-nekrashevich-7550887%20(4)_enhanced%20(1)-p-1600.webp"
            alt=""
            className="rounded-3xl "
          />
        </a>
      </div>
    </div>
  );
};

export default RightMentor;
