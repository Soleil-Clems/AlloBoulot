// JobSearch.tsx (no Zod)
import * as React from "react";
import { useForm } from "react-hook-form";
import { Search, Loader2 } from "lucide-react";

// shadcn/ui bits (adjust import paths to your setup)
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export type SearchInput = {
  title: string;
  categoryId?: string; // optional == "no filter"
};

type Category = { id: string; name: string };

type JobSearchProps = {
  categories: Category[];
  onSearch: (values: SearchInput) => void;
  defaultValues?: Partial<SearchInput>;
  isLoading?: boolean;
  className?: string;
};

const JobSearch: React.FC<JobSearchProps> = ({
  categories,
  onSearch,
  defaultValues,
  isLoading,
  className,}) => {
  const form = useForm<SearchInput>({
    defaultValues: {
      title: "",
      categoryId: undefined,
      ...defaultValues,
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = form.handleSubmit((values) => {
    // mimic old schema behavior: trim + toLowerCase on title
  console.log(values);
  
  });

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className= "m-5 w-full md:w-xl lg:w-[60%] grid gap-3 lg:gap-0 items-center grid-cols-1 lg:grid-cols-3 bg-white rounded-3xl overflow-hidden px-3 py-10 lg:p-0"
          
      >
        {/* Title / Company */}
        <FormField
          control={form.control}
          name="title"
          rules={{}}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="
                    lg:h-20
                    rounded-none
                    border-0 border-b lg:border-0 lg:border-r border-border
                    shadow-none
                    focus:outline-none
                    focus:ring-0
                    focus-visible:ring-0
                    focus-visible:ring-offset-0
                    focus:border-border
                    px-10
                  "
                  placeholder="Nom du poste ou compagnie"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category */}
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem className="w-full lg:flex lg:items-center lg:h-20">
              <Select
                // Make it controlled. Use "" to show placeholder (not as an item value).
                value={field.value ?? ""}
                onValueChange={(val) => {
                  // Map sentinel to undefined so onSearch receives "no filter"
                  if (val === "__ALL__") field.onChange(undefined);
                  else field.onChange(val);
                }}
              >
                <FormControl>
                  <SelectTrigger
                    className="
                      w-full
                      rounded-none
                      border-0 border-b lg:border-0 lg:border-r border-border
                      shadow-none
                      focus:outline-none
                      focus:ring-0
                      focus-visible:ring-0
                      focus-visible:ring-offset-0
                      focus:border-border
                      px-10
                    "
                  >
                    <SelectValue className="lg:h-20" placeholder="Categorie" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="__ALL__">Toutes les catégories</SelectItem>
                  {categories.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <div className="flex mt-2 lg:m-0">
          <Button
            type="submit"
            className="w-full lg:rounded-none lg:h-20"
            disabled={isLoading || form.formState.isSubmitting}
          >
            {isLoading || form.formState.isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Recherche…
              </>
            ) : (
              <>
                <Search className="h-4 w-4" aria-hidden="true" />
                Rechercher
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default JobSearch;
