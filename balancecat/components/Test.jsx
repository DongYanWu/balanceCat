// // pages/index.js
// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Collapse,
//   IconButton,
// } from "@mui/material";

// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const data = [
//   {
//     name: "Assets",
//     children: [
//       {
//         name: "Current Assets",
//         value: 1000,
//         lastMonthValue: 800,
//         children: [
//           { name: "Cash", value: 500, lastMonthValue: 900 },
//           { name: "Accounts Receivable", value: 500, lastMonthValue: 900 },
//         ],
//       },
//       {
//         name: "Non-Current Assets",
//         value: 1500,
//         lastMonthValue: 900,
//         children: [{ name: "Property", value: 1500, lastMonthValue: 900 }],
//       },
//     ],
//   },
//   {
//     name: "Liabilities",
//     children: [
//       {
//         name: "Current Liabilities",
//         value: 500,
//         lastMonthValue: 900,
//         children: [
//           { name: "Short Term Debt", value: 500, lastMonthValue: 900 },
//         ],
//       },
//       {
//         name: "Non-Current Liabilities",
//         value: 1000,
//         lastMonthValue: 900,
//         children: [
//           { name: "Long Term Debt", value: 1000, lastMonthValue: 900 },
//         ],
//       },
//     ],
//   },
// ];

// export default function Test() {
//   const [open, setOpen] = React.useState({});

//   const handleToggle = (name) => {
//     setOpen((prev) => ({ ...prev, [name]: !prev[name] }));
//   };

//   const renderRows = (items, depth = 0) =>
//     items.map((item) => (
//       <React.Fragment key={item.name}>
//         <TableRow>
//           <TableCell style={{ paddingLeft: `${depth * 20}px` }}>
//             {item.children && (
//               <IconButton size="small" onClick={() => handleToggle(item.name)}>
//                 {open[item.name] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//               </IconButton>
//             )}
//             {item.name}
//           </TableCell>

//           <TableCell>{item.value}</TableCell>
//           <TableCell align="right">{item.lastMonthValue}</TableCell>
//         </TableRow>
//         {item.children &&
//           open[item.name] &&
//           renderRows(item.children, depth + 1)}
//       </React.Fragment>
//     ));

//   return (
//     <TableContainer
//       component={Paper}
//       style={{ border: "1px solid black", width: "80%", margin: "auto" }}
//     >
//       <Table aria-label="nested table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Category</TableCell>
//             <TableCell
//               align="right"
//               style={{ paddingRight: 4, paddingLeft: 4 }}
//             >
//               Value
//             </TableCell>
//             <TableCell align="right">Last Month Value</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>{renderRows(data)}</TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
