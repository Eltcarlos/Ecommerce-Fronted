import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SearchPage } from "../pages/SearhPage";
import { ProtectedRouter } from "./PrivateRoutes/PrivatePage";
import { AccountHome } from "../pages/DashBoard/AccountHome";
import { AccountOrderHistory } from "../pages/DashBoard/AccountOrderHistory";
import { AccountSettings } from "../pages/DashBoard/AccountSettings";
import { AddressBook } from "../pages/DashBoard/AddressBook";
import { HelpCentre } from "../pages/DashBoard/HelpCentre";
import { Chat } from "../pages/DashBoard/Chat";
import { Admin } from "../pages/DashBoard/Admin/Admin";
import { AdminPage } from "./AdminRoutes/AdminPage";
import { Customers } from "../pages/DashBoard/Admin/Customers";
import { Products } from "../pages/DashBoard/Admin/Products";
import { RegisterPage } from "../pages/RegisterPage";
import { NotFoundPage } from "../pages/NotFoundPage";

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
        <Route path="/:search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        {/* Private Public Routes */}
        <Route element={<ProtectedRouter />}>
          <Route path="/accountHome" element={<AccountHome />} />
          <Route path="/accountOrderHistory" element={<AccountOrderHistory />} />
          <Route path="/accountSettings" element={<AccountSettings />} />
          <Route path="/addressBook" element={<AddressBook />} />
          <Route path="/help-centre" element={<HelpCentre />} />
          <Route path="/chat" element={<Chat />} />
          <Route element={<AdminPage />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default RouterPages;
