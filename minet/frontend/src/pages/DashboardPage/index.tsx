import React, { useEffect, useState } from "react";
import Details from "../../components/templates/Details";
import RightBody from "./body2";
import LeftBody from "./body1";

import {PortfolioService } from "../../utils/type";
import Api from "../../utils/Api";
import { getUserIdFromSessionStorage } from "../../utils/Utility";

const DashboardPage = () => {
  const [sum, setSum] = useState(0);
  const userId = getUserIdFromSessionStorage("userId");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get(
          `/portfolio/crypto`
        );
        const cryptoHoldings = response?.data || [];

        const totalSum = cryptoHoldings.filter((data:PortfolioService)=>data.userId===userId).reduce(
          (acc: number, value: PortfolioService) => {
     
            return acc + (value.purchasePrice - value.sellPrice);
          },
          0
        );

        setSum(totalSum);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 
  return (
    <Details
      title="Dashboard"
      buyDisabled
      sellDisabled
      buttons={true}
      body1={<LeftBody totalInvestment={sum} />}
      body2={<RightBody />}
    />
  );
};

export default DashboardPage;
