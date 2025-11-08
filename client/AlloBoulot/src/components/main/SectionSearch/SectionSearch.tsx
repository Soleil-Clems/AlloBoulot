import BcgImage from "@/assets/header_image.jpg";
import StatisticContainer from "./StatisticContainer";
import PartnerContainer from "./PartnerContainer";
import JobCatalog from "@/components/main/SectionJob/JobCatalog";
import { useQuery } from "@tanstack/react-query";
import { SearchOffersRequest } from "@/request/offerRequest";
import { GetAllCategoriesRequest } from "@/request/categoryRequest";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Search, Loader2 } from "lucide-react";
import { useState } from "react";

export type SearchInput = {
  title: string;
  categoryId?: string;
};

const SectionSearch = () => {
  const [filters, setFilters] = useState<SearchInput>({
    title: "",
    categoryId: "",
  });

  const form = useForm<SearchInput>({
    defaultValues: {
      title: "",
      categoryId: "",
    },
    mode: "onSubmit",
  });

  const searchOfferQuery = useQuery({
    queryKey: ["offerslist", filters],
    queryFn: () => SearchOffersRequest(filters.title, filters.categoryId),
  });

  const categoryQuery = useQuery({
    queryKey: ["categorieslist"],
    queryFn: () => GetAllCategoriesRequest(),
  });

  const onSubmit = (values: SearchInput) => {
    console.log(values);
    
    setFilters({
      title: values.title || "",
      categoryId: values.categoryId || "",
    });
  };

  if (searchOfferQuery.isPending || categoryQuery.isPending) {
    return 
  }
  
  if (searchOfferQuery.error) return <span>Oops! Error loading offers</span>;
  if (categoryQuery.error) return <span>Oops! Error loading categories</span>;

  return (
    <>
      <section className="relative h-fit w-full pt-15 mb-5">
        <div
          className="absolute inset-0 bg-center bg-cover blur-md brightness-50"
          style={{ backgroundImage: `url(${BcgImage})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/70" aria-hidden />

        <article className="relative text-white flex flex-col gap-5 self-center justify-self-center m-10">
          <h2 className="text-5xl text-center font-bold">
            Trouvez l'emploi de vos rêves maintenant !
          </h2>
          <p className="text-center">
            Connecter les talents aux opportunités : votre porte d'entrée vers la
            réussite professionnelle
          </p>
        </article>

        <article className="relative flex w-full items-center justify-center px-5">
          <div className="w-full flex justify-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="m-5 w-full md:w-xl lg:w-[60%] grid gap-3 lg:gap-0 items-center grid-cols-1 lg:grid-cols-3 bg-white rounded-3xl overflow-hidden px-3 py-10 lg:p-0"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          className="lg:h-20 rounded-none border-0 border-b lg:border-0 lg:border-r border-border shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-border px-10"
                          placeholder="Nom du poste ou compagnie"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <FormItem className="w-full lg:flex lg:items-center lg:h-20">
                      <Select
                        value={field.value || "ALL"}
                        onValueChange={(val) => {
                          if (val === "ALL") {
                            field.onChange(undefined);
                          } else {
                            field.onChange(val);
                          }
                        }}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full rounded-none border-0 border-b lg:border-0 lg:border-r border-border shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-border px-10">
                            <SelectValue placeholder="Categorie" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ALL">
                            Toutes les catégories
                          </SelectItem>
                          {categoryQuery.data?.map((c) => (
                            <SelectItem key={c.id} value={c.id.toString()}>
                              {c.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex mt-2 lg:m-0">
                  <Button
                    type="submit"
                    className="w-full lg:rounded-none lg:h-20"
                    disabled={searchOfferQuery.isPending || form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2
                          className="h-4 w-4 animate-spin"
                          aria-hidden="true"
                        />
                        Recherche…
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4" aria-hidden="true" />
                        Rechercher
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </article>

        <article className="w-full relative flex items-center justify-center my-15 px-5">
          <StatisticContainer />
        </article>

        <article className="w-full relative bg-black flex items-center justify-center">
          <PartnerContainer />
        </article>
      </section>

      <JobCatalog offers={searchOfferQuery.data} />
    </>
  );
};

export default SectionSearch;