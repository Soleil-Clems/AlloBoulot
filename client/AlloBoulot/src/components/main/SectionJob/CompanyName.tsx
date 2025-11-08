type CompanyNameProps = {
    name: string;
}
const CompanyName = ({ name } : CompanyNameProps) => {
  return (
    <span className="text-sm md:text-base text-gray-700">
      {name ?? "Entreprise inconnue"}
    </span>
  );
};

export default CompanyName;
