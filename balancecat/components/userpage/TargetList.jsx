import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import BasicLineChart from "./BasicLineChart";

// function createData(name, total, wish, achievement, protein) {
//   return { name, total, wish, achievement, protein };
// }

// const rows = [
//   createData("房子", 159, 159, "24%"),
//   createData("Ice cream sandwich", 237, 159, "24%"),
//   createData("Eclair", 262, 159, "24%"),
//   createData("Cupcake", 305, 159, "24%"),
//   createData("Gingerbread", 356, 159, "24%"),
// ];

export default function TargetList({
  display,
  rows,
  setStartYear,
  setEndYear,
  startYear,
  endYear,
}) {
  return (
    <TableContainer
      sx={{
        maxHeight: "270px",
        backgroundColor: "transparent",
        padding: "10px 10px 0px 10px",
        boxShadow: "none",
        borderRadius: "0px",
      }}
      component={Paper}
    >
      <Table
        sx={{ minWidth: 650, boxShadow: "none", borderRadius: "0px" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderBottom: "none" }}>項目</TableCell>
            <TableCell align="right" sx={{ borderBottom: "none" }}>
              總額
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: "none" }}>
              {display === "limit" ? "限制金額" : "目標金額"}
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: "none" }}>
              {display === "asset" ? "達成率" : "比率"}
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: "none" }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              hover
              sx={{
                "&:hover": {
                  backgroundColor: "blue",
                  borderRadius: "12px",

                  boxShadow: "0px 4px 30px  blue",
                },

                // border: "1px solid #E0E0E0",
                // Adjust the height to account for the new border
                // If you only want the top and bottom borders to be 20px and not on the sides:
                // borderTop: '20px solid red',
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderBottom: "none",
                }}
              >
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "none" }}>
                {row.total}
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "none" }}>
                {row.wish}
              </TableCell>
              <TableCell
                align="right"
                sx={{ borderBottom: "none", paddingRight: "12px" }}
              >
                <Chip
                  label={`${row.achievement}%`}
                  color="success"
                  variant="outlined"
                  sx={{
                    padding: "0px",
                    "& .MuiChip-root": {
                      padding: "0px",
                    },
                  }}
                />
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "none" }}>
                <BasicLineChart
                  name={row.name}
                  total={row.total}
                  wish={row.wish}
                  achievement={row.achievement}
                  hisData={row.hisData}
                  setStartYear={setStartYear}
                  setEndYear={setEndYear}
                  startYear={startYear}
                  endYear={endYear}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
