import { z } from "zod";

export const signupSchema = z.object({
    first_name: z
        .string()
        .trim()
        .min(1, "Prénom trop court (min. 1)")
        .max(50, "Prénom trop long"),
    last_name: z
        .string()
        .trim()
        .min(1, "Nom trop court (min. 1)")
        .max(50, "Nom trop long"),
    birth_date: z
        .date(),
    address: z
        .string()
        .min(1, "Adresse vide")
        .trim(),
    phone: z
        .string()
        .trim()
        .regex(/^\+?[0-9\s\-().]{7,}$/, "Téléphone invalide"),
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email("Email invalide"),
    password: z
        .string()
        .min(8, "Au moins 8 caractères")
        .regex(/[A-Z]/, "Ajoute une majuscule")
        .regex(/[a-z]/, "Ajoute une minuscule")
        .regex(/[0-9]/, "Ajoute un chiffre")
        .regex(/[^A-Za-z0-9]/, "Ajoute un caractère spécial"),
    password_confirmation: z.string(),
})
    .refine((data) => data.password === data.password_confirmation, {
        message: "Les mots de passe ne correspondent pas",
        path: ["confirmPassword"],
    });

export type SignupInput = z.infer<typeof signupSchema>;
