import { useTheme } from "@emotion/react";
import { ThumbUpAlt } from "@mui/icons-material";
import { NumericFormat } from "react-number-format";
import { Box, Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import React from "react";
import FlexBetween from "../FlexBetween";

export const ItemProductCard = ({ product }) => {
  const theme = useTheme();
  const discountedPercentage = Math.round(((product.oldPrice - product.price) / product.price) * 100);
  return (
    <Card sx={{ display: "flex", width: "800px" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ display: "flex", height: "160px", width: "200px", justifyContent: "center", textAlign: "center" }}>
          <CardMedia
            component="img"
            alt="product"
            sx={{ width: "200px", height: "180px", objectFit: "contain", paddingY: "35px" }}
            image={product.img}
          />
        </Box>
        <CardContent sx={{ display: "flex", flexDirection: "column", width: "600px" }}>
          {product.rating >= 4.7 ? (
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
                <Typography sx={{ textDecorationStyle: "none" }} component="div" variant="h5">
                  Recomendado
                </Typography>
              </Box>
            </Box>
          ) : (
            ""
          )}
          <Typography variant="h3" paddingY="10px">
            {product.name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            color="text.secondary"
            sx={{ textDecoration: "line-through" }}
          >
            {product.oldPrice === null ? (
              ""
            ) : (
              <NumericFormat prefix="$" displayType="text" thousandSeparator="," value={product.oldPrice} />
            )}
          </Typography>
          <FlexBetween>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} gap="5px">
              <Typography variant="h3" fontWeight="bold">
                <NumericFormat prefix="$" displayType="text" thousandSeparator="," value={product.price} />
              </Typography>
              {product.oldPrice && <Typography color="green">{discountedPercentage}% OFF</Typography>}
            </Box>
            <Rating name="half-rating" defaultValue={product.rating} precision={0.5} readOnly />
          </FlexBetween>
          <Typography color="green">Envío gratis</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
