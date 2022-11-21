import React, { useState } from 'react';
import MaterialTable from '@material-table/core';

function SalesCenter() {

  const [columns] = useState([
    { title: "T/R", field: "id" },
    { title: "FISH", field: "name" },
    {
      title: "Telifon nomeri",
      field: "tel_num",
      initialEditValue: "",
    },
    { title: "Manzili", field: "manzil" },
    { title: "Maxsulot nomi", field: "max_nomi" },
    { title: "Mahsulot miqdori(pachka)", field: "max_miqdori" },
  ]);

  const [data, setData] = useState([
    {
      id: "1",
      name: "Oxunov Islombek Karimjon o'g'li",
      tel_num: "+998999999999",
      manzil: "Farg'ona A.Navoiy ko.",
      max_nomi: "Coca Cola",
      max_miqdori: 20
    },
    {
      id: "2",
      name: "Dexqonov Abdunazar Olimjon o'g'li",
      tel_num: "+998912345678",
      manzil: "Farg'ona S.Temur ko.",
      max_nomi: "Mors",
      max_miqdori: 50
    },
  ]);
  return (
    <div className='py-4 px-3'>
      <MaterialTable
      title="Buyurtma qabul qilish"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
      options={{
        actionsColumnIndex : -1,
        headerStyle: {
          backgroundColor: "#082b7a",
          color: "white",
        },
      }}
    />
    </div>
  );
}

export default SalesCenter;