import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companyCreateSchema, type CompanyCreateInput } from "@/schemas/company.schema";
import { useCreateCompany } from "@/hooks/useCreateCompany";

interface Props {
  onClose?: () => void;
  onCreated?: (data: any) => void;
}

const CompanyCreateForm: React.FC<Props> = ({ onClose, onCreated }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const mutation = useCreateCompany();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<CompanyCreateInput>({
    resolver: zodResolver(companyCreateSchema),
    defaultValues: { logo: null },
  });

  const logoFile = watch("logo");


  useEffect(() => {
    if (logoFile instanceof File) {
      const url = URL.createObjectURL(logoFile);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreview(null);
  }, [logoFile]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setValue("logo", file, { shouldValidate: true });
  };

  const onSubmit = (data: CompanyCreateInput) => {
    const formData = new FormData();
    formData.append("name", data.name);
    if (data.address) formData.append("address", data.address);
    if (data.description) formData.append("description", data.description);
    if (data.logo) formData.append("logo", data.logo);

    mutation.mutate(formData, {
      onSuccess: (res) => {
        reset();
        setPreview(null);
        onCreated?.(res);
        onClose?.();
      },
    });

    
    

    console.log(data);
    
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="max-w-lg mx-auto shadow-md border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">
            Nouvelle Société
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Nom */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Nom *</label>
              <Input type="text" {...register("name")} placeholder="Ex: Ma Société" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

      
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Adresse</label>
              <Input type="text" {...register("address")} placeholder="123 rue de Paris" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Description</label>
              <Textarea {...register("description")} rows={3} placeholder="Décrivez votre société..." />
            </div>


            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Logo</label>
              <Input type="file" accept="image/*" onChange={handleLogoChange} />
              {preview && (
                <div className="mt-2">
                  <img
                    src={preview}
                    alt="Logo preview"
                    className="h-20 w-20 object-cover rounded-md border"
                  />
                </div>
              )}
            </div>

            {/* Boutons */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
              <Button type="button" variant="outline" onClick={onClose} disabled={mutation.isPending}>
                Annuler
              </Button>
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? "Création..." : "Créer"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CompanyCreateForm;