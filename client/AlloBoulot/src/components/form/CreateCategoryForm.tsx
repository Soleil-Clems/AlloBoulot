import { useForm } from "react-hook-form";
import type { CreateCategoryInput } from "@/request/categoryRequest";
import type { CategoryRow } from "@app/db";
import { Button } from "../ui/button";

export type CreateCategoryFormProps = {
  onCreate: (input: CreateCategoryInput) => Promise<CategoryRow>;
};

export default function CreateCategoryForm({ onCreate }: CreateCategoryFormProps) {
  const { register, handleSubmit, reset } = useForm<CreateCategoryInput>({
    defaultValues: { name: "", icon: "" },
  });

  const onSubmit = async (values: CreateCategoryInput) => {
    await onCreate(values);
    reset({ name: "", icon: "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap items-end gap-3">
      <div className="flex flex-col w-full md:w-fit">
        <label className="text-sm font-bold ml-2 text-gray-600">Nom</label>
        <input className="h-9 rounded-xl border px-3 text-sm bg-white" {...register("name", { required: true })} />
      </div>
      <div className="flex flex-col w-full md:w-fit">
        <label className="text-sm font-bold ml-2 text-gray-600">Icone</label>
        <input className="h-9 rounded-xl border px-3 text-sm bg-white" {...register("icon", { required: true })} />
      </div>
      <Button type="submit" variant="outline"  className="w-full md:w-fit mt-5 md:mt-0 text-sm hover:bg-primary/70 hover:text-white">
        Créer
      </Button>
    </form>
  );
}
