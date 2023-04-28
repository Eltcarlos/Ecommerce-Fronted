import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Commercial } from "../components/HomePage/Commercial";
import { FeaturedProducts } from "../components/HomePage/FeaturedProducts";
import { RangeProducts } from "../components/HomePage/RangeProducts";
import { useGetProductsPaginationQuery, useGetProductsQuery } from "../store/api/api";
import { DrawerCart } from "../components/Sidebars/DrawerCart";

export const HomePage = ({ showCart, setShowCart }) => {
  const [page, setPage] = useState();
  const [pageSize, setPageSize] = useState(5);
  const { data: Featured, isLoading: isLoadingFeatured } = useGetProductsQuery();
  const { data, isLoading } = useGetProductsPaginationQuery({
    page,
    pageSize,
  });

  return (
    <Layout>
      {!isLoading && !isLoadingFeatured ? (
        <>
          <Commercial />
          <FeaturedProducts data={Featured || []} />
          <RangeProducts key={data._id} data={data.docs || []} setPage={setPage} page={data.totalPages || []} />
          <DrawerCart showCart={showCart} setShowCart={setShowCart} key={data._id} />
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};
