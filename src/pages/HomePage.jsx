import React from "react";
import Layout from "../layout/Layout";
import { Commercial } from "../components/HomePage/Commercial";
import { FeaturedProducts } from "../components/HomePage/FeaturedProducts";
import { RangeProducts } from "../components/HomePage/RangeProducts";

export const HomePage = () => {
  return (
    <Layout>
      <Commercial />
      <FeaturedProducts />
      <RangeProducts />
    </Layout>
  );
};
