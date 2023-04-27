import React from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import { useGetSearchNameQuery } from "../store/api/api";
import { Commercial } from "../components/HomePage/Commercial";
import { RangeProducts } from "../components/HomePage/RangeProducts";

export const SearchPage = () => {
  const { search } = useParams();
  const { data, isLoading } = useGetSearchNameQuery(search);
  return (
    <Layout>
      <Commercial />
      {isLoading === false ? <RangeProducts data={data} /> : ""}
    </Layout>
  );
};
