import { useMemo, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfileSchema, type UpdateProfileInput } from "@/schemas/profile.schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { getProfileRequest, updateProfileRequest } from "@/request/profileRequest";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/FileUpload";
import { Pencil } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useLocalFiles } from "@/hooks/useLocalFiles";

export const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const queryClient = useQueryClient();
  const { user, setUser } = useAuth();
  const { cv, letter, saveFile, deleteFile } = useLocalFiles(user?.id); 

  // React Query: refetch des données du profil côté serveur
  const { data: profileData } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: getProfileRequest,
    enabled: !!user,
    staleTime: 5 * 60 * 1000,
  });

  const form = useForm<UpdateProfileInput>({
    resolver: zodResolver(updateProfileSchema),
    mode: "onChange",
    defaultValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      birth_date: user?.birth_date || "",
      address: user?.address || "",
      phone: user?.phone || "",
      email: user?.email || "",
      password: "",
      passwordConfirm: "",
    },
  });

  const { control, handleSubmit, reset } = form;

  // Initialiser le formulaire avec les données du store
  useEffect(() => {
    if (user) {
      reset({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        birth_date: user.birth_date || "",
        address: user.address || "",
        phone: user.phone || "",
        email: user.email || "",
        password: "",
        passwordConfirm: "",
      });
    }
  }, [user, reset]);

  // Overwrite si le fetch côté serveur retourne autre chose
  useEffect(() => {
    if (profileData) {
      reset({
        first_name: profileData.first_name || "",
        last_name: profileData.last_name || "",
        birth_date: profileData.birth_date || "",
        address: profileData.address || "",
        phone: profileData.phone || "",
        email: profileData.email || "",
        password: "",
        passwordConfirm: "",
      });
    }
  }, [profileData, reset]);

  const handleAutoSaveFile = async (file: File | null, type: "cv" | "letter") => {
    if (file) {
      await saveFile(file, type);
      toast(`${type === "cv" ? "CV" : "Lettre"} enregistré(e) localement`, {
        position: "bottom-right",
        type: "info",
        autoClose: 2000,
        theme: "dark",
      });
    } else {
      deleteFile(type);
      toast(`${type === "cv" ? "CV supprimé" : "Lettre supprimée"} du stockage local`, {
        position: "bottom-right",
        type: "warning",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  const updateMutation = useMutation({
    mutationFn: async (values: UpdateProfileInput) => {
      if (values.cv instanceof File) await saveFile(values.cv, "cv");
      if (values.letter instanceof File) await saveFile(values.letter, "letter");
      return updateProfileRequest(values);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["profile", user?.id], data);
      if (setUser) {
        setUser({
          ...data,
          birth_date: data.birth_date || "",
          address: data.address || "",
          phone: data.phone || "",
        } as any);
      }
      toast("Profil mis à jour avec succès", {
        position: "top-center",
        type: "success",
        autoClose: 3000,
        theme: "dark",
      });
      setIsEditing(false);
      setShowPasswordFields(false);
    },
    onError: (error: any) => {
      toast(error?.message || "Erreur lors de la mise à jour du profil", {
        position: "top-center",
        type: "error",
        autoClose: 5000,
        theme: "dark",
      });
    },
  });

  const initials = useMemo(() => {
    if (!user) return "Utilisateur";
    const f = user.first_name?.[0] ?? "";
    const l = user.last_name?.[0] ?? "";
    return (f + l).toUpperCase() || "Utilisateur";
  }, [user]);

  const onSubmit = (values: UpdateProfileInput) => updateMutation.mutate(values);

  return (
    <div className="max-w-full flex flex-col md:grid md:grid-cols-2 md:gap-8">
      {/* COLONNE GAUCHE : Avatar et fichiers */}
      <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center mb-8 md:mb-0">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-semibold text-gray-800 shadow-inner">
          {initials}
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-800">
          {user?.first_name} {user?.last_name}
        </h3>

        <div className="w-full mt-8 space-y-4">
          <Controller
            control={control}
            name="cv"
            render={({ fieldState }) => (
              <FileUpload
                label="CV"
                onFileSelect={(file) => handleAutoSaveFile(file, "cv")}
                error={fieldState.error?.message}
                existingFile={cv}
              />
            )}
          />
          <Controller
            control={control}
            name="letter"
            render={({ fieldState }) => (
              <FileUpload
                label="Lettre de motivation"
                onFileSelect={(file) => handleAutoSaveFile(file, "letter")}
                error={fieldState.error?.message}
                existingFile={letter}
              />
            )}
          />
        </div>
      </div>

      {/* COLONNE DROITE(Informations personnelles) */}
      <div className="bg-white p-6 rounded-2xl shadow-sm relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Informations personnelles</h2>
          <button
            type="button"
            onClick={() => {
              setIsEditing((p) => !p);
              setShowPasswordFields(false);
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <Pencil className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          {[
            { name: "first_name", label: "Prénom" },
            { name: "last_name", label: "Nom" },
            { name: "birth_date", label: "Date de naissance", type: "date" },
            { name: "email", label: "Email", type: "email" },
            { name: "address", label: "Adresse" },
            { name: "phone", label: "Téléphone" },
          ].map(({ name, label, type }) => (
            <Controller
              key={name}
              control={control}
              name={name as keyof UpdateProfileInput}
              render={({ field, fieldState }) => (
                <div>
                  <label className="font-medium text-gray-700">{label}</label>
                  <Input
                    {...field}
                    type={type ?? "text"}
                    value={typeof field.value === "string" ? field.value : ""}
                    disabled={!isEditing}
                    className={fieldState.error ? "border-red-500" : ""}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          ))}

          {isEditing && (
            <>
              <button
                type="button"
                onClick={() => setShowPasswordFields((p) => !p)}
                className="text-sm text-primary underline"
              >
                {showPasswordFields
                  ? "Annuler la modification du mot de passe"
                  : "Modifier le mot de passe"}
              </button>

              {showPasswordFields &&
                ["password", "passwordConfirm"].map((name, i) => (
                  <Controller
                    key={name}
                    control={control}
                    name={name as keyof UpdateProfileInput}
                    render={({ field, fieldState }) => (
                      <div>
                        <label className="font-medium text-gray-700">
                          {i === 0 ? "Nouveau mot de passe" : "Confirmer le mot de passe"}
                        </label>
                        <Input
                          {...field}
                          type="password"
                          value={typeof field.value === "string" ? field.value : ""}
                          className={fieldState.error ? "border-red-500" : ""}
                        />
                        {fieldState.error && (
                          <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                        )}
                      </div>
                    )}
                  />
                ))}

              <div className="pt-4">
                <Button type="submit" disabled={updateMutation.isPending}>
                  {updateMutation.isPending ? "Enregistrement..." : "Enregistrer"}
                </Button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};