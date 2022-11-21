// import React, { useState } from "react";
// import MaterialTable from "./../UI/MaterialTable";

// function Xodimlar() {
//   const [users, setUsers] = useState([]);

//   const [columns] = useState([
//     { title: "T/R", field: "id" },
//     { title: "FISH", field: "name" },
//     { title: "Second_Name", field: "second_name" },
//     { title: "Email", field: "email" },
//     { title: "Date", field: "date" },
//   ]);
//   return (
//     // <MaterialTable title={"Xodimlar bo'limi"} columns={columns} data={users} />
//     <></>
//   );
// }

// export default Xodimlar;

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";

import { Link } from "react-router-dom";

const rows = [
  {
    id: 1,
    name: "Cupcake",
    phone: 3015,
    manzil: 3.17,
    lavozimi: 617,
    oyligi: 4.13,
  },
  {
    id: 2,
    name: "Tom",
    phone: 3025,
    manzil: 3.27,
    lavozimi: 627,
    oyligi: 4.23,
  },
  {
    id: 3,
    name: "Jon",
    phone: 3035,
    manzil: 3.37,
    lavozimi: 637,
    oyligi: 4.33,
  },
  {
    id: 4,
    name: "Jeck",
    phone: 3045,
    manzil: 3.47,
    lavozimi: 647,
    oyligi: 4.43,
  },
  {
    id: 5,
    name: "Kruz",
    phone: 3055,
    manzil: 3.57,
    lavozimi: 657,
    oyligi: 4.53,
  },
  {
    id: 6,
    name: "qwerty",
    phone: 3065,
    manzil: 3.67,
    lavozimi: 667,
    oyligi: 4.63,
  },
  {
    id: 7,
    name: "asd",
    phone: 3075,
    manzil: 3.77,
    lavozimi: 677,
    oyligi: 4.73,
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 1,
    numeric: false,
    disablePadding: true,
    label: "FISH",
  },
  {
    id: 2,
    numeric: true,
    disablePadding: false,
    label: "Telefoni",
  },
  {
    id: 3,
    numeric: true,
    disablePadding: false,
    label: "Manzili",
  },
  {
    id: 4,
    numeric: true,
    disablePadding: false,
    label: "Lavozimi",
  },
  {
    id: 5,
    numeric: true,
    disablePadding: false,
    label: "Oyligi",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ background: "#082b7a" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            className="px-3"
          >
            <TableSortLabel
              sx={{ color: "white !important" }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function Xodimlar() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%", pt: 5 }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell
                        className="xodim_td"
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <Link
                          className="d-block text-black xodimlar_link"
                          to={`/xodimlar/${row.name}`}
                        >
                          {row.name}
                        </Link>
                      </TableCell>
                      <TableCell align="right" className="xodim_td">
                        <Link
                          className="d-block text-black xodimlar_link"
                          to={`/xodimlar/${row.name}`}
                        >
                          {row.phone}
                        </Link>
                      </TableCell>
                      <TableCell align="right" className="xodim_td">
                        <Link
                          className="d-block text-black xodimlar_link"
                          to={`/xodimlar/${row.name}`}
                        >
                          {row.lavozimi}
                        </Link>
                      </TableCell>
                      <TableCell align="right" className="xodim_td">
                        <Link
                          className="d-block text-black xodimlar_link"
                          to={`/xodimlar/${row.name}`}
                        >
                          {row.oyligi}
                        </Link>
                      </TableCell>
                      <TableCell align="right" className="xodim_td">
                        <Link
                          className="d-block text-black xodimlar_link"
                          to={`/xodimlar/${row.name}`}
                        >
                          {row.manzil}
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
