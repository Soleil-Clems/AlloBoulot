
type CompanyHeaderProps = {
  id: number;
  name: string;
  logo: string;
}

const CompanyHeader = ({  name, logo }: CompanyHeaderProps) => {



  return (
    <div className="flex items-center justify-center gap-5 mb-5">
      <div className="flex items-start md:items-center md:justify-center">
        {logo ? (
          <img
            src={logo}
            alt={`Logo de ${name}`}
            className="h-10 lg:h-15 w-10 lg:w-15 rounded-full object-cover border"
          />
        ) : (
          <></>
        )}
      </div>
      <h1 className="text-3xl font-bold">{name}</h1>
    </div>
  );
};

export default CompanyHeader;
