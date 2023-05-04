import { toast } from "react-hot-toast";
import { fetchConToken } from "../../helpers/Fetch";
import { clearCart } from "..";

export const sendTransaction = (form) => {
  return async (dispatch) => {
    try {
      console.log("1");
      const result = await fetchConToken("api/client/transaction", form, "POST");
      console.log(result);
      if (!result.success) {
        toast.error(result.data.error.description);
        return;
      }
      toast.success(result.titleResponse);
      dispatch(clearCart());
    } catch (error) {
      console.log(error);
    }
  };
};
