import React from "react";
import Layout from "../layout/Layout";
import Gallery from "../components/ProductPage/Gallery";
import Description from "../components/ProductPage/Description";
import { FeaturedProducts } from "../components/HomePage/FeaturedProducts";
import { useParams } from "react-router-dom";
import { useGetProductIDQuery, useGetProductsQuery } from "../store/api/api";
import { DrawerCart } from "../components/Sidebars/DrawerCart";

export const ProductPage = ({ showCart, setShowCart }) => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductIDQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const { data: dataProduct, isLoading: isLoadingProduct } = useGetProductsQuery({
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      {!isLoading && !isLoadingProduct ? (
        <Layout>
          <section className="core">
            <Gallery data={data} />
            <Description data={data} />
          </section>
          <FeaturedProducts data={dataProduct} />
          <DrawerCart showCart={showCart} setShowCart={setShowCart} />
        </Layout>
      ) : (
        ""
      )}
    </>
  );
};
