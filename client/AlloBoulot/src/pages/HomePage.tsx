import Header from "@/components/header/Header"
// import JobCatalog from "@/components/main/SectionJob/JobCatalog"
import SectionSearch from "@/components/main/SectionSearch/SectionSearch"
import Footer from "@/components/Footer"
// import { DynamicIcon } from 'lucide-react/dynamic';

const HomePage = () => {
  return (
    <div>
      <Header />
      <SectionSearch />
      {/* <JobCatalog /> */}
      <Footer />
      {/* <DynamicIcon name="annoyed" color="black" size={48} /> */}
    </div>
  )
}

export default HomePage
