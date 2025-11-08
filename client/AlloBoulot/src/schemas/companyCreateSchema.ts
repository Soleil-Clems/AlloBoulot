import { z } from "zod";

const MAX_IMG_SIZE = 5 * 1024 * 1024; // 5MB
const IMAGE_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"];

const fileListType = z.custom<FileList>((v) => v instanceof FileList, "Fichier requis");

// Optional image: allow null; if present, must be valid image ≤ 5MB
export const imageFileOptional = z
  .union([fileListType, z.null()])
  .transform((v) => (v instanceof FileList && v.length ? v : null))
  .superRefine((files, ctx) => {
    const f = files?.item(0);
    if (!f) return; 
    if (!IMAGE_TYPES.includes(f.type)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Seules les images (PNG, JPG, WEBP, GIF) sont acceptées",
      });
    }
    if (f.size > MAX_IMG_SIZE) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Fichier trop volumineux (max 5 Mo)",
      });
    }
  });

export const companyCreateSchema = z.object({
  name: z.string().trim().min(1, "Nom trop court").max(50, "Nom trop long"),
  // keep optional strings (no transform to null) to avoid resolver type mismatches
  address: z.string().trim().max(255, "Adresse trop longue").optional(),
  text: z.string().trim().max(5000, "Texte trop long").optional(),
  logo: imageFileOptional, // FileList | null
});

export const companyUpdateSchema = z.object({
  name: z.string().trim().min(1, "Nom trop court").max(50, "Nom trop long"),
  // keep optional strings (no transform to null) to avoid resolver type mismatches
  address: z.string().trim().max(255, "Adresse trop longue").optional(),
  text: z.string().trim().max(5000, "Texte trop long").optional(),
});

export type CompanyCreateInput = z.infer<typeof companyCreateSchema>;
export type CompanyUpdateInput = z.infer<typeof companyUpdateSchema>;