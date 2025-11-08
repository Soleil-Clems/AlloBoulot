import React from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupInput } from "@/schemas/signup.schema";
import { PasswordInput } from "@/components/ui/password-input";
import { Link } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { RegisterRequest } from "@/request/authRequest";
import { ToastContainer, toast } from 'react-toastify';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupForm() {
  const form = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      password_confirmation: "",
      // birthDate: undefined
    } as Partial<SignupInput>,
  });

  const registerMutation = useMutation({
    mutationFn: RegisterRequest,
    onSuccess(data) {

      toast('Inscription réussie', {
        position: "top-center",
        type: "success",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
    },

    onError(error) {


      toast(error.message, {
        position: "top-center",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
    },
  })

  const onSubmit = async (values: SignupInput) => {
    const payload = {
      ...values,
      email: values.email,
      birth_date: values.birth_date?.toISOString().slice(0, 10),
    };
    console.log(payload, values);

    registerMutation.mutate(payload)
  };

  return (
    <React.Fragment>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      // transition={Bounce}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className="grid w-md md:w-xl lg:md:w-2xl xl:w-md gap-4 bg-white m-auto rounded-2xl border-1 p-5"
        >
          <article className="text-3xl my-3 font-bold">Création de compte</article>
          {/* Prénom */}
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input {...field} autoComplete="given-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nom */}
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input {...field} autoComplete="family-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date de naissance (z.date()) */}
          <FormField
            control={form.control}
            name="birth_date"
            render={({ field }) => {
              const valueStr =
                field.value instanceof Date &&
                  !Number.isNaN(field.value.getTime())
                  ? field.value.toISOString().slice(0, 10)
                  : "";
              return (
                <FormItem>
                  <FormLabel>Date de naissance</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      value={valueStr}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? new Date(e.target.value) : undefined
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          {/* Adresse */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse</FormLabel>
                <FormControl>
                  <Input {...field} autoComplete="street-address" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Téléphone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input {...field} type="tel" autoComplete="tel" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" autoComplete="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mot de passe */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <PasswordInput {...field} autoComplete="new-password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirmation du mot de passe */}
          <FormField
            control={form.control}
            name="password_confirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmer le mot de passe</FormLabel>
                <FormControl>
                  <PasswordInput {...field} autoComplete="new-password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="bg-primary hover:bg-primary/80 mt-5"
          >
            Créer mon compte
          </Button>
          <span className="border-b-1 py-2 text-center text-sm">Déjà un compte ?</span>
          <Button variant="ghost" className=" hover:bg-primary hover:text-white"><Link to={"/login"} className="text-center">Se connecter</Link></Button>
        </form>
      </Form>
    </React.Fragment>
  );
}
