type OfferTitleProps = {
  title: string;
};

const OfferTitle = ({ title } : OfferTitleProps) => {
  return (
    <span className="text-xl md:text-2xl font-semibold">
      {title ?? "Title inconnue"}
    </span>
  );
};

export default OfferTitle;
