import { z } from "zod";

// Schéma pour la récupération du profil
export const userProfileSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  birth_date: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
  role: z.enum(['user', 'admin']).optional(),
  email_verified_at: z.string().nullable().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;

// Schéma pour la mise à jour du profil
export const updateProfileSchema = z.object({
  first_name: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  last_name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  birth_date: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères").optional().or(z.literal("")),
  passwordConfirm: z.string().optional().or(z.literal("")),
  cv: z.instanceof(File).optional().nullable(),
  letter: z.instanceof(File).optional().nullable(),
}).refine((data) => {
  if (data.password && data.password !== "") {
    return data.password === data.passwordConfirm;
  }
  return true;
}, {
  message: "Les mots de passe ne correspondent pas",
  path: ["passwordConfirm"],
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;