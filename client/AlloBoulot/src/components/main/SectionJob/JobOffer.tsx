import { Link } from "react-router"; // ← use react-router-dom in the browser
import { Button } from "../../ui/button";
import type { JobOfferRow, CompanyRow } from "@app/db";
import PostedAtMark from "./PostedAtMark";
import CompanyLogo from "./CompanyLogo";
import OfferTitle from "./OfferTitle";
import CompanyName from "./CompanyName";
import OfferMainDetail from "./OfferMainDetail";

// Define the props shape
type JobOfferProps = {
  offer: JobOfferRow;
  company: Pick<CompanyRow, "name">; // optional, only what you display
  categoryName: string;
  categoryIcon: string;
  logo : string | null
};

const JobOffer = ({ offer, company, categoryName, categoryIcon, logo=null }: JobOfferProps) => {

  
  return (
    <article className="flex flex-col justify-self-center gap-5 w-full  max-w-lg md:max-w-[70%] rounded-xl shadow-sm hover:shadow-md duration-300 hover:duration-100 m-5 p-5">
      <PostedAtMark timestamp={offer.created_at}/>

      <div className="grid grid-col-1 md:grid-cols-10 md:items-center gap-5 w-full">
        <CompanyLogo logo={logo}/>
        <div className="flex flex-col col-span-9 gap-2">
          <OfferTitle title={offer.title} />
          <CompanyName name={company.name} />
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3 md:flex-row md:gap-10">
          <OfferMainDetail icon={categoryIcon} value={categoryName} />
          <OfferMainDetail icon={"clock"} value={offer.contract_type} />
          <OfferMainDetail icon={"graduation-cap"} value={offer.study_level} />
        </div>

        <Button asChild className="flex md:justify-end">
          <Link to={`/company/${offer.company_id}/offer/${offer.id}`}>Voir plus</Link>
        </Button>
      </div>
    </article>
  );
};

export default JobOffer;
