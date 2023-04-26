import { Box, CardMedia } from "@mui/material";

const Gallery = ({ data }) => {
  return (
    <>
      <Box sx={{ display: "flex", height: "500px", width: "500px", justifyContent: "center", textAlign: "center" }}>
        <CardMedia
          component="img"
          alt="product"
          sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          image={data.img}
        />
      </Box>
    </>
  );
};

export default Gallery;
