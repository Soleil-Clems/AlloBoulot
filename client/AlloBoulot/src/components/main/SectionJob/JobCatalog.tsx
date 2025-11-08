import { useState } from "react";
import JobOffer from "./JobOffer";
import type { JobOfferApiResponse } from "@/types/db";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 10;

export default function OfferList({offers}:{offers: JobOfferApiResponse[]}) {
  const [currentPage, setCurrentPage] = useState(1);
  

  if (!Array.isArray(offers) || offers.length === 0) {
    return (
      <section className="grid place-items-center py-12 text-muted-foreground">
        <p>Aucune offre disponible pour le moment.</p>
      </section>
    );
  }


  const totalPages = Math.ceil(offers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentOffers = offers.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 7) {

      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
  
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      

      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
    
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <section className="grid px-5">
      <h2 className="text-3xl font-bold m-auto mt-5 md:mt-10 w-full max-w-lg md:max-w-[70%]">
        Nos offres du moment :
      </h2>
      
      <div className="mb-5 md:mb-10">
        {currentOffers.map((offer) => {
          const companyName = offer.company.name ?? "Entreprise inconnue";
          const categoryName = offer.category?.name ?? "Aucune catégory";
          const categoryIcon = offer.category?.icon ?? "briefcase-business";

          return (
            <JobOffer
              key={offer.id}
              offer={offer}
              logo={offer.company.logo}
              company={{ name: companyName }}
              categoryName={categoryName}
              categoryIcon={categoryIcon}
            />
          );
        })}
      </div>


      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pb-10">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            aria-label="Page précédente"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1">
            {getPageNumbers().map((page, index) => {
              if (page === '...') {
                return (
                  <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">
                    ...
                  </span>
                );
              }

              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => handlePageClick(page as number)}
                  className="w-10 h-10"
                >
                  {page}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Page suivante"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}


      <p className="text-center text-sm text-muted-foreground pb-4">
        Affichage de {startIndex + 1} à {Math.min(endIndex, offers.length)} sur {offers.length} offres
      </p>
    </section>
  );
}