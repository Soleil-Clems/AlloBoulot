import type { IconType } from "react-icons";

type OfferAsideDetailsProps = {
  Icon: IconType;
  label: string;
  value: string;
};

const OfferAsideDetail = ({ Icon, label, value }: OfferAsideDetailsProps) => {
  return (
    <li className="flex items-center gap-3">
      <Icon className="text-primary text-xl" />
      <div className="flex flex-col">
        <span className="text-sm md:text-base text-black">
          {label}
        </span>
        <span className="text-sm md:text-base text-gray-500">
          {value ?? "Inconnue"}
        </span>
      </div>
    </li>
  );
};

export default OfferAsideDetail;
