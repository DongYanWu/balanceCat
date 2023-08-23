/* eslint-disable no-nested-ternary */
// pages/index.js
import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  // Collapse,
  IconButton,
} from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SheetSkeleton from "./SheetSkeleton";
import styles from "../styles/sheet.module.scss";

// const data = [
//   {
//     name: "資產",
//     value: 1000,
//     lastMonthValue: 800,
//     children: [
//       {
//         name: "流動資產",
//         value: 1000,
//         lastMonthValue: 800,
//         children: [
//           { name: "現金", value: 500, lastMonthValue: 900 },
//           { name: "股票", value: 500, lastMonthValue: 900 },
//           { name: "應收帳款", value: 500, lastMonthValue: 900 },
//           { name: "其他", value: 500, lastMonthValue: 900 },
//         ],
//       },
//       {
//         name: "非流動資產",
//         value: 1500,
//         lastMonthValue: 900,
//         children: [
//           { name: "車子", value: 1500, lastMonthValue: 900 },
//           { name: "房子", value: 1500, lastMonthValue: 900 },
//           { name: "3C", value: 1500, lastMonthValue: 900 },
//           { name: "家電", value: 1500, lastMonthValue: 900 },
//           { name: "預付款", value: 1500, lastMonthValue: 900 },
//           { name: "其他", value: 1500, lastMonthValue: 900 },
//         ],
//       },
//     ],
//   },
//   {
//     name: "負債",
//     value: 1000,
//     lastMonthValue: 800,
//     children: [
//       {
//         name: "流動負債",
//         value: 500,
//         lastMonthValue: 900,
//         children: [
//           { name: "信用卡", value: 500, lastMonthValue: 900 },
//           { name: "應付帳款", value: 1500, lastMonthValue: 900 },
//           { name: "其他", value: 1500, lastMonthValue: 900 },
//         ],
//       },
//       {
//         name: "非流動負債",
//         value: 1000,
//         lastMonthValue: 900,
//         children: [
//           { name: "分期付款", value: 1000, lastMonthValue: 900 },
//           { name: "車貸", value: 1500, lastMonthValue: 900 },
//           { name: "房貸", value: 1500, lastMonthValue: 900 },
//           { name: "其他", value: 1500, lastMonthValue: 900 },
//         ],
//       },
//     ],
//   },
// ];

export default function Sheet({ data, isLoading, isPrevLoading }) {
  const [open, setOpen] = React.useState({});

  const handleToggle = (name) => {
    setOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  const excludedIds = [
    1000, 1100, 1200, 2000, 2100, 2200, 3000, 3100, 3200, 4000, 4100, 4200,
    5000, 5100, 5200,
  ];
  const absolute = (value) => {
    if (value < 0) return value * -1;
    return value;
  };
  const renderRows = (items, depth = 0) =>
    items?.map((item) => (
      <React.Fragment key={item.name}>
        <TableRow hover>
          <TableCell
            style={{
              paddingLeft: `${10 + depth * 20}px`,
              display: "flex",
              alignItems: "center",
            }}
          >
            {item.children ? (
              <IconButton size="small" onClick={() => handleToggle(item.name)}>
                {open[item.name] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            ) : (
              <IconButton>
                <div style={{ width: "1em", height: "18px", padding: "0px" }} />
              </IconButton>
            )}
            <div>
              {item.name}
              <p className={styles.subtitle}>{item.subtitle}</p>
            </div>
          </TableCell>
          <TableCell align="right">
            {isPrevLoading ? (
              <SheetSkeleton width={60} height={10} />
            ) : excludedIds.includes(item.subject_id) ? (
              absolute(item.value)
            ) : (
              <Link
                href={`/accountdetail/${item.subject_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {absolute(item.value)}
              </Link>
            )}
          </TableCell>
          <TableCell align="right" className={styles.lastvalue}>
            {isLoading ? (
              <SheetSkeleton width={60} height={10} />
            ) : excludedIds.includes(item.subject_id) ? (
              absolute(item.lastMonthValue)
            ) : (
              <Link
                href={`/accountdetail/${item.subject_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {absolute(item.lastMonthValue)}
              </Link>
            )}
          </TableCell>
        </TableRow>
        {item.children &&
          open[item.name] &&
          renderRows(item.children, depth + 1)}
      </React.Fragment>
    ));

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        border: "2px solid #d9d9d9",
        background: "linear-gradient(to bottom right, #fffcf7, #ccc)",
        boxShadow: "0 0 40px rgb(255,255,255,1)",
        margin: "50px 0",
        borderRadius: "20px",
      }}
      // className={styles.tableContainer}
    >
      <Table aria-label="nested table">
        <TableHead>
          <TableRow hover>
            <TableCell sx={{ fontWeight: "600" }}>Category</TableCell>
            <TableCell align="right" sx={{ fontWeight: "600" }}>
              上期金額
            </TableCell>
            <TableCell
              align="right"
              className={styles.lastvalue}
              sx={{ fontWeight: "600" }}
            >
              當期金額
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderRows(data)}</TableBody>
      </Table>
    </TableContainer>
  );
}
