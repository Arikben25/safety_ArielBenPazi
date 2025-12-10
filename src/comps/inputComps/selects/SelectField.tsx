import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { color } from "@mui/system";

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
        <InputLabel id={label}>{label+"*"}</InputLabel>
        <Select
          labelId={label}
          label={label}
          id={name}
          name={name}
          required={required}
          value={value}
          onChange = {onChange}
          sx={{backgroundColor:"white"}}
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


{/* <label htmlFor={name}>{label}</label>
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
      </select> */}
