import React from "react";
import { Route, Routes } from "react-router-dom";
import TradePage from "./pages/TradePage";
import DetailsPage from "./pages/Details";
import PurchasePage from "./pages/PurchasePage";
import PaymentPage from "./pages/Payment";
import DashboardPage from "./pages/DashboardPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignUpPage";
import AppContextProvider from "./utils/AppContextProvider";

const App = () => {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<SigninPage component="signin" />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/forgotPassword"
          element={<SigninPage component="forgotpassword" />}
        />
        <Route
          path="/resetPassword"
          element={<SigninPage component="resetpassword" />}
        />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/trade" element={<TradePage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </AppContextProvider>
  );
};
export default App;
