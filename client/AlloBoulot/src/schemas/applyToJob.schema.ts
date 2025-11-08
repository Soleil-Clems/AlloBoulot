// schemas/applyToJob.schema.ts
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const PDF_MIME = "application/pdf";

// Base FileList type guard
const fileListType = z.custom<FileList>((v) => v instanceof FileList, "Fichier requis");

// REQUIRED: exactly one PDF, <= 5MB
export const fileInputRequired = fileListType
  .refine((files) => files && files.length === 1, "Sélectionnez un seul fichier")
  .superRefine((files, ctx) => {
    const f = files?.item(0);
    if (!f) return;
    if (f.size > MAX_FILE_SIZE) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Fichier trop volumineux (max 5 Mo)" });
    }
    if (f.type !== PDF_MIME) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Seuls les PDF sont acceptés" });
    }
  });

// OPTIONAL: allow null, but if a file is provided, validate it like above
export const fileInputOptional = z
  .union([fileListType, z.null()])
  .transform((v) => (v instanceof FileList && v.length ? v : null))
  .superRefine((files, ctx) => {
    const f = files?.item(0);
    if (!f) return; // null or empty -> OK
    if (f.size > MAX_FILE_SIZE) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Fichier trop volumineux (max 5 Mo)" });
    }
    if (f.type !== PDF_MIME) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Seuls les PDF sont acceptés" });
    }
  });

export const applyToJobSchema = z.object({
  message: z.string().trim().min(1, "Le message ne peut pas être vide"),
  resume_ref: fileInputRequired,      // required
  motivation_ref: fileInputOptional, // optional -> null when absent
});

export type ApplyToJobInput = z.infer<typeof applyToJobSchema>;
