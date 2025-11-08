import type { ControllerRenderProps, FieldValues, UseFormSetValue, Path } from "react-hook-form";
import { COUNTRIES } from "@/data/countries";
import { Input } from "@/components/ui/input";

interface PhoneInputProps<T extends FieldValues> {
  country: string;
  setValue: UseFormSetValue<T>;
  field: ControllerRenderProps<T, Path<T>>;
  disabled?: boolean;
}

export function PhoneInput<T extends FieldValues>({
  country,
  setValue,
  field,
  disabled,
}: PhoneInputProps<T>) {
  const selectedCountry = COUNTRIES.find((c) => c.code === country);

  return (
    <div>
      <label className="font-medium text-gray-700">Téléphone</label>
      <div className="flex gap-2 items-center">
        <select
          className="px-2 py-2 border rounded bg-white text-sm"
          value={country}
          onChange={(e) =>
            setValue("country" as Path<T>, e.target.value as any)
          }
          disabled={disabled}
        >
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label} ({c.code})
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2 w-full">
          {selectedCountry && (
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.label}
              className="w-6 h-4 rounded-sm border"
            />
          )}
          <span className="text-gray-600 text-sm">{selectedCountry?.dial}</span>
          <Input {...field} type="tel" disabled={disabled} />
        </div>
      </div>
    </div>
  );
}