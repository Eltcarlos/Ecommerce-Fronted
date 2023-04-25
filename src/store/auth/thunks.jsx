import { checkingCredentials, login } from "./authSlice";
import { fetchSinToken } from "../../helpers/Fetch";
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
