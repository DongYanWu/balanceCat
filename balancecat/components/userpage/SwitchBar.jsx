/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab, tabClasses } from "@mui/base/Tab";
// eslint-disable-next-line no-unused-vars
import useSWR, { mutate as globalMutate } from "swr";
import { useState } from "react";
import Image from "next/image";
import TargetList from "./TargetList";
import FetchWithToken from "../fetchWithToken";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function createData(name, total, wish, achievement, hisData) {
  return { name, total, wish, achievement, hisData };
}
function absolute(value) {
  if (value < 0) return -value;
  return value;
}

export default function SwitchBar({ token }) {
  const [startYear, setStartYear] = useState(2022);
  const [endYear, setEndYear] = useState(2023);
  // eslint-disable-next-line no-unused-vars, no-shadow
  const { data, error, mutate } = useSWR(
    [`${API_URL}goals/?startyear=${startYear}&endyear=${endYear} `, token],
    ([url, token]) => FetchWithToken(url, token)
  );

  const loading = !data && !error;
  console.log(data?.data);
  // const totalRows = [
  //   data?.data?.goals.map((item) => { createData(item.name, item.current_amount, item.amout, item.amout/item.current_amount)})
  //   // createData("房子", 159, 159, "24%"),
  //   // createData("Ice cream sandwich", 237, 159, "24%"),
  //   // createData("Eclair", 262, 159, "24%"),
  //   // createData("Cupcake", 305, 159, "24%"),
  //   // createData("Gingerbread", 356, 159, "24%"),
  // ];
  const excludedIds = [4000, 4100, 4101, 4102, 4103, 4200, 4201, 4202, 4203];
  const totalRows =
    data?.data?.goals.map((item) =>
      createData(
        item.name,
        ((excludedIds.includes(item.subject_id) ? -1 : 1) * (item.current_amount)).toLocaleString(),
        item.amount.toLocaleString(),
        ((excludedIds.includes(item.subject_id) ? -1 : 1) * (item.current_amount * 100 / item.amount).toFixed(2)).toLocaleString(),
        item.history_amount
      )
    ) || [];

  const debitRows =
    data?.data?.goals
      .filter((item) =>
        [
          1000, 1100, 1101, 1102, 1103, 1104, 1200, 1201, 1202, 1203, 1204,
          1205, 1206
        ].includes(item.subject_id)
      )
      .map((item) =>
        createData(
          item.name,
          item.current_amount.toLocaleString(),
          item.amount.toLocaleString(),
          (item.current_amount * 100 / item.amount).toFixed(2),
          item.history_amount
        )
      ) || [];

  const expenseRows =
    data?.data?.goals
      .filter((item) =>
        [
          5000, 5100, 5101, 5102, 5103, 5104, 5105, 5106, 5107, 5108, 5109,
          5200, 5201, 5202, 5203, 5204, 5205, 5206, 5207, 5208,
        ].includes(item.subject_id)
      )
      .map((item) =>
        createData(
          item.name,
          absolute(item.current_amount).toLocaleString(),
          item.amount.toLocaleString(),
          (absolute(item.current_amount * 100) / item.amount).toFixed(2),
          item.history_amount
        )
      ) || [];

  // const expenseRows =
  //   data?.data?.goals
  //     .filter((item) =>
  //       [
  //         5101, 5102, 5103, 5104, 5105, 5106, 5107, 5108, 5109, 5201, 5202,
  //         5203, 5204, 5205, 5206, 5207, 5208,
  //       ].includes(item.subject_id)
  //     )
  //     .map((item) =>
  //       createData(
  //         item.name,
  //         item.current_amount,
  //         item.amount,
  //         ((item.current_amount * 100) / item.amount).toFixed(2),
  //         item.history_amount
  //       )
  //     ) || [];
  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "322px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>努力加載中</p>
        <Image src="/gifcat.gif" alt="Loading..." width={100} height={100} />
      </div>
    );
  }
  return (
    <Tabs defaultValue={0}>
      <StyledTabsList>
        <StyledTab value={0}>總覽</StyledTab>
        <StyledTab value={1}>資產目標</StyledTab>
        <StyledTab value={2}>支出限制</StyledTab>
      </StyledTabsList>
      <TabPanel value={0}>
        <TargetList
          display="all"
          rows={totalRows}
          startYear={startYear}
          endYear={endYear}
          setStartYear={setStartYear}
          setEndYear={setEndYear}
        />
      </TabPanel>
      <TabPanel value={1}>
        <TargetList
          display="asset"
          rows={debitRows}
          startYear={startYear}
          endYear={endYear}
          setStartYear={setStartYear}
          setEndYear={setEndYear}
        />
      </TabPanel>
      <TabPanel value={2}>
        <TargetList
          display="limit"
          rows={expenseRows}
          startYear={startYear}
          endYear={endYear}
          setStartYear={setStartYear}
          setEndYear={setEndYear}
        />
      </TabPanel>
    </Tabs>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

// const grey = {
//   50: "#f6f8fa",
//   100: "#eaeef2",
//   200: "#d0d7de",
//   300: "#afb8c1",
//   400: "#8c959f",
//   500: "#6e7781",
//   600: "#57606a",
//   700: "#424a53",
//   800: "#32383f",
//   900: "#24292f",
// };

const StyledTab = styled(Tab)`
  font-family: "IBM Plex Sans", sans-serif;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #7fe2f6;
  }

  &:focus {
    color: #7fe2f6;
  }

  &.${tabClasses.selected} {
    background-color: ${blue[400]};
    color: black;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
//  color: #fff;
// background-color: ${blue[400]};

// const StyledTabPanel = styled(TabPanel)(
//   ({ theme }) => `
//   width: 100%;
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   padding: 20px 12px;
//   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//   border-radius: 12px;
//   opacity: 0.6;
//   `
// );

const StyledTabsList = styled(TabsList)(
  // eslint-disable-next-line no-unused-vars
  ({ theme }) => `
  max-width: 400px;
  background-color: inherit;
  border-radius: 12px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  
  `
);

//  background-color: ${blue[500]};
// box-shadow: 0px 4px 30px ${
//     theme.palette.mode === "dark" ? grey[900] : grey[200]
//   };
