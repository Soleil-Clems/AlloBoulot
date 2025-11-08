import DashboardNavItem from './DashboardNavItem'

type DashboardNavBarProps = {
    id: number,
}

const DashboardNavBar = ({ id } : DashboardNavBarProps) => {
  return (
    <ul className='flex w-full mx-auto justify-evenly md:justify-normal md:flex-col gap-5 md:gap-10 md:col-span-2 lg:col-span-1'>
      <DashboardNavItem src={`/company/${id}`} name="Ma compagnie" icon='university'/>
      <DashboardNavItem src={`/company/${id}/employees`} name="Employés" icon='id-card-lanyard'/>
      <DashboardNavItem src={`/company/${id}/offers`} name="Nos offres" icon='files'/>
      <DashboardNavItem src={`/company/${id}/createOffer`} name="Création d'offre" icon='file-plus-2'/>
      <DashboardNavItem src={`/company/${id}/candidats`} name="Candidatures" icon='users'/>
    </ul>
  )
}

export default DashboardNavBar
