import * as React from "react";
import type { JobOfferRow } from "@app/db";
import DashboardOffersItem from "./DashboardOffersItem";

type Props = {
  companyId: number;
  offers: JobOfferRow[];
  categories: Record<number, string>;
};

const DashboardOffersList: React.FC<Props> = ({ companyId, offers }) => {

  

  return (
    <ul className="grid my-10 gap-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      {offers.map((offer) => (
        <DashboardOffersItem key={offer.id} companyId={companyId} offer={offer} categories={offer.category} />
      ))}
    </ul>
  );
};

export default DashboardOffersList;
