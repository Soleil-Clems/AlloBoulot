import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export type CompanyEmployeeRow = {
  id: number;
  user_id: number;
  first_name: string;
  last_name: string;
  role: string; // "creator" | "rh" | "employee"
};

type Props = {
  data: CompanyEmployeeRow[];
  onSaveRole: (employeeId: number, newRole: string) => void | Promise<void>;
  onRemove: (employeeId: number) => void | Promise<void>;
};

const ROLES = [
  { value: "creator", label: "Créateur" },
  { value: "rh", label: "RH" },
  { value: "employee", label: "Employé" },
];

const col = createColumnHelper<CompanyEmployeeRow>();

export default function CompanyUsersTable({ data, onSaveRole, onRemove }: Props) {
  const [editingId, setEditingId] = React.useState<number | null>(null);
  const [draftRole, setDraftRole] = React.useState<string>("");

  const startEdit = (row: CompanyEmployeeRow) => {
    setEditingId(row.id);
    setDraftRole(row.role);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraftRole("");
  };

  const validate = async (row: CompanyEmployeeRow) => {
    if (!draftRole || draftRole === row.role) {
      cancelEdit();
      return;
    }
    await onSaveRole(row.id, draftRole);
    cancelEdit();
  };

  const columns: ColumnDef<CompanyEmployeeRow, string>[] = [
    col.accessor("first_name", { header: "Prénom", cell: (i) => i.getValue() }),
    col.accessor("last_name", { header: "Nom", cell: (i) => i.getValue() }),
    col.display({
      id: "role",
      header: "Role",
      cell: (info) => {
        const row = info.row.original;
        const isEditing = editingId === row.id;
        const value = isEditing ? draftRole : row.role;

        return (
          <Select
            value={value || undefined}
            onValueChange={(v) => isEditing && setDraftRole(v)}
            disabled={!isEditing}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Choisir un rôle" />
            </SelectTrigger>
            <SelectContent>
              {ROLES.map((r) => (
                <SelectItem key={r.value} value={r.value}>
                  {r.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      },
    }),
    col.display({
      id: "actions",
      header: "Actions",
      cell: (info) => {
        const row = info.row.original;
        const isEditing = editingId === row.id;

        if (!isEditing) {
          return (
            <Button variant="outline" className="whitespace-nowrap" onClick={() => startEdit(row)}>
              Modifier
            </Button>
          );
        }

        const canValidate = draftRole.trim().length > 0 && draftRole !== row.role;

        return (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="whitespace-nowrap"
              onClick={cancelEdit}
            >
              Annuler
            </Button>
            <Button
              variant="outline"
              className="border-primary hover:bg-primary/80 hover:text-white whitespace-nowrap"
              disabled={!canValidate}
              onClick={() => validate(row)}
            >
              Valider
            </Button>
            <Button
              variant="outline"
              className="border-red-400 hover:bg-red-400/80 hover:text-white whitespace-nowrap"
              onClick={() => onRemove(row.id)}
            >
              Licencier
            </Button>
          </div>
        );
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => String(row.id),
  });

  return (
    <table className="w-full rounded-2xl bg-white">
      <thead className="bg-gray-100">
        {table.getHeaderGroups().map((hg) => (
          <tr key={hg.id}>
            {hg.headers.map((h) => (
              <th key={h.id} className="w-1/4 px-4 py-2 text-left border-t whitespace-nowrap">
                {flexRender(h.column.columnDef.header, h.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="w-1/4 px-4 py-2 text-left border-t whitespace-nowrap">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
