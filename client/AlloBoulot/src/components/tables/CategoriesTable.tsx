import * as React from "react";
import { useForm } from "react-hook-form";
import type { CategoryRow, ID } from "@app/db";
import { Button } from "../ui/button";

type Row = Pick<CategoryRow, "id" | "name" | "icon">;
type FormValues = { rows: Row[] };

type Props = {
  items: CategoryRow[];
  onDelete: (id: ID) => void;
  onSaveRow: (id: ID, patch: Partial<Pick<CategoryRow, "name" | "icon">>) => Promise<void>;
};

export default function CategoriesTable({ items, onDelete, onSaveRow }: Props) {
  const toDefaults = (list: CategoryRow[]): FormValues => ({
    rows: list.map((c) => ({ id: c.id, name: c.name ?? "", icon: c.icon ?? "" })),
  });

  const { register, reset, getValues } = useForm<FormValues>({ defaultValues: toDefaults(items ?? []) });
  const [editingId, setEditingId] = React.useState<ID | null>(null);

  React.useEffect(() => { reset(toDefaults(Array.isArray(items) ? items : [])); }, [items, reset]);

  const handleEdit = (id: ID) => setEditingId(id);
  const handleValidate = async (i: number) => {
    const r = getValues(`rows.${i}`);
    await onSaveRow(r.id, { name: r.name, icon: r.icon });
    setEditingId(null);
  };

  if (!items?.length) {
    return <div className="rounded border bg-white p-4 text-sm text-gray-500">No categories.</div>;
  }

  return (
    <div className="overflow-x-auto rounded-xl p-3 border bg-white">
      <table className="min-w-[700px] w-full">
        <thead>
          <tr className="text-left bg-gray-50">
            <th className="p-2">Nom</th>
            <th className="p-2">Icone</th>
            <th className="p-2 w-40">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((c, i) => {
            const isEditing = editingId === c.id;
            return (
              <tr key={c.id} className="border-t">
                <td className="p-2">
                  <input
                    className="w-full rounded border px-2 py-1 text-sm"
                    {...register(`rows.${i}.name`)}
                    defaultValue={c.name ?? ""}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <input
                    className="w-full rounded border px-2 py-1 text-sm"
                    {...register(`rows.${i}.icon`)}
                    defaultValue={c.icon ?? ""}
                    disabled={!isEditing}
                  />
                </td>
                <td className="p-2">
                  <div className="flex gap-2">
                    {!isEditing ? (
                      <Button onClick={() => handleEdit(c.id)} variant="outline" className="text-sm hover:bg-primary/70 hover:text-white">
                        Modifier
                      </Button>
                    ) : (
                      <Button onClick={() => handleValidate(i)} variant="outline" className="text-sm hover:bg-primary/70 hover:text-white">
                        Valider
                      </Button>
                    )}
                    <Button onClick={() => onDelete(c.id)} variant="outline" className="text-sm hover:bg-red-300 hover:text-white">
                      Supprimer
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
