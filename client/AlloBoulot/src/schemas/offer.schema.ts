import { z } from "zod";

export const offerSchema = z.object({
  title: z.string().trim().min(3, "Titre trop court"),
  description: z.string().trim().min(20, "Description trop courte"),
  contract_type: z.string().trim().min(2, "Type de contrat requis"),
  study_level: z.string().trim().min(2, "Niveau d’étude requis"),
  // required number, must be > 0 (so 0 sentinel triggers an error)
  category_id: z.number().int().positive("Catégorie requise"),
  // required date, form gives "YYYY-MM-DD" string; transform to ISO
  end_at: z.string().min(1, "Date de fin requise").transform((s) => new Date(s).toISOString()),
});

// What the form edits (before transform) – match schema INPUT exactly
export type OfferFormValues = z.input<typeof offerSchema>;
// What you send to API (after transform)
export type OfferData = z.output<typeof offerSchema>;
