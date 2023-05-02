import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Field, Form, Formik } from "formik";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import images from "react-payment-inputs/images";
import { toast } from "react-hot-toast";

export const PaymentForm = ({ setForm, form }) => {
  const { meta, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps, wrapperProps } =
    usePaymentInputs();
  const navigate = useNavigate();
  console.log(form);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Formik
        initialValues={{
          cardNumber: form?.cardNumber ? form.cardNumber : "",
          expiryDate: form?.expiryDate ? form.expiryDate : "",
          cvc: form?.cvc ? form.cvc : "",
          dues: "1",
        }}
        onSubmit={(values) => {
          if (values.cardNumber === "" || values.expiryDate === "" || values.cardCvc === "") {
            toast.error("fields not filled");

            return;
          }
          const newValues = {
            ...form,
            cardNumber: values.cardNumber,
            dues: values.dues,
            cvc: values.cvc,
            expiryDate: values.expiryDate,
            cardExpYear: "20" + values.expiryDate.substring(5, 7),
            cardExpMonth: values.expiryDate.substring(0, 2),
            cardCvc: values.cvc,
          };
          setForm(newValues);
          navigate("/checkout/ShippingAddress/paymentsDetails/reviewYourOrders");
        }}
        validate={() => {
          let errors = {};
          if (meta.erroredInputs.cardNumber) {
            errors.cardNumber = meta.erroredInputs.cardNumber;
          }
          if (meta.erroredInputs.expiryDate) {
            errors.expiryDate = meta.erroredInputs.expiryDate;
          }
          if (meta.erroredInputs.cardCvc) {
            errors.cardCvc = meta.erroredInputs.cardCvc;
          }
          return errors;
        }}
      >
        {(formik) => (
          <Form>
            <Grid container>
              <Grid item xs={12} md={6}>
                <PaymentInputsWrapper {...wrapperProps}>
                  <svg {...getCardImageProps({ images })} />
                  <Field name="cardNumber">
                    {({ field }) => (
                      <input {...getCardNumberProps({ onBlur: field.onBlur, onChange: field.onChange })} />
                    )}
                  </Field>
                </PaymentInputsWrapper>
              </Grid>
              <Grid item xs={12} md={3}>
                <PaymentInputsWrapper {...wrapperProps}>
                  <Field name="expiryDate">
                    {({ field }) => (
                      <input {...getExpiryDateProps({ onBlur: field.onBlur, onChange: field.onChange })} />
                    )}
                  </Field>
                </PaymentInputsWrapper>
              </Grid>
              <Grid item xs={12} md={3}>
                <PaymentInputsWrapper {...wrapperProps}>
                  <Field name="cvc">
                    {({ field }) => <input {...getCVCProps({ onBlur: field.onBlur, onChange: field.onChange })} />}
                  </Field>
                </PaymentInputsWrapper>
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Link to="/checkout/ShippingAddress">
                <Button sx={{ mt: 3, ml: 1 }}>back</Button>
              </Link>
              <Button type="submit" variant="contained" sx={{ mt: 3, ml: 1 }}>
                Next
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};
