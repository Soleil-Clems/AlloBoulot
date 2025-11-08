import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  companyUpdateSchema,
  type CompanyUpdateInput,
} from "@/schemas/companyCreateSchema";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { updateCompanyRequest } from "@/request/companyRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";


type Props = {
  id: number;
  title: string;
  onSubmit: (
    fd: FormData,
    values: {
      id: number;
      name: string;
      address: string | null;
      text: string | null;
    }
  ) => void;
  initialValues?: Partial<{
    companyId: number;
    name: string;
    address: string | null;
    text: string | null;
  }>;
  submitLabel?: string;
  cancelTo?: string;
  isLoading?: boolean;
};

export default function CompanyForm({
  id,
  title,
  initialValues,
  submitLabel = "Enregistrer",
  cancelTo = "/",
  isLoading,
}: Props) {
  const form = useForm<CompanyUpdateInput>({
    resolver: zodResolver(companyUpdateSchema),
    defaultValues: {
      name: initialValues?.name ?? "",
      address: initialValues?.address ?? "",
      text: initialValues?.text ?? "",

    },
  });

  const queryClient = useQueryClient()
  const modifyCompanyMutation = useMutation({
    mutationFn: updateCompanyRequest,
    onSuccess() {
      toast("Compagnie modifiée", {
        position: "top-center",
        type: "success",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      queryClient.invalidateQueries({ queryKey: ["companies"] })
      queryClient.invalidateQueries({ queryKey: ["company"] })

    },
    onError(error) {
      console.log(error);

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
  });



  const handleSubmit = (v: CompanyUpdateInput) => {

    const body = {
      "name": v.name,
      "address": v.address,
      "text": v.text,
      "id": id,
    }

    modifyCompanyMutation.mutate(body);
  };


  return (
    <>
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
          onSubmit={form.handleSubmit(handleSubmit)}
          className="grid gap-8 bg-white m-auto max-w-2xl rounded-2xl border p-5"
        >
          <h3 className="text-2xl font-bold">{title}</h3>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: AlloBoulot" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse (optionnel)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Adresse"
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (optionnel)</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Décrivez votre compagnie"
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Logo (optionnel)</FormLabel>
                <FormControl>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <input
                        id="logo-input"
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={(e) =>
                          field.onChange(
                            e.target.files && e.target.files.length
                              ? e.target.files
                              : null
                          )
                        }
                      />
                      <Button asChild type="button">
                        <label htmlFor="logo-input">Choisir une image</label>
                      </Button>
                      <span className="text-xs text-muted-foreground">
                        {field.value?.length
                          ? field.value[0]?.name
                          : "Aucun fichier"}
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => field.onChange(null)}
                    >
                      Effacer
                    </Button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />  */}

          <div className="flex flex-col md:flex-row-reverse  justify-evenly gap-5">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-60"
            >
              {isLoading ? "Enregistrement…" : submitLabel}
            </Button>
            <Button asChild variant="secondary" className="w-full md:w-60">
              <Link to={cancelTo}>Annuler</Link>
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
