import React from "react";
import Layout from "../layout/Layout";
import Gallery from "../components/ProductPage/Gallery";
import MobileGallery from "../components/ProductPage/MobileGallery";
import Description from "../components/ProductPage/Description";

export const ProductPage = () => {
  return (
    <Layout>
      <section className="core">
        <Gallery />
        <MobileGallery />
        <Description />
      </section>
    </Layout>
  );
};
