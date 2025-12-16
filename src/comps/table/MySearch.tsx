import { TextField } from "@mui/material";

export default function MySearch({onSearchChange}:{onSearchChange:( e:React.ChangeEvent<HTMLInputElement>)=>void}) {
  
  return (
    <TextField
      id="outlined-search"
      label="חיפוש..."
      type="search"
      onChange={onSearchChange}
      sx={{
        marginBottom: '20px', 
        "& .MuiInputLabel-root": {
            color: "var(--color-text-secondary)",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--color-primary)",
        },
        "& .MuiOutlinedInput-root": {
            backgroundColor: "var(--color-bg-input)",
            color: "var(--color-text-main)",
            '& fieldset': {
                borderColor: 'var(--color-border)',
            },
            "&:hover fieldset": {
                borderColor: 'var(--color-primary)',
            },
            "&.Mui-focused fieldset": {
                borderColor: "var(--color-primary)",
            },
        },
      }}
    />
  );
}