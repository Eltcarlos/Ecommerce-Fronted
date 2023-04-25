import { useField } from "formik";
import { InlineError } from "../Notifications/Error";
import { Checkbox, FormControlLabel } from "@mui/material";

export const CheckBox = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label={label} {...field} {...props} />
      {meta.touched && meta.error && <InlineError text={meta.error} />}
    </>
  );
};
