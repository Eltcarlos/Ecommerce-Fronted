import React from "react";
import Layout from "../layout/Layout";
import Gallery from "../components/ProductPage/Gallery";
import Description from "../components/ProductPage/Description";
import { FeaturedProducts } from "../components/HomePage/FeaturedProducts";
import { useParams } from "react-router-dom";
import { useGetProductIDQuery, useGetProductsQuery } from "../store/api/api";

export const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductIDQuery(id);
  const { data: dataProduct, isLoading: isLoadingProduct } = useGetProductsQuery();

  return (
    <>
      {!isLoading && !isLoadingProduct ? (
        <Layout>
          <section className="core">
            <Gallery data={data} />
            <Description data={data} />
          </section>
          <FeaturedProducts data={dataProduct} />
        </Layout>
      ) : (
        ""
      )}
    </>
  );
};
