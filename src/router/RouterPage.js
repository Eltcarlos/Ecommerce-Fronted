import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const RouterPages = () => {
  const [showCart, setShowCart] = useState(false);
  const { productsCart } = useSelector((state) => state.globalState);

  useEffect(() => {
    if (productsCart.length > 0) {
      setShowCart(true);
    }
  }, [setShowCart, productsCart]);

  return (
    <>
      {/* Public Routes */}
      <Routes>
        <Route path="/" element={<HomePage showCart={showCart} setShowCart={setShowCart} />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductPage showCart={showCart} setShowCart={setShowCart} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default RouterPages;
