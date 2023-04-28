import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Commercial } from "../components/HomePage/Commercial";
import { FeaturedProducts } from "../components/HomePage/FeaturedProducts";
import { RangeProducts } from "../components/HomePage/RangeProducts";
import { useGetProductsPaginationQuery, useGetProductsQuery } from "../store/api/api";
import { DrawerCart } from "../components/Sidebars/DrawerCart";

export const HomePage = ({ showCart, setShowCart }) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [sort, setSort] = useState({});
  const { data: Featured } = useGetProductsQuery();
  const { data, isLoading } = useGetProductsPaginationQuery(
    {
      page,
      pageSize,
      sort: JSON.stringify(sort),
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <Layout>
      {isLoading === false ? (
        <>
          <Commercial />
          <FeaturedProducts data={Featured || {}} />
          <RangeProducts data={data || {}} setPage={setPage} setPageSize={setPageSize} />
          <DrawerCart showCart={showCart} setShowCart={setShowCart} />
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};
