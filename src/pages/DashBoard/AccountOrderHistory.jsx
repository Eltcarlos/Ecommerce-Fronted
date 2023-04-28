import React from "react";
import { LayoutDashBoard } from "../../layout/LayoutDashBoard";
import { Box, Grid, ListItem, Typography } from "@mui/material";
import box from "../../assets/empty-box-icon.webp";

export const AccountOrderHistory = () => {
  return (
    <LayoutDashBoard>
      <Box m="1.5rem 2.5rem">
        <Grid container spacing={2} row={16}>
          <Grid item xs={8}>
            <ListItem>
              <Box sx={{ display: "flex", flexDirection: "column", height: "400px", width: "1375px" }}>
                <Box>
                  <Typography fontWeight="bold" variant="h3">
                    Pedidos
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingY: "50px",
                  }}
                >
                  <Box component="img" alt="profile" src={box} width="100px" sx={{ objectFit: "cover" }} />
                  <Typography variant="h6" fontWeight="light">
                    No tiene pedidos
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          </Grid>
        </Grid>
      </Box>
    </LayoutDashBoard>
  );
};
