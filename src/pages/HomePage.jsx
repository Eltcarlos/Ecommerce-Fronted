import React from "react";
import Layout from "../layout/Layout";
import { Commercial } from "../components/HomePage/Commercial";
import { FeaturedProducts } from "../components/HomePage/FeaturedProducts";
import { RangeProducts } from "../components/HomePage/RangeProducts";
import { useGetProductsQuery } from "../store/api/api";

export const HomePage = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <Layout>
      {isLoading === false ? (
        <>
          <Commercial />
          <FeaturedProducts data={data} />
          <RangeProducts data={data} />
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};
