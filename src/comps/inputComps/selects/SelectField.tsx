import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

interface SelectProps {
  label: string;
  name: string;
  required: boolean;
  value: string;
  options?: string[];
  onChange: (e: SelectChangeEvent) => void;
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
      <FormControl fullWidth>
        <InputLabel id={label}>{label + "*"}</InputLabel>
        <Select
          labelId={label}
          label={label}
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          sx={{
            backgroundColor: "var(--color-bg-input)",
            color: "var(--color-text-main)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--color-border)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--color-primary)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--color-primary)",
            },
            "& .MuiSelect-select": {
              color: "var(--color-text-main)",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}