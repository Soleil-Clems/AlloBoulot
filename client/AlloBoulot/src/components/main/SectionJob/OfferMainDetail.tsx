import { DynamicIcon } from 'lucide-react/dynamic';
type OfferMainDetailsProps = {
  icon: string;
  value: string;
};

const OfferMainDetail = ({ icon, value }: OfferMainDetailsProps) => {
  const ico:string = icon? icon:"briefcase-business"

  
  return (
    <div className="flex items-center gap-3">
      <DynamicIcon name={ico.toString()} className="text-primary text-base" size={20} />
      <span className="text-sm md:text-base text-gray-500">
        {value ?? "Inconnue"}
      </span>
    </div>
  );
};

export default OfferMainDetail;
