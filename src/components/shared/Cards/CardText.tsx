const CardText = ({ title, p }: { title: string; p: string }) => {
  return (
    <div className="flex flex-col gap-2 my-5 ">
      <h1 className="font-body text-2xl font-medium">{title}</h1>
      <p className="text-sm text-text">{p}</p>
    </div>
  );
};

export default CardText;
