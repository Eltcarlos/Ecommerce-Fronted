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
import { DashBoard } from "../pages/DashBoard/Admin/DashBoard";
import { Transactions } from "../pages/DashBoard/Admin/Transactions";
import { OverView } from "../pages/DashBoard/Admin/OverView";
import { ShippingAddressPage } from "../pages/ShippingAddressPage";
import { PaymentDetailsPage } from "../pages/PaymentDetailsPage";
import { ReviewYourOrderPage } from "../pages/ReviewYourOrderPage";

const RouterPages = () => {
  const [showCart, setShowCart] = useState(false);
  const { productsCart } = useSelector((state) => state.globalState);
  const [form, setForm] = useState();

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
        <Route path="/search/:search" element={<SearchPage />} />
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
          <Route path="/checkout/shippingAddress" element={<ShippingAddressPage setForm={setForm} form={form} />} />
          <Route
            path="/checkout/shippingAddress/paymentsDetails"
            element={<PaymentDetailsPage setForm={setForm} form={form} />}
          />
          <Route
            path="/checkout/shippingAddress/paymentsDetails/reviewYourOrders"
            element={<ReviewYourOrderPage setForm={setForm} form={form} />}
          />
          <Route element={<AdminPage />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/dashBoard" element={<DashBoard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/overview" element={<OverView />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default RouterPages;
