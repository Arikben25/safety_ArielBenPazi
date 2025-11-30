import React from "react";

interface Field {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectField({
  label,
  name,
  value,
  options,
  onChange,
}: Field) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      <select id={name} name={name} value={value} onChange={onChange}>
        <option value="">בחר/י</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
