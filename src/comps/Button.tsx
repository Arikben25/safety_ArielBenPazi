import Button from "@mui/material/Button";

interface Props {
  str: string;
  type: "button" | "submit" | "reset";
}

export default function ButtonUsage(props: Props) {
  return (
    <Button
      type={props.type}
      variant="contained"
      sx={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-text-main)",
        boxShadow: "none",

        "&:hover": {
          backgroundColor: "var(--color-primary-hover)",
          boxShadow: "none",
        },
      }}
    >
      {props.str}{" "}
    </Button>
  );
}
