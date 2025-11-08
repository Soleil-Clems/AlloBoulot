import * as React from "react";
import { useForm } from "react-hook-form";
import type { UserRow, ID, UserRole } from "@app/db";
import { Button } from "../ui/button";

type Row = Pick<UserRow, "id" | "first_name" | "last_name" | "birth_date" | "email" | "role">;
type FormValues = { rows: Row[] };

type Props = {
  items: UserRow[];
  onDelete: (id: ID) => void;
  onSaveRole: (id: ID, role: UserRole) => Promise<void>;
};

export default function UsersRoleTable({ items, onDelete, onSaveRole }: Props) {
  const defaultValues: FormValues = {
    rows: items.map(u => ({
      id: u.id,
      first_name: u.first_name ?? "",
      last_name: u.last_name ?? "",
      birth_date: u.birth_date ?? "",
      email: u.email ?? "",
      role: (u.role as UserRole) ?? "user",
    })),
  };

  const { register, reset, getValues } = useForm<FormValues>({ defaultValues });
  const [editingId, setEditingId] = React.useState<ID | null>(null);

  React.useEffect(() => {
    reset({
      rows: items.map(u => ({
        id: u.id,
        first_name: u.first_name ?? "",
        last_name: u.last_name ?? "",
        mail: u.email ?? "",
        role: (u.role as UserRole) ?? "user",
      })),
    });
  }, [items, reset]);

  const handleEdit = (id: ID) => setEditingId(id);

  const handleValidate = async (rowIndex: number) => {
    const row = getValues(`rows.${rowIndex}`);
    await onSaveRole(row.id, row.role as UserRole);
    setEditingId(null);
  };

  if (items.length === 0) {
    return <div className="rounded border bg-white p-4 text-sm text-gray-500">Pas d'utilisateurs</div>;
  }

  return (
    <div className="overflow-x-auto rounded-xl p-3 border bg-white">
      <table className="min-w-[900px] w-full">
        <thead>
          <tr className="text-left bg-gray-50">
            <th className="p-2">Prénom</th>
            <th className="p-2">Nom</th>
            <th className="p-2">Date de naissance</th>
            <th className="p-2">Email</th>
            <th className="p-2 w-40">Rôle</th>
            <th className="p-2 w-40">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((u, i) => {
            const isEditing = editingId === u.id;
            return (
              <tr key={u.id} className="border-t">
                <td className="p-2">
                  <input className="w-full rounded border px-2 py-1 text-sm" value={u.first_name ?? ""} disabled />
                </td>
                <td className="p-2">
                  <input className="w-full rounded border px-2 py-1 text-sm" value={u.last_name ?? ""} disabled />
                </td>
                <td className="p-2">
                  <input className="w-full rounded border px-2 py-1 text-sm" value={u.birth_date ?? ""} disabled />
                </td>
                <td className="p-2">
                  <input className="w-full rounded border px-2 py-1 text-sm" value={u.email ?? ""} disabled />
                </td>
                <td className="p-2">
                  <select
                    className="w-full rounded border px-2 py-1 text-sm"
                    {...register(`rows.${i}.role`)}
                    disabled={!isEditing}
                  >
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td className="p-2">
                  <div className="flex gap-2">
                    {!isEditing ? (
                      <Button
                        onClick={() => handleEdit(u.id)}
                        variant="outline" 
                        className="text-sm hover:bg-primary/70 hover:text-white"
                      >
                        Modifier
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleValidate(i)}
                        variant="outline" 
                        className="text-sm hover:bg-primary/70 hover:text-white"
                      >
                        Valider
                      </Button>
                    )}
                    <Button
                      onClick={() => onDelete(u.id)}
                      variant="outline" 
                      className="text-sm hover:bg-red-300 hover:text-white"
                    >
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
