
import { forwardRef } from "react";
import { TextField } from "@mui/material";

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  size:"small" | "medium"
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, type, placeholder, size, ...rest }, ref) => {
    return (
      <TextField
        fullWidth
        type={type}
        id={id}
        label={label}
        placeholder={placeholder}
        {...rest}
        ref={ref}
        size={size}
      />
    );
  }
);

{
  /* <input
          type={type}
          id={id}
          ref={ref}
          {...rest}
          placeholder={placeholder}
        /> */
}
{
  /* {error ? <p>{error}</p> : null} */
}
// </DivInput>
