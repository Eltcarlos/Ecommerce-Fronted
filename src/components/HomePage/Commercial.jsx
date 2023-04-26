import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Box } from "@mui/material";

const banner = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dwzcq0mdv/image/upload/v1682375540/ecommerce/c707cec1eb6b--Banner-2-1-7dc1fa_iciy2y.webp",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dwzcq0mdv/image/upload/v1682375622/ecommerce/BANNER-OFICIAL-INTEL-500-SERIES_hqbl0b.png",
  },
];

export const Commercial = () => {
  return (
    <>
      <Swiper spaceBetween={50} loop={true} speed={1000} modules={[Autoplay]} autoplay={true}>
        {banner.map((banner, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
              <Box component="img" alt="profile" src={banner.url} height="100%" width="70%" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
