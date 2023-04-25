import { useField } from "formik";
import { InlineError } from "../Notifications/Error";
import { TextField } from "@mui/material";

export const Inputs = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField margin="normal" fullWidth autoFocus label={label} {...field} {...props} />
      {meta.touched && meta.error && <InlineError text={meta.error} />}
    </>
  );
};
