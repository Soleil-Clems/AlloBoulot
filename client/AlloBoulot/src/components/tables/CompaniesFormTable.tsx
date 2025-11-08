import * as React from "react";
import { useForm } from "react-hook-form";
import type { CompanyRow, ID } from "@app/db";
import { Button } from "../ui/button";

type Row = { id: ID; name: string; address: string | null };
type FormValues = { rows: Row[] };

type Props = {
  items: CompanyRow[];
  onDelete: (id: ID) => void;
};

export default function CompaniesFormTable({ items, onDelete }: Props) {
  const defaultValues: FormValues = {
    rows: items.map((c) => ({ id: c.id, name: c.name ?? "", address: c.address ?? null })),
  };

  const { register, reset } = useForm<FormValues>({ defaultValues });

  React.useEffect(() => {
    reset({
      rows: items.map((c) => ({ id: c.id, name: c.name ?? "", address: c.address ?? null })),
    });
  }, [items, reset]);

  if (items.length === 0) {
    return (
      <div className="rounded border bg-white p-4 text-sm text-gray-500">
        Pas de companies.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl p-3 border bg-white">
      <table className="min-w-[700px] w-full">
        <thead>
          <tr className="text-left bg-gray-50">
            <th className="p-2">Nom</th>
            <th className="p-2">Adresse</th>
            <th className="p-2 w-24">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((c, i) => (
            <tr key={c.id} className="border-t">
              <td className="p-2 align-center">
                <input
                  className="w-full rounded border px-2 py-1 text-sm"
                  {...register(`rows.${i}.name`)}
                  disabled
                />
              </td>
              <td className="p-2 align-center">
                <input
                  className="w-full rounded border px-2 py-1 text-sm"
                  {...register(`rows.${i}.address`)}
                  disabled
                />
              </td>
              <td className="p-2 align-center">
                <Button onClick={() => onDelete(c.id)} variant="outline" className="text-sm hover:bg-red-300 hover:text-white">
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
