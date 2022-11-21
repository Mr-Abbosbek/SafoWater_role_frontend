import React, { useState } from "react";
import MaterialTable from "../../Component/UI/MaterialTable";

function Mahsulotlar({ title, path }) {
  const [allProduct] = useState([]);
  // const [maxKirimi, setMaxKirimi] = useState([]);
  // const [maxChiqarish, setMaxChiqarish] = useState([]);
  const [columnsK] = useState([
    { title: "T/R", field: "id" },
    { title: "Mahsulot", field: "mahsulot" },
    { title: "Miqdori", field: "miqdori" },
    { title: "Olchovi", field: "olchovi" },
    { title: "Narxi", field: "narxi" },
    { title: "Olib kelingan vaqti", field: "olingan_vaqti" },
  ]);

  const [columnsCH] = useState([
    { title: "T/R", field: "id" },
    { title: "Mahsulot", field: "mahsulot" },
    { title: "Miqdori", field: "miqdori" },
    { title: "Olchovi", field: "olchovi" },
    { title: "Narxi(1 Pachka)", field: "narxi" },
    { title: "Chiqarilgan vaqti", field: "chiqarilgan" },
  ]);
  return (
    <div>
      <MaterialTable
        title={title}
        columns={path === true ? columnsK : columnsCH}
        data={allProduct}
      />
    </div>
  );
}

export default Mahsulotlar;
