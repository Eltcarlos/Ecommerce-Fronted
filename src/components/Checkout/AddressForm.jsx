import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik, Form } from "formik";
import { Inputs } from "../Form/Inputs";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

export const AddressForm = ({ setForm, form }) => {
  const navigate = useNavigate();
  console.log(form);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Formik
        initialValues={{
          name: form?.name ? form.name : "",
          lastName: form?.lastName ? form.lastName : "",
          email: form?.email ? form.email : "",
          CellPhone: form?.CellPhone ? form.CellPhone : "",
          phone: form?.phone ? form.phone : "",
          docType: form?.docType ? form.docType : "",
          docNumber: form?.docNumber ? form.docNumber : "",
        }}
        onSubmit={(values) => {
          if (
            values.name === "" ||
            values.lastName === "" ||
            values.email === "" ||
            values.CellPhone === "" ||
            values.phone === "" ||
            values.docType === "" ||
            values.docNumber === ""
          ) {
            toast.error("fields not filled");

            return;
          }
          setForm(values);
          navigate("/checkout/ShippingAddress/paymentsDetails");
        }}
        validationSchema={console.log()}
      >
        {(formik) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Inputs label="Name" name="name" type="text" placeholder="Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Inputs label="Last Name" name="lastName" type="text" placeholder="Last Name" />
              </Grid>
              <Grid item xs={12}>
                <Inputs label="Email Address" name="email" type="email" placeholder="test@gmail.com" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Inputs label="Document Type" name="docType" type="text" placeholder="Document Type" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Inputs label="Document Number" name="docNumber" type="text" placeholder="79555302" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Inputs label="Phone" name="phone" type="text" placeholder="Phone" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Inputs label="Cell Phone" name="CellPhone" type="text" placeholder="Cell Phone" />
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
