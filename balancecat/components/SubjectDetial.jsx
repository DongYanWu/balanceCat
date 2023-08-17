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
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

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

  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleClickOpen = (row) => {
    setSelectedRow(row);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

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
        width: "100%",
        overflow: "hidden",
        borderRadius: "20px",
        border: "3px solid #d9d9d9",
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 440,
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#212131", // 更改滾動條軌道的顏色
          },
          "&::-webkit-scrollbar": {
            width: "12px", // 調整滾動條的寬度
            color: "#212131",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#666", // 更改滾動條的顏色
            borderRadius: "10px", // 設定圓角
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#777", // 滑鼠懸停時的顏色
          },
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#212131",
                    color: "white",
                  }}
                  className={dot.className}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              backgroundColor: "#212131",
              "& :hover": {
                backgroundColor: "#2c2d3d",
              },
              cursor: "pointer",
            }}
          >
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  role="checkbox"
                  tabIndex={-1}
                  key={row.code}
                  onClick={() => handleClickOpen(row)}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ color: "white" }}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
          <Dialog open={openDialog} onClose={handleClose}>
            <DialogTitle>詳細資訊</DialogTitle>
            <DialogContent>
              {selectedRow && (
                <div>
                  <p>日期： {selectedRow.date}</p>
                  <p>金額： {selectedRow.amount}</p>
                  <p>註解： {selectedRow.description}</p>
                  <p>曜日： {selectedRow.day}</p>
                  <p>借方：</p>
                  <p>貸方：</p>
                </div>
              )}
            </DialogContent>
          </Dialog>
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
        sx={{
          color: "white",
          "& .Mui-disabled": {
            color: "#ccc",
          },
          backgroundColor: "#212130",
          "& .MuiTablePagination-selectIcon": {
            color: "white",
          },
        }}
      />
    </Paper>
  );
}
