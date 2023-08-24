/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import Cookies from "cookies";
import * as React from "react";
import dayjs from "dayjs";
import MonthPicker from "@/components/MonthPicker";
import Sheet from "@/components/Sheet";
import Image from "next/image";
import CardTemplate from "@/components/cardTemplate/CardTemplate";
import SideBar from "@/components/SideBar";
import useGetFinancialData from "@/hooks/useGetFinancialData";
import Rocket from "@/components/Rocket";

export default function BalanceSheetPage({ token, userId, username }) {
  console.log(token);
  console.log(userId);
  console.log(username);
  const [selectedDate, setSelectedDate] = React.useState(dayjs());
  const [prevDate, setPrevDate] = React.useState(dayjs().subtract(1, "month"));
  const [prevFinancialData, setPrevFinancialData] = React.useState(null);
  const [currFinancialData, setCurrFinancialData] = React.useState(null);
  const isPrevLoading = useGetFinancialData({
    setData: setPrevFinancialData,
    date: prevDate,
    token,
  });
  const isLoading = useGetFinancialData({
    setData: setCurrFinancialData,
    date: selectedDate,
    token,
  });

  const dataSet = [
    {
      name: "資產",
      subtitle: "Assets",
      subject_id: 1000,
      value: prevFinancialData?.[0]?.amount,
      lastMonthValue: currFinancialData?.[0]?.amount,
      children: [
        {
          name: "流動資產",
          subtitle: "Current Assets",
          subject_id: 1100,
          value: `${prevFinancialData?.[0].subjects[0].amount}`,
          lastMonthValue: `${currFinancialData?.[0].subjects[0].amount}`,
          children: [
            {
              name: "現金",
              subtitle: "Cash",
              subject_id: 1101,
              value: `${prevFinancialData?.[0].subjects[0].subjects[0].amount}`,
              lastMonthValue: `${currFinancialData?.[0].subjects[0].subjects[0].amount}`,
            },
            {
              name: "股票",
              subtitle: "Stock",
              subject_id: 1102,
              value: `${prevFinancialData?.[0].subjects[0].subjects[1].amount}`,
              lastMonthValue: `${currFinancialData?.[0].subjects[0].subjects[1].amount}`,
            },
            {
              name: "應收帳款",
              subject_id: 1103,
              subtitle: "Accounts receivable",
              value: `${prevFinancialData?.[0].subjects[0].subjects[2].amount}`,
              lastMonthValue: `${currFinancialData?.[0].subjects[0].subjects[2].amount}`,
            },
            {
              name: "其他",
              subtitle: "Others",
              subject_id: 1104,
              value: `${prevFinancialData?.[0].subjects[0].subjects[3].amount}`,
              lastMonthValue: `${currFinancialData?.[0].subjects[0].subjects[3].amount}`,
            },
          ],
        },
        {
          name: "非流動資產",
          subtitle: "Non-Current Assets",
          subject_id: 1200,
          value: `${prevFinancialData?.[0].subjects[1].amount}`,
          lastMonthValue: `${currFinancialData?.[0].subjects[1].amount}`,
          children: [
            {
              name: "車子",
              subtitle: "Cars",
              subject_id: 1201,
              value: `${prevFinancialData?.[0].subjects[1].subjects[0].amount}`,
              lastMonthValue: `${currFinancialData?.[0].subjects[1].subjects[0].amount}`,
            },
            {
              name: "房子",
              subtitle: "Houses",
              subject_id: 1202,
              value: `${prevFinancialData?.[0].subjects[1].subjects[1].amount}`,
              lastMonthValue: `${currFinancialData?.[0].subjects[1].subjects[1].amount}`,
            },
            {
              name: "電子設備",
              subtitle: "3C",
              subject_id: 1203,
              value: `${prevFinancialData?.[0].subjects[1].subjects[2].amount}`,
              lastMonthValue: `${currFinancialData?.[0].subjects[1].subjects[2].amount}`,
            },
            {
              name: "家電",
              subtitle: "Home Appliances",
              subject_id: 1204,
              value: `${prevFinancialData?.[0].subjects[1].subjects[3].amount}`,
              lastMonthValue: `${currFinancialData?.[0].subjects[1].subjects[3].amount}`,
            },
            {
              name: "預付款",
              subject_id: 1205,
              subtitle: "Prepayments",
              value: `${prevFinancialData?.[0].subjects[1].subjects[4].amount}`,
              lastMonthValue: `${currFinancialData?.[0].subjects[1].subjects[4].amount}`,
            },
            {
              name: "其他",
              subtitle: "Others",
              subject_id: 1206,
              value: `${prevFinancialData?.[0].subjects[1].subjects[5].amount}`,
              lastMonthValue: `${currFinancialData?.[0].subjects[1].subjects[5].amount}`,
            },
          ],
        },
      ],
    },
    {
      name: "負債",
      subtitle: "Liabilities",
      subject_id: 2000,
      value: -1 * Number(prevFinancialData?.[1]?.amount),
      lastMonthValue: -1 * Number(currFinancialData?.[1]?.amount),
      children: [
        {
          name: "流動負債",
          subtitle: "Current Liabilities",
          subject_id: 2100,
          value: -1 * Number(prevFinancialData?.[1].subjects[0].amount),
          lastMonthValue:
            -1 * Number(currFinancialData?.[1].subjects[0].amount),
          children: [
            {
              name: "信用卡費",
              subtitle: "Credit Card",
              subject_id: 2101,
              value:
                -1 *
                Number(prevFinancialData?.[1].subjects[0].subjects[0].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[1].subjects[0].subjects[0].amount),
            },
            {
              name: "應付帳款",
              subtitle: "Accounts Payable",
              subject_id: 2102,
              value:
                -1 *
                Number(prevFinancialData?.[1].subjects[0].subjects[1].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[1].subjects[0].subjects[1].amount),
            },
            {
              name: "其他",
              subtitle: "Others",
              subject_id: 2103,
              value:
                -1 *
                Number(prevFinancialData?.[1].subjects[0].subjects[2].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[1].subjects[0].subjects[2].amount),
            },
          ],
        },
        {
          name: "非流動負債",
          subtitle: "Non-Current Liabilities",
          subject_id: 2200,
          value: -1 * Number(prevFinancialData?.[1].subjects[1].amount),
          lastMonthValue:
            -1 * Number(currFinancialData?.[1].subjects[1].amount),
          children: [
            {
              name: "分期付款",
              subtitle: "Installment",
              subject_id: 2201,
              value:
                -1 *
                Number(prevFinancialData?.[1].subjects[1].subjects[0].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[1].subjects[1].subjects[0].amount),
            },
            {
              name: "車貸",
              subtitle: "Car Loan",
              subject_id: 2202,
              value:
                -1 *
                Number(prevFinancialData?.[1].subjects[1].subjects[1].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[1].subjects[1].subjects[1].amount),
            },
            {
              name: "房貸",
              subtitle: "Mortgage",
              subject_id: 2203,
              value:
                -1 *
                Number(prevFinancialData?.[1].subjects[1].subjects[2].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[1].subjects[1].subjects[2].amount),
            },
            {
              name: "其他",
              subtitle: "Others",
              subject_id: 2204,
              value:
                -1 *
                Number(prevFinancialData?.[1].subjects[1].subjects[3].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[1].subjects[1].subjects[3].amount),
            },
          ],
        },
      ],
    },
    {
      name: "權益",
      subtitle: "Equity",
      subject_id: 3000,
      value: -1 * Number(prevFinancialData?.[2]?.amount),
      lastMonthValue: -1 * Number(currFinancialData?.[2]?.amount),
      children: [
        {
          name: "保留盈餘",
          subtitle: "Retained Earnings",
          subject_id: 3100,
          value: -1 * Number(prevFinancialData?.[2].subjects[0].amount),
          lastMonthValue:
            -1 * Number(currFinancialData?.[2].subjects[0].amount),
        },
        {
          name: "當期盈餘",
          subtitle: "Current Earnings",
          subject_id: 3200,
          value: -1 * Number(prevFinancialData?.[2].subjects[1].amount),
          lastMonthValue:
            -1 * Number(currFinancialData?.[2].subjects[1].amount),
        },
      ],
    },
  ];
  return (
    <CardTemplate
      backgroundStyle={{
        background: "#0f0f15",
        zIndex: "-1",
      }}
      style={{
        display: "flex",
        // background: "linear-gradient(to bottom right, #fff, #acb5c2)",
        background: "#0f0f15",
        boxShadow: "0 0 40px rgba(255, 255, 255, 1)",
        border: "none",
        zIndex: "0",
      }}
    >
      <SideBar token={token} shadow />
      <Rocket />
      <Rocket />
      <Rocket />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <span>
          <MonthPicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setPrevDate={setPrevDate}
          />
        </span>

        <Sheet
          data={dataSet}
          isPrevLoading={isPrevLoading}
          isLoading={isLoading}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10vw",
          zIndex: -1,
        }}
      >
        <Image src="/typing.gif" width={300} height={300} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "75%",
          // width: "100%",
          // height: "100%",
          zIndex: -1,
        }}
      >
        <Image src="/ufo.gif" width={200} height={200} />
      </div>
      <Rocket />
      <Rocket />
      <Rocket />
    </CardTemplate>
  );
}

export const getServerSideProps = ({ req, res }) => {
  const cookies = new Cookies(req, res);
  const token = cookies.get("token");
  const userId = cookies.get("id");
  const username = cookies.get("username") || null;

  if (!token) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      token,
      userId,
      username,
    },
  };
};
