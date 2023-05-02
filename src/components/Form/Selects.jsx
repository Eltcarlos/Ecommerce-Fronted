import { useField } from "formik";
import { InlineError } from "../Notifications/Error";
import { Box, Select } from "@mui/material";

export const Selects = ({ label, ...props }) => {
  const date = [{ value: "CC", label: "Cedula" }];
  const [field, meta] = useField(props);
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Select margin="normal" options={date} fullWidth autoFocus label={label} {...field} {...props} />
        {meta.touched && meta.error && <InlineError text={meta.error} />}
      </Box>
    </>
  );
};
