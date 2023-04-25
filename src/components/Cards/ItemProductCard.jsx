import { useTheme } from "@emotion/react";
import { ThumbUpAlt } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import React from "react";
import FlexBetween from "../FlexBetween";

export const ItemProductCard = () => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          alt="product"
          height="200"
          image="https://http2.mlstatic.com/D_NQ_NP_827517-MLA40655732582_022020-O.jpg"
        />
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }} gap="2px">
            <Box
              borderRadius="5px"
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: theme.palette.grey[800],
                color: "white",
                padding: "2px",
              }}
            >
              <ThumbUpAlt />
              <Typography component="div" variant="h5">
                Recomendado
              </Typography>
            </Box>
          </Box>
          <Typography variant="h3" paddingY="10px">
            Microsft Xbox Series S 512GB Standard color blanco
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            color="text.secondary"
            sx={{ textDecoration: "line-through" }}
          >
            $ 3.774.900
          </Typography>
          <FlexBetween>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} gap="5px">
              <Typography variant="h3" fontWeight="bold">
                3.099.900
              </Typography>
              <Typography color="green">17% OFF</Typography>
            </Box>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </FlexBetween>
          <Typography color="green">Envío gratis</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
