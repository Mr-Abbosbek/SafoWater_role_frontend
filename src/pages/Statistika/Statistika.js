import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import TabButton from "../../Component/UI/Button/TabButton";
import StatistikaR from "./StatistikaRoute";

function StatistikaRoute() {
  const [path, setPath] = useState(true);

  return (
    <BrowserRouter>
      <TabButton
        className="p-0"
        title1="Sotilgan maxsulotlar"
        title2="Chiqarilgan maxsulotlar"
        pathname={"statistika"}
        setPath={setPath}
      />
      <StatistikaR path={path} />
    </BrowserRouter>
  );
}

export default StatistikaRoute;
