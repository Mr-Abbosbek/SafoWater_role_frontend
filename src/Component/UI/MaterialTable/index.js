import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import React from 'react';

function index({title, data, columns}) {
  return (
    <MaterialTable
        title={title}
        columns={columns}
        data={data}
        editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              resolve();
            }, 1000)
          }),
      }}
        options={{
          actionsColumnIndex: -1,
          headerStyle: {
            backgroundColor: "#082b7a",
            color: "white",
          },
          exportMenu: [
            {
              label: "Export PDF",
              exportFunc: (cols, datas) =>
                ExportPdf(cols, datas, "Mahsulot kirimi"),
            },
            {
              label: "Export CSV",
              exportFunc: (cols, datas) =>
                ExportCsv(cols, datas, "Mahsulot kirimi"),
            },
          ],
        }}
      />
  );
}

export default index;