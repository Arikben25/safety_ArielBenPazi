import { TextField } from "@mui/material";

export default function MySearch({onSearchChange}:{onSearchChange:( e:React.ChangeEvent<HTMLInputElement>)=>void}) {
  
  return (
    <TextField
      id="outlined-search"
      label="חיפוש..."
      type="search"
      onChange={onSearchChange}
      sx={{
        "& .MuiInputLabel-root.Mui-focused": {
          color: "grey.800",
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "grey.800",
          },
        },
      }}
    />
  );
}