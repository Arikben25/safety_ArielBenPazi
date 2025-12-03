import React from "react";

interface SelectProps {
  label: string;
  name: string;
  required: boolean;
  value: string;
  options?: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function SelectField({
  label,
  name,
  value,
  required,
  options = [],
  onChange,
}: SelectProps) {

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      >
        <option value="">בחר/י</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

