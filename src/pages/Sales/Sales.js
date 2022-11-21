import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import TabButton from "../../Component/UI/Button/TabButton";
import AllTabs from "../../Component/UI/Tabs/AllTabs";
import SalesRoute from "./SalesRoute";

function Sales() {
  let a = new Date();

  const [setDate] = useState({
    sana: `${a.getDate()}-${a.getMonth()}-${a.getFullYear()}`,
  });
  const [path, setPath] = useState(true);

  return (
    <BrowserRouter className="pt-5">
      <div className="pb-4 pt-1">
        <TabButton
          title1="Buyurtmalar ro'yxati"
          title2="Yetkazilgan buyurtmalar"
          setPath={setPath}
          pathname={"sales"}
        />
      </div>
      <AllTabs
        pathLink={path === true ? `/sales/ ` : `/sales/${" "}${" "}`}
        setDate={setDate}
      />
      <SalesRoute
        title={
          path === true
            ? "Buyurtmalar ro'yxati"
            : "Yetkazilgan buyurtmalar ro'yxati"
        }
      />
    </BrowserRouter>
  );
}

export default Sales;
