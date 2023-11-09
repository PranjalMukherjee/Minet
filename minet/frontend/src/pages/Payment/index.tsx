import React from "react";
import Details from "../../components/templates/Details";
import TransactionSuccess from "../../components/organisms/TransactionSuccess";
import { useLocation, useNavigate } from "react-router-dom";
import { MESSAGE } from "../../utils/constant";

const PaymentPage = () => {
  const { state } = useLocation();
  const { status, quantity, acronym, coinName } = state;
  const message = status === "BUY" ? `Purchase ${MESSAGE}` : `Sell ${MESSAGE}`;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/details", {
      state: {
        showTabs: false,
        tabValue: 0,
        coinName: coinName,
        showAllTranscation: true,
      },
    });
  };
  return (
    <Details
      title="Checkout"
      sellDisabled
      buyDisabled
      buttons
      body1={
        <TransactionSuccess
          amount={`${quantity} ${acronym.toUpperCase()}`}
          message={message}
          coinLabel={`${status} CRYPTO`}
          goToUSDCoin={handleClick}
        />
      }
    />
  );
};

export default PaymentPage;
