import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Box, Button, Card, CardContent, Collapse } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const Address = ({ name, setHiddenButton, setForm, form, id, setOrder }) => {
  const theme = useTheme();
  const { addresses } = useSelector((index) => index.authState);
  const Address = addresses.find((index) => index.id === id);
  const addDirection = () => {
    setHiddenButton(false);
    const newValues = {
      ...form,
      Address,
    };
    setForm(newValues);
    setOrder(true);
  };
  return (
    <>
      <Card
        sx={{
          backgroundImage: "none",
          padding: "5px",
          borderRadius: "0.55rem",
          backgroundColor: theme.palette.secondary[500],
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Typography sx={{ fontSize: 14 }} color={theme.palette.secondary[400]} gutterBottom>
            {name}
          </Typography>
          <Button type="submit" variant="contained" sx={{ mt: 1, ml: 1 }} onClick={() => addDirection()}>
            add
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

const Review = ({ setForm, form }) => {
  const { productsCart, subTotal } = useSelector((index) => index.globalState);
  const { addresses } = useSelector((index) => index.authState);
  const hiddenCart = "************" + form?.cardNumber.slice(15, 20);
  const navigate = useNavigate();
  const [hiddenButton, setHiddenButton] = useState(true);
  const [order, setOrder] = useState(false);
  console.log(form);
  const back = () => {
    const Newform = (form.Address = {});
    setForm(Newform);
    navigate("/checkout/ShippingAddress/paymentsDetails");
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {productsCart?.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.category} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {subTotal}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            Full Name: {form?.name} {form?.lastName}
          </Typography>
          <Typography gutterBottom>Email: {form?.email}</Typography>
        </Grid>
      </Grid>
      <Grid item containerxs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          Payment details
        </Typography>
        <Grid container>
          <Box display="flex" direction="row">
            <Grid item xs={8} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Typography>Card Number: </Typography>
              <Typography> {hiddenCart} </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Typography sx={{ width: "20px" }}>Expiry Date:</Typography>
              <Typography>
                {form?.cardExpMonth}/{form?.cardExpYear}
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Address
          </Typography>
          {addresses.length === 0 ? (
            <Button type="submit" variant="contained" sx={{ mt: 3, ml: 1 }}>
              Agregar Direccion
            </Button>
          ) : (
            addresses.map((index, key) => {
              return (
                <>
                  <Collapse in={hiddenButton} timeout="auto" unmountOnExit>
                    <Box m="0.5rem 2.5rem">
                      <Address
                        key={key}
                        id={index.id}
                        name={index.name}
                        hiddenButton={hiddenButton}
                        setHiddenButton={setHiddenButton}
                        setForm={setForm}
                        form={form}
                        setOrder={setOrder}
                      />
                    </Box>
                  </Collapse>
                </>
              );
            })
          )}
          <Collapse in={!hiddenButton} timeout="auto" unmountOnExit>
            <Box>
              <Typography gutterBottom>Name Address: {form?.Address?.name}</Typography>
              <Typography gutterBottom>Address: {form?.Address?.address}</Typography>
              <Typography gutterBottom>Location: {form?.Address?.location}</Typography>
              <Typography gutterBottom>Number: {form?.Address?.phoneNumber}</Typography>
            </Box>
          </Collapse>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ mt: 3, ml: 1 }} onClick={() => back()}>
          back
        </Button>
        <Button type="submit" variant="contained" sx={{ mt: 3, ml: 1 }} disabled={!order}>
          Place Order
        </Button>
      </Box>
    </>
  );
};

export default Review;
