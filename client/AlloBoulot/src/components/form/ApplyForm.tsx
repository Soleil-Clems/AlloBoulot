import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  applyToJobSchema,
  type ApplyToJobInput,
} from "@/schemas/applyToJob.schema";

import {
  useMutation,
  useQueryClient
} from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
import { ApplyRequest } from "@/request/jobapplicationRequest";

type ApplyFormProps = {
  companyId: number;
  offerId: number;
  userId: number;
};

export default function ApplyForm({ companyId, offerId, userId }: ApplyFormProps) {
  const queryClient = useQueryClient()
  const form = useForm<ApplyToJobInput>({
    resolver: zodResolver(applyToJobSchema),
    defaultValues: {
      message: "",
      // resume_ref is required -> leave undefined initially; RHF + Zod will show error on submit
      motivation_ref: null, // optional
    },
    mode: "onChange",
  });

  const applyMutation = useMutation({
    mutationFn: ApplyRequest,
    onSuccess(data) {

      toast('Candidature envoyée', {
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
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['myapplication'] })
      queryClient.invalidateQueries({ queryKey: ["candidatureList"] })
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
  })

  const onSubmit = (values: ApplyToJobInput) => {
    const resume = values.resume_ref.item(0)!; // required, safe
    const motivation = values.motivation_ref?.item(0) ?? null;

    const fd = new FormData();
    fd.append("job_offer_id", offerId.toString());
    fd.append("user_id", userId.toString());
    fd.append("message", values.message);
    fd.append("resume_ref", resume);

    if (motivation instanceof File) {
      fd.append("motivation_ref", motivation);
    }
    


    applyMutation.mutate(fd)
    // fetch("/api/apply", { method: "POST", body: fd })
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
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full gap-5 bg-white rounded-2xl border-1 p-5"
        >
          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea rows={6} placeholder="Votre message…" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* CV (PDF) required */}
          <FormField
            control={form.control}
            name="resume_ref"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CV (PDF)</FormLabel>
                <FormControl>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <input
                        id="resume-input"
                        type="file"
                        accept="application/pdf"
                        className="sr-only"
                        onChange={(e) => field.onChange(e.target.files)}
                      />
                      <Button asChild type="button">
                        <label htmlFor="resume-input">Choisir un fichier</label>
                      </Button>
                      <span
                        className="max-w-35 overflow-hidden text-xs text-muted-foreground"
                        aria-live="polite"
                      >
                        {field.value?.length ? field.value[0]?.name : "Aucun fichier"}
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => {
                        // For required field, set empty FileList to trigger validation error
                        const empty = new DataTransfer().files;
                        field.onChange(empty);
                      }}
                    >
                      Effacer
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Lettre de motivation (PDF) optional */}
          <FormField
            control={form.control}
            name="motivation_ref"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lettre de motivation (PDF)</FormLabel>
                <FormControl>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <input
                        id="motivation-input"
                        type="file"
                        accept="application/pdf"
                        className="sr-only"
                        onChange={(e) => {
                          const files = e.target.files;
                          // Optional: store null when nothing selected
                          field.onChange(files && files.length ? files : null);
                        }}
                      />
                      <Button asChild type="button">
                        <label htmlFor="motivation-input">Choisir un fichier</label>
                      </Button>
                      <span
                        className="max-w-35 overflow-hidden text-xs text-muted-foreground"
                        aria-live="polite"
                      >
                        {field.value?.length ? field.value[0]?.name : "Aucun fichier"}
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => {
                        // Optional field -> set to null
                        field.onChange(null);
                      }}
                    >
                      Effacer
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-primary col-primary hover:bg-primary/80 my-5"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Envoi…" : "Postuler"}
            </Button>

            <Button asChild className="w-full bg-gray-300 hover:bg-gry-400/80">
              <Link to={`/company/${companyId}/offer/${offerId}`}>Annuler</Link>
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}