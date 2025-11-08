import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Email invalide"),
  password: z
    .string()
    .min(8, "Mot de passe trop court (min. 8)"),
});

export type LoginInput = z.infer<typeof loginSchema>;
