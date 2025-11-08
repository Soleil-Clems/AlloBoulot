import React from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/schemas/login.schema";
import { Link } from "react-router";
import {
  useMutation,
} from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
import { loginRequest } from "@/request/authRequest";
import { useAuth } from "@/hooks/useAuth";

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
import { PasswordInput } from "@/components/ui/password-input";




export default function LoginForm() {
  const { setUser, setToken, setIsAdmin, setIsAuth} = useAuth()

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: { email: "simon@gmail.com", password: "testtest" },
  });


  const loginMutation = useMutation({
    mutationFn: loginRequest,
    onSuccess(data) {
      
      setUser(data.user)
      setIsAuth(data.user)
      setIsAdmin(data.user)
      setToken(data.access_token)
      toast('Connexion réussie', {
        position: "top-center",
        type:"success",
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
        type:"error",
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




  const onSubmit = async (values: LoginInput) => {
    loginMutation.mutate(values)
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
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className="grid w-md md:w-xl lg:md:w-2xl xl:w-md gap-4 bg-white rounded-2xl border-1 p-5"
        >
          <article className="text-3xl my-3 font-bold">Se connecter</article>

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

          {/* Mot de passe avec show/hide */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <PasswordInput {...field} autoComplete="current-password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting} className="bg-primary col-primary hover:bg-primary/80 mt-5">
            Se connecter
          </Button>
          <span className="border-b-1 py-2 text-center text-sm">N'a pas encore de compte ?</span>
          <Button variant="ghost" className=" hover:bg-primary hover:text-white"><Link to={"/signup"} className="text-center">Créer un compte</Link></Button>
        </form>
      </Form>
    </React.Fragment>
  );
}

