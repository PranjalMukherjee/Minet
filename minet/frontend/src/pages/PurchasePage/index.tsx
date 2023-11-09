import React, { useEffect, useState } from "react";

import CheckoutTemplate from "../../components/templates/Checkout/index";
import PaymentMethod from "../../components/molecules/PaymentMethod";
import SpeedDeliveryCard from "../../components/molecules/SpeedDeliveryCard";
import AmountDetail from "../../components/organisms/AmountDetail";
import CryptoSelection from "../../components/organisms/CryptoSelection";
import TransactionCard from "../../components/organisms/TransactionCard";
import { useLocation, useNavigate } from "react-router-dom";

import { getUserIdFromSessionStorage } from "../../utils/Utility";
import { updateWalletData } from "../../services/details";

import {
  getAllCrypto,
  postCrypto,
  postTransaction,
} from "../../services/portfolio";
import { PortfolioService } from "../../utils/type";

const PurchasePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const transaction_type = state ? state.transaction_type : undefined;
  const header_statement =
    transaction_type == "BUY" ? "You are buying" : "You are selling";
  const cryptoAction = transaction_type == "BUY" ? "Buy max" : "Sell max";

  const [quantity, setQuantity] = useState<number | number[]>(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [unitPrice, setUnitPrice] = useState(state?.unitPrice);
  const [symbol, setSymbol] = useState(state?.symbol);
  const [walletBalance, setWalletBalance] = useState(0);
  const [coinName, setCoinName] = useState(state?.coin_name);
  const [availableQuantity, setAvailableQuantity] = useState(100);

  const userId = getUserIdFromSessionStorage("userId");

  useEffect(() => {
    const getData = async () => {
      await getAllCrypto().then((response) => {
        const cryptoHoldings: PortfolioService[] = response.filter(
          (cryptoHolding: PortfolioService) =>
            cryptoHolding.userId === userId &&
            cryptoHolding.cryptoId === state?.coinId
        );
        const balanceQuantity = cryptoHoldings.reduce((acc, cryptoHolding) => {
          if (cryptoHolding.purchasePrice != 0) {
            acc += cryptoHolding.quantity;
          }
          if (cryptoHolding.sellPrice != 0) {
            acc -= cryptoHolding.quantity;
          }
          return acc;
        }, 0);
        setAvailableQuantity(balanceQuantity);
      });
    };
    transaction_type === "BUY"
      ? setAvailableQuantity(walletBalance / unitPrice)
      : getData();
  }, [state?.coinId, walletBalance, unitPrice, transaction_type, userId]);

  useEffect(() => {
    const totalWalletAmount =
      sessionStorage.getItem("totalWalletAmount") ?? "0";
    setWalletBalance(parseInt(totalWalletAmount, 10));

    const calculateTotalQuantity = () => {
      if (typeof quantity === "number") {
        return quantity * unitPrice;
      }
      return 0;
    };
    const newTotalAmount = calculateTotalQuantity();
    setTotalAmount(newTotalAmount);
  }, [quantity, totalAmount, unitPrice, walletBalance, totalAmount]);

  const doTransaction = (walletBalance: number) => {
    if (walletBalance > totalAmount) {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}`;
      const cryptoHoldingData = {
        quantity: quantity,

        purchasePrice: transaction_type === "BUY" ? totalAmount : null,
        purchaseDate: transaction_type === "BUY" ? formattedDate : null,
        sellPrice: transaction_type === "SELL" ? totalAmount : null,
        sellDate: transaction_type === "SELL" ? formattedDate : null,

        userId: userId,
        cryptoId: coinName.toLowerCase(),
        brokerName: "XYZPeople",
      };

      postCrypto(cryptoHoldingData)
        .then((response) => {
          const transactionData = {
            status: "SUCCESS",
            date: formattedDate,
            type: transaction_type === "BUY" ? "Purchased" : "Sold",
            cryptoHoldingId: response.data.id,
          };
          postTransaction(transactionData);
          updateWallet(walletBalance);
        })
        .catch((error) => {
          console.error("Error while making POST request:", error);
        });
    }
  };
  const updateWallet = (walletBalance: number) => {
    const walletData = async () => {
      const balance = walletBalance - (totalAmount + 30);
      await updateWalletData(userId, balance).then((res) => {
        sessionStorage.setItem("totalWalletAmount", res.totalBalance);

        navigate(`/payment`, {
          state: {
            status: transaction_type,
            amount: totalAmount + 30,
            acronym: symbol,
            quantity: quantity,
            coinName: coinName,
          },
        });
      });
    };
    walletData();
  };
  const handleTransactionBuySellButton = () => {
    doTransaction(walletBalance);
  };

  return (
    <CheckoutTemplate
      body1={
        <>
          <CryptoSelection
            selectedCoin={coinName}
            transaction_type={transaction_type}
            setUnitPrice={setUnitPrice}
            setSymbol={setSymbol}
            setCoinName={setCoinName}
          />
          <PaymentMethod cost={"600000"} />
          <AmountDetail
            maximumValue={availableQuantity}
            cryptoPrice={unitPrice}
            cryptoQuantity={quantity}
            cryptoAction={cryptoAction}
            symbol={symbol}
            setQuantity={setQuantity}
          />
          <SpeedDeliveryCard />
        </>
      }
      body2={
        <TransactionCard
          headerStatement={header_statement}
          amount={`${quantity} ${symbol.toUpperCase()}`}
          unit={"1" + `${symbol.toUpperCase()}` + " = $" + `${unitPrice}`}
          paymentSource="Visa credit ...8845"
          deliveryFees={`${30}`}
          deposit={`${coinName} wallet`}
          totalCurrencyAmount={`$ ${totalAmount}`}
          totalCurrencyQuantity={quantity + `${symbol.toUpperCase()}`}
          totalAmount={`$ ${totalAmount + 30}`}
          buttonLabel={`${transaction_type}` + " NOW"}
          handleTransaction={handleTransactionBuySellButton}
          enableButton={walletBalance < totalAmount}
          data-testid="transaction-card"
        />
      }
      title={"Checkout"}
      buttons={false}
    />
  );
};
export default PurchasePage;
