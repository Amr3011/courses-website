import CourseCurriculum from "./CourseCurriculum";

const LeftSide = () => {
  return (
    <div className="col-span-2 ">
      <img
        src="https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/683710ee854936d927d6e04a_pexels-mart-production-7679662.avif"
        alt="img"
        className="object-cover w-full max-h-[330px] h-full rounded-xl mb-8 overflow-hidden"
      />
      <p className="font-normal text-slate-700 my-4">
        Great design goes beyond appearance — it creates intuitive, enjoyable
        user experiences. This course teaches design principles and UX thinking
        to create interfaces people love to use.
      </p>
      <h1 className="font-semibold text-xl mb-4 ">What You’ll Learn:</h1>
      <ul className="list-disc pl-10 space-y-1">
        <li>UI fundamentals and layout systems</li>
        <li>UX research and wireframing</li>
        <li>Prototyping tools like Figma</li>
        <li>Accessibility and user testing</li>
        <li>Design handoff for developers</li>
      </ul>
      <p className="font-normal text-slate-700 my-4">
        Through real projects, you’ll go from user problem to clickable
        prototype with confidence.
      </p>
      <div>
        <CourseCurriculum />
      </div>
    </div>
  );
};

export default LeftSide;
