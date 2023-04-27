import * as yup from "yup";

export const LoginValidation = yup.object().shape({
  email: yup.string().email().required("Email is required").trim(),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  //remember: yup.boolean().oneOf([true], 'Debe aceptar las condiciones')
  // jobtype: yup.string().required('requerido) // select
});

export const PersonalDetailsValidation = yup.object().shape({
  name: yup.string().required("Name is required").min(5, "Name must be at last 5 characters"),
});

export const PasswordDetailsValidation = yup.object().shape({
  oldPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  newPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  confirmPassword: yup.string().oneOf([yup.ref("newPassword")], "Your passwords do not match."),
});
