import { FaFirefox } from "react-icons/fa6";

const CompanyLogo = ({logo}:{logo: string | null}) => {

  
  return (
    <div className="w-fit">
      {logo ? (
        <img
        src={logo}
        alt={`Logo de `}
        className="h-10 lg:h-15 w-10 lg:w-15 rounded-full object-cover border"
        />
      ) : (
        <FaFirefox className="text-3xl md:text-5xl" />
      )}
    </div>

  );
};

export default CompanyLogo;
