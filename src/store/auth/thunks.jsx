import { checkingCredentials, login, removeAddresses } from "./authSlice";
import { fetchConToken, fetchSinToken } from "../../helpers/Fetch";
import toast from "react-hot-toast";

export const startSignIn = (form) => {
  return async (dispatch) => {
    try {
      dispatch(checkingCredentials());
      const result = await fetchSinToken("api/auth/login", form, "POST");
      console.log(result);

      if (!result.ok) {
        toast.error(result.msg === "Error" ? "We can't find an account with this email address" : result.msg);
        return;
      }
      localStorage.setItem("token", result.token);
      dispatch(login(result.user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startSignUp = (form) => {
  return async (dispatch) => {
    try {
      dispatch(checkingCredentials());
      const result = await fetchSinToken("api/auth/register", form, "POST");
      console.log(result);

      if (!result.ok) {
        toast.error(result.msg === "Error" ? "We can't find an account with this email address" : result.msg);
        return;
      }
      localStorage.setItem("token", result.token);
      dispatch(login(result.user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changePersonalDetails = (form) => {
  return async () => {
    try {
      const result = await fetchConToken("api/client/personalDetails", form, "PUT");

      if (!result.ok) {
        toast.error(result.msg);
        return;
      }
      toast.success(result.msg);
    } catch (error) {
      console.log(error);
    }
  };
};

export const changePassword = (form) => {
  return async () => {
    try {
      const result = await fetchConToken("api/client/password", form, "PUT");

      if (!result.ok) {
        toast.error(result.msg);
        return;
      }
      toast.success(result.msg);
    } catch (error) {
      console.log(error);
    }
  };
};

export const newAddress = (form) => {
  return async () => {
    try {
      const result = await fetchConToken("api/client/newDirection", form, "PUT");
      if (!result.ok) {
        toast.error(result.msg);
        return;
      }
      toast.success(result.msg);
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeAddress = (id) => {
  return async (dispatch) => {
    try {
      const data = { id };
      const result = await fetchConToken("api/client/directions/remove", data, "PUT");
      if (!result.ok) {
        toast.error(result.msg);
        return;
      }
      dispatch(removeAddresses(id));
      toast.success(result.msg);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
};
