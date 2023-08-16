import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { DotGothic16 } from "next/font/google";

const dot = DotGothic16({
  weight: "400",
  subsets: ["cyrillic"],
});
const columns = [
  { id: "date", label: "日期", minWidth: 100 },
  { id: "amount", label: "金額", minWidth: 100 },
  { id: "description", label: "註解", minWidth: 100 },
  { id: "day", label: "曜日", minWidth: 100 },
  //   {
  //     id: "population",
  //     label: "Population",
  //     minWidth: 170,
  //     align: "right",
  //     format: (value) => value.toLocaleString("en-US"),
  //   },
  //   {
  //     id: "size",
  //     label: "Size\u00a0(km\u00b2)",
  //     minWidth: 170,
  //     align: "right",
  //     format: (value) => value.toLocaleString("en-US"),
  //   },
  //   {
  //     id: "density",
  //     label: "Density",
  //     minWidth: 170,
  //     align: "right",
  //     format: (value) => value.toFixed(2),
  //   },
];
function createData(date, amount, description, day) {
  return { date, amount, description, day };
}
// function createData(date, amount, population, size) {
//   const density = population / size;
//   return { date, amount, population, size, density };
// }

const rows = [
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
  createData(
    "2023/8/13",
    "$ 100,000",
    "小明在國小同學會的時候跟我借了１０萬元，他說8/13時會回我部分現金，約在台北車站面交",
    "Sunday",
  ),
];

export default function SubjectDetail() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "60%",
        overflow: "hidden",
        borderRadius: "20px",
        border: "1px solid #d9d9d9",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={dot.className}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
