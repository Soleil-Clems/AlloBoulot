import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { offerSchema, type OfferFormValues, type OfferData } from "@/schemas/offer.schema";
import type { ID } from "@app/db";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { GetAllCategoriesRequest } from "@/request/categoryRequest";
import { useQuery } from "@tanstack/react-query";

type OfferFormProps = {
  title?: string;
  categoriesById: Record<ID, string>;
  companyId: number;
  initialValues?: Partial<OfferFormValues>;
  onSubmit: (data: OfferData) => void;
  submitLabel?: string;
  isLoading?: boolean;
};

export default function OfferForm({
  title = "Offre",
  companyId,
  initialValues,
  onSubmit,
  submitLabel = "Enregistrer",
  isLoading,
}: OfferFormProps) {
  const form = useForm<OfferFormValues>({
    resolver: zodResolver(offerSchema),
    defaultValues: {
      title: initialValues?.title ?? "",
      description: initialValues?.description ?? "",
      contract_type: initialValues?.contract_type ?? "",
      study_level: initialValues?.study_level ?? "",
      category_id: initialValues?.category_id ?? 0, // 0 => non sélectionné (rejeté par .positive())
      end_at: initialValues?.end_at ?? "",          // "YYYY-MM-DD"
    },
    mode: "onChange",
  });

  const { control, handleSubmit } = form;

  const categoryQuery = useQuery({
    queryKey: ["categorieslist"],
    queryFn: () => GetAllCategoriesRequest(),
  });



  if (categoryQuery.isPending) {
    return;
  }




  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit((v) => onSubmit(v as OfferData))}
        className="grid gap-8 bg-white m-auto max-w-3xl rounded-2xl border p-5"
      >
        <h3 className="text-2xl font-bold">{title}</h3>

        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl><Input placeholder="Ex: Développeur Frontend React/TS" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl><Textarea rows={6} placeholder="Décrivez l'offre" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="contract_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type de contrat</FormLabel>
                <FormControl><Input placeholder="CDI, CDD, Stage, Alternance" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="study_level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Niveau d’étude</FormLabel>
                <FormControl><Input placeholder="Ex: BAC+2, BAC+3" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="category_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Catégorie</FormLabel>
                <FormControl>
                  <Select
                    value={field.value > 0 ? String(field.value) : ""}
                    onValueChange={(v) => field.onChange(Number(v))}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choisir une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryQuery.data.map((category) => (
                        <SelectItem key={category.id.toString()} value={category.id.toString()}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="end_at"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fin de candidature</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-evenly gap-5">
          <Button type="submit" disabled={isLoading} className="w-full md:w-60">
            {isLoading ? "Enregistrement…" : submitLabel}
          </Button>

          <Button asChild variant="outline" className="w-full md:w-60">
            <Link to={`/company/${companyId}/offers`}>Annuler</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
