const HeaderSec = ({
  Ftitle,
  Ltitle,
  spantitle,
  paragraph,
}: {
  Ftitle: string;
  Ltitle?: string;
  spantitle?: string;
  paragraph?: string;
}) => {
  return (
    <div>
      <div className="flex justify-between items-end">
        <h1 className="max-w-[390px] font-heading text-heading-color text-4xl font-semibold">
          {Ftitle} <span className="text-primary-color">{spantitle}</span>{" "}
          {Ltitle}
        </h1>
        <p className="max-w-[360px] text-sm text-text font-body">{paragraph}</p>
      </div>
    </div>
  );
};

export default HeaderSec;
