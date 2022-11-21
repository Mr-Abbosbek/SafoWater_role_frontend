import React, { useState } from "react";
import MaterialTable from "../../Component/UI/MaterialTable";

function Buyurtmalar({ title }) {
  const [sales, setSales] = useState([]);

  const [columns] = useState([
    { title: "T/R", field: "id" },
    { title: "FISH", field: "name" },
    { title: "Second_Name", field: "second_name" },
    { title: "Email", field: "email" },
    { title: "Date", field: "date" },
  ]);

  return (
    <div>
      <MaterialTable title={title} columns={columns} data={sales} />
    </div>
  );
}

export default Buyurtmalar;
