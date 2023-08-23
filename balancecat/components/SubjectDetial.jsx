/* eslint-disable react/no-array-index-key */
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
import { Button } from "@mui/material";
import createData from "@/createData";
import useSWRMutation from "swr/mutation";
import swal from "sweetalert";
// import swal from "sweetalert";

const dot = DotGothic16({
  weight: "400",
  subsets: ["cyrillic"],
});
const columns = [
  { id: "date", label: "日期", minWidth: 100 },
  { id: "amount", label: "金額", minWidth: 100 },
  { id: "description", label: "註解", minWidth: 100 },
  { id: "day", label: "曜日", minWidth: 100 },
];

export default function SubjectDetail({ entriesData, token }) {
  const rows = entriesData?.map((object) =>
    createData({
      id: object.id,
      timestamp: object.timestamp,
      details: object.details,
    }),
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [entryID, setEntryID] = React.useState(-1);
  const [entryDetailData, setEntryDetailData] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}entries/${entryID}`;

  async function fetcher(url, { arg }) {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${arg.token}`,
      },
    })
      .then((response) => response)
      .then((data) => [data, data.json()])

      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error:", error);
      });
  }
  const { trigger } = useSWRMutation(API_URL, fetcher);
  async function deleteEntry(url, { arg }) {
    return fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${arg.token}`,
      },
    })
      .then((response) => response)

      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error:", error);
      });
  }
  const { trigger: triggerDelete } = useSWRMutation(API_URL, deleteEntry);

  const handleClickOpen = async (row) => {
    await setSelectedRow(row);
    console.log(row.id);
    await setEntryID(row.id);
    setOpenDialog(true);
    trigger({ token }).then(async (data) => {
      const response = data[0];
      const responseData = await data[1];
      if (response.status === 200) {
        setEntryDetailData(responseData.data.entry);
      }
    });
  };
  const handleClickDelete = () => {
    triggerDelete({ token }).then(async (data) => {
      await console.log(data);
      swal("Success", `成功刪除分錄`, "success");
    });
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
        background: "linear-gradient(to bottom right, #eef0f2, #eee)",
        boxShadow: "0 0 40px rbg(0,0,0,0.5)",
        borderRadius: "20px",
        border: "3px solid #d9d9d9",
      }}
    >
      <TableContainer
        sx={{
          minHeight: 300,
          maxHeight: 440,
          // "&::-webkit-scrollbar-track": {
          //   backgroundColor: "#212131", // 更改滾動條軌道的顏色
          // },
          // "&::-webkit-scrollbar": {
          //   width: "12px", // 調整滾動條的寬度
          //   color: "#212131",
          // },
          // "&::-webkit-scrollbar-thumb": {
          //   backgroundColor: "#666", // 更改滾動條的顏色
          //   borderRadius: "10px", // 設定圓角
          // },
          // "&::-webkit-scrollbar-thumb:hover": {
          //   backgroundColor: "#777", // 滑鼠懸停時的顏色
          // },
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
                    background:
                      "linear-gradient(to bottom right, #eef0f2, #eee)",
                    // backgroundColor: "#212131",
                    // color: "white",
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
              // backgroundColor: "#212131",
              "& :hover": {
                backgroundColor: "#fff",
              },
              cursor: "pointer",
            }}
          >
            {rows
              ?.flat()
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  role="checkbox"
                  tabIndex={-1}
                  key={row.code}
                  onClick={() => handleClickOpen(row)}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    let renderedValue = value;

                    if (column.id === "description" && value?.length > 30) {
                      renderedValue = `${value.slice(0, 30)}...`;
                    } else if (column.id === "amount") {
                      renderedValue = `$ ${value}`;
                    }
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        // style={{ color: "white" }}
                      >
                        {renderedValue}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
          <Dialog open={openDialog} onClose={handleClose}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <DialogTitle>詳細資訊</DialogTitle>
              <Button
                variant="contained"
                sx={{ cursor: "pointer", margin: "1rem 1rem 0 0" }}
                onClick={handleClickDelete}
              >
                刪除分錄
              </Button>
            </div>
            <DialogContent sx={{ paddingTop: "0" }}>
              {selectedRow && (
                <div>
                  <p>日期： {selectedRow.date}</p>
                  <p>金額： $ {selectedRow.amount}</p>
                  <p>註解： {selectedRow.description}</p>
                  <p>曜日： {selectedRow.day}</p>
                  {entryDetailData?.details.some(
                    (detail) => detail.amount > 0,
                  ) && (
                    <p>
                      借方：{" "}
                      {entryDetailData.details.map((detail, index) => (
                        <span key={index}>
                          {detail.amount > 0
                            ? `${detail.subject.name} (金額：$ ${detail.amount})`
                            : ""}
                        </span>
                      ))}
                    </p>
                  )}
                  {entryDetailData?.details.some(
                    (detail) => detail.amount < 0,
                  ) && (
                    <p>
                      貸方：{" "}
                      {entryDetailData.details.map((detail, index) => (
                        <span key={index}>
                          {detail.amount < 0
                            ? `${detail.subject.name} (金額：$ ${
                                -1 * detail.amount
                              })`
                            : ""}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              )}
            </DialogContent>
          </Dialog>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows?.flat()?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          // color: "white",
          "& .Mui-disabled": {
            color: "#ccc",
          },
          // backgroundColor: "#170023",
          // "& .MuiTablePagination-selectIcon": {
          //   color: "white",
          // },
        }}
      />
    </Paper>
  );
}
