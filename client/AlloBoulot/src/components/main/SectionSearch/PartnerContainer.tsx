import { useEffect, useState } from 'react';
import PartnerItem from './PartnerItem';
import { getCompanies } from '@/request/companyRequest';
import type { CompanyRow } from '@app/db';
import { FaFirefox } from "react-icons/fa";



const PartnerContainer = () => {
  const [companies, setCompanies] = useState<CompanyRow[]>([]);
  const [ispending, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const allCompanies = await getCompanies();
        const lastFive = allCompanies.slice(-5).reverse();
        setCompanies(lastFive);
      } catch (error) {
        console.error('Erreur lors de la récupération des entreprises:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  

  if (ispending) {
    return (
      <ul className='w-full flex justify-between gap-5 px-10 py-5'>
        <div className="text-white">Chargement...</div>
      </ul>
    );
  }

  const renderLogo = (logo: string | null | undefined) => {
    if (logo) {
      return (
        <div className='flex justify-center align-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white'>
          <img
            src={logo}
            alt="Logo entreprise"
            className="object-cover w-full rounded-full "
          /></div>

      );
    }
    return <FaFirefox />
  };

  const visibilityClasses = [
    '',
    '',
    'hidden md:block lg:block',
    'hidden lg:block',
    'hidden xl:block'
  ];

  return (
    <ul className='w-full flex justify-between gap-5 px-10 py-5'>
      {companies.map((company, index) => (
        <div key={company.id} className={visibilityClasses[index] || ''}>
          <PartnerItem
            image={renderLogo(company.logo)}
            title={company.name || 'Entreprise inconnue'}
          />
        </div>
      ))}
    </ul>
  );
};

export default PartnerContainer;
