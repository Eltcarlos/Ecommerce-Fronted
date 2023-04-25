import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const ItemCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="product"
        height="140"
        image="https://http2.mlstatic.com/D_NQ_NP_827517-MLA40655732582_022020-O.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          $ 279.900
        </Typography>
        <Typography variant="body2" color="green">
          Envión gratis
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
