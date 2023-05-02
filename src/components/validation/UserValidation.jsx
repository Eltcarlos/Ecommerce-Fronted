import * as yup from "yup";

export const LoginValidation = yup.object().shape({
  email: yup.string().email().trim(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  //remember: yup.boolean().oneOf([true], 'Debe aceptar las condiciones')
  // jobtype: yup.string().required('requerido) // select
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const RegisterValidation = yup.object().shape({
  name: yup.string().min(6, "Name must be at least 6 characters").max(20, "Name must be less than 20 characters"),
  email: yup.string().email().trim(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Your passwords do not match."),
  phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export const PersonalDetailsValidation = yup.object().shape({
  name: yup.string().required("Name is required").min(5, "Name must be at last 5 characters"),
  phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
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

export const AddressValidation = yup.object().shape({
  name: yup.string().min(5, "Name must be at least 5 characters").max(20, "Name must be less than 20 characters"),
  country: yup
    .string()
    .min(2, "Country must be at least 2 characters")
    .max(20, "Country must be less than 20 characters"),
  state: yup.string().min(2, "State must be at least 2 characters").max(20, "State must be less than 20 characters"),
  city: yup.string().min(2, "City must be at least 2 characters").max(20, "City must be less than 20 characters"),
  postalCode: yup.number(),
  address: yup
    .string()
    .min(2, "Address must be at least 2 characters")
    .max(20, "Address must be less than 20 characters"),
  location: yup
    .string()
    .min(2, "Location must be at least 2 characters")
    .max(20, "Location must be less than 20 characters"),
  phoneNumber: yup.number(),
});
