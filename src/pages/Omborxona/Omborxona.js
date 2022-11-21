import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import TabButton from "../../Component/UI/Button/TabButton";
import AllModal from "../../Component/UI/Modal/AllModal";
import AllTabs from "../../Component/UI/Tabs/AllTabs";
import OmborRoute from "./OmborRoute";

function Omborxona() {
  // const token = getToken();

  // useEffect(() => {
  //   try {
  //     fetch("http://localhost:8888/api/product", {
  //       method: "get",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }).then((res) => res.json())
  //       .then((res)=>{
  //         console.log(res);
  //         setAllProduct(res);
  //       })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [token]);

  let a = new Date();
  const [path, setPath] = useState(true);
  const [date, setDate] = useState({
    sana: `${a.getDate()}-${a.getMonth()}-${a.getFullYear()}`,
  });

  const DateTabs = () => {
    console.log(date.sana);
  };
  useEffect(() => {
    DateTabs();
  });

  return (
    <BrowserRouter>
      <div className="d-flex justify-content-center pb-4 pt-1">
        <TabButton
          title1="Mahsulot kirimi"
          title2="Chiqarilgan maxsulotlar"
          pathname={"omborxona"}
          setPath={setPath}
        />
        <AllModal />
      </div>
      <AllTabs
        pathLink={path === true ? "/omborxona/ " : `/omborxona/${" "}${" "}`}
        setDate={setDate}
      />
      <OmborRoute
        title={path === true ? "Mahsulot kirimi" : `Chiqarilgan maxsulotlar`}
        path={path}
      />
    </BrowserRouter>
  );
}

export default Omborxona;
