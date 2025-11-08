import { z } from "zod";

export const companySchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  logo: z.string().nullable().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});

export const companyCreateSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  address: z.string().optional(),
  description: z.string().optional(),
  logo: z.any().optional().nullable(), 
});

export type Company = z.infer<typeof companySchema>;
export type CompanyCreateInput = z.infer<typeof companyCreateSchema>;