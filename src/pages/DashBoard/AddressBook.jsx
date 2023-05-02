import React, { useState } from "react";
import { LayoutDashBoard } from "../../layout/LayoutDashBoard";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import { useTheme } from "@emotion/react";
import { NewAddress } from "../../components/Address/NewAddress";
import { useGetDirectionsQuery } from "../../store/api/api";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "@mui/icons-material";
import { removeAddress } from "../../store/auth/thunks";

const Address = ({ name, address, phoneNumber, id }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  console.log(id);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={theme.palette.secondary[400]} gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          {address}
        </Typography>
        <Typography color={theme.palette.secondary[400]}>{phoneNumber}</Typography>
        <Divider />
        <IconButton onClick={() => dispatch(removeAddress(id))}>
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export const AddressBook = () => {
  const [add, setAdd] = useState(false);
  const theme = useTheme();
  const { uid } = useSelector((state) => state.authState);
  const { data, isLoading } = useGetDirectionsQuery(uid);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <LayoutDashBoard>
      <Box m="1.5rem 2.5rem">
        <Divider />
        <FlexBetween>
          <Typography fontWeight="bold" variant="h1">
            Libreta de direcciones
          </Typography>
          <Box>
            <Button color="secondary" variant="outlined">
              Cerrar Sesión
            </Button>
          </Box>
        </FlexBetween>
        <Divider />
        <Box sx={{ padding: "2px" }}>
          <Button color="secondary" variant="contained" onClick={() => setAdd(true)}>
            Agregar dirección
          </Button>
        </Box>
        <Collapse
          in={add}
          timeout="auto"
          unmountOnExit
          sx={{
            color: theme.palette.neutral[300],
          }}
        >
          <NewAddress setAdd={setAdd} />
        </Collapse>
      </Box>
      <Box m="1.5rem 2.5rem">
        {data || !isLoading ? (
          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap="20px"
            columnGap="1.33%"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {data.map(({ id, name, address, phoneNumber }) => (
              <Address key={id} id={id} name={name} address={address} phoneNumber={phoneNumber} />
            ))}
          </Box>
        ) : (
          <>Loading...</>
        )}
      </Box>
    </LayoutDashBoard>
  );
};
