const CompanyLogos = () => {
  const logos = [
    {
      src: "/assets/Home/side.svg",
      alt: "Company Logo 1",
    },
    {
      src: "/assets/Home/side2.svg",
      alt: "Company Logo 2",
    },
    {
      src: "/assets/Home/side3.svg",
      alt: "Company Logo 3",
    },
    {
      src: "/assets/Home/side4.svg",
      alt: "Company Logo 4",
    },
  ];

  return (
    <section className="w-full  mx-auto px-4 py-12 bg-background-accent">
      <div className="flex justify-center items-center gap-16 md:gap-20 lg:gap-24 opacity-60">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 lg:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyLogos;
