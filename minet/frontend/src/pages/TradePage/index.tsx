import React from "react";
import Details from "../../components/templates/Details";
import AssetTable from "../../components/organisms/AssetTable";
import { useLocation } from "react-router-dom";

const TradePage = () => {
  const { state } = useLocation();
  const selectedTab = state.selectedTab;
  return (
    <Details
      buyDisabled
      sellDisabled
      body1={<AssetTable selectedTab={selectedTab} />}
      dashboard={false}
      title={"Trade"}
      buttons={true}
    ></Details>
  );
};
export default TradePage;
