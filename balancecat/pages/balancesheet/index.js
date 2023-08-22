/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import Cookies from "cookies";
import useState, { useEffect } from "react";
import * as React from "react";
import MonthPicker from "@/components/MonthPicker";
import Sheet from "@/components/Sheet";
import dayjs from "dayjs";
// import NavBar from "@/components/NavBar";
import CardTemplate from "@/components/cardTemplate/CardTemplate";
import SideBar from "@/components/SideBar";
import useGetFinancialData from "@/hooks/useGetFinancialData";
import useSWR from "swr";
import FetchWithToken from "@/components/fetchWithToken";
import useSWRMutation from "swr/mutation";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// async function sendRequest(url, { arg }) {
//   return fetch(url, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${arg.token}`,
//     },
//   })
//     .then((response) => response)
//     .then((data) => [data, data.json()])

//     .catch((error) => {
//       // eslint-disable-next-line no-console
//       console.error("Error:", error);
//     });
// }

export default function BalanceSheetPage({ token, userId, username }) {
  console.log(token);
  console.log(userId);
  console.log(username);
  const [selectedDate, setSelectedDate] = React.useState(dayjs());
  const [prevDate, setPrevDate] = React.useState(dayjs().subtract(1, "month"));
  const [prevFinancialData, setPrevFinancialData] = React.useState(null);
  const [currFinancialData, setCurrFinancialData] = React.useState(null);
  useGetFinancialData({
    setData: setPrevFinancialData,
    date: prevDate,
    token,
  });
  useGetFinancialData({
    setData: setCurrFinancialData,
    date: selectedDate,
    token,
  });
  // const data = isPrevLoading || isSecloading;
  // if (!isPrevLoading || isSecloading) {
  //   return <div>hi</div>;
  // }
  // const { data, error, mutate } = useSWR(
  //   [`${API_URL}fs?${startDate.format("YYYY-MM")}-01`, token],
  //   ([url, token]) => FetchWithToken(url, token),
  // );
  // const { trigger, isMutating } = useSWRMutation(
  //   `${API_URL}fs?${startDate.format("YYYY-MM")}-01`,
  //   sendRequest,
  // );
  // useEffect(() => {
  //   trigger({ token }).then(async (data) => {
  //     console.log(data);
  //   });
  // }, [startDate]);
  // setStartDate(dayjs());
  // trigger({ token }).then(async (data) => {
  //   console.log(data);
  // });

  // // console.log(data);
  // const [startFinancialData, setStartFinancialData] = React.useState(
  //   data.data.subjects,
  // );
  // console.log(data.data.subjects);
  // const [endFinancialData, setEndFinancialData] = React.useState(null);
  // end financial data
  // const { dataEnd, errorEnd } = useSWR(
  //   `${API_URL}fs?month=${endDate.format("YYYY-MM")}-01`,
  //   (url) => fetcher(url, token),
  // );
  // if (dataEnd) {
  //   setEndFinancialData(dataEnd);
  //   console.log(endFinancialData);
  // } else if (errorEnd) console.log(errorEnd);
  // const { data, error } = useSWR(
  //   [`${API_URL}fs?${startDate.format("YYYY-MM")}-01`, token],
  //   ([url, token]) => FetchWithToken(url, token),
  // );
  // React.useEffect(() => {
  //   if (data) {
  //     setStartFinancialData(data.data.subjects);
  //     console.log(startFinancialData);
  //   } else {
  //     console.error("錯誤", error);
  //   }
  // }, [startDate]);

  // const refreshFriendData = () => {
  //   mutate([`${API_URL}/friends`, token]);
  // };
  // console.log(data);

  // const loading = !data && !error;

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
      value: `${prevFinancialData?.[1]?.amount}`,
      lastMonthValue: `${currFinancialData?.[1]?.amount}`,
      children: [
        {
          name: "流動負債",
          subtitle: "Current Liabilities",
          subject_id: 2100,
          value: `${prevFinancialData?.[1].subjects[0].amount}`,
          lastMonthValue: `${currFinancialData?.[1].subjects[0].amount}`,
          children: [
            {
              name: "信用卡費",
              subtitle: "Credit Card",
              subject_id: 2101,
              value: `${prevFinancialData?.[1].subjects[0].subjects[0].amount}`,
              lastMonthValue: `${currFinancialData?.[1].subjects[0].subjects[0].amount}`,
            },
            {
              name: "應付帳款",
              subtitle: "Accounts Payable",
              subject_id: 2102,
              value: `${prevFinancialData?.[1].subjects[0].subjects[1].amount}`,
              lastMonthValue: `${currFinancialData?.[1].subjects[0].subjects[1].amount}`,
            },
            {
              name: "其他",
              subtitle: "Others",
              subject_id: 2103,
              value: `${prevFinancialData?.[1].subjects[0].subjects[2].amount}`,
              lastMonthValue: `${currFinancialData?.[1].subjects[0].subjects[2].amount}`,
            },
          ],
        },
        {
          name: "非流動負債",
          subtitle: "Non-Current Liabilities",
          subject_id: 2200,
          value: `${prevFinancialData?.[1].subjects[1].amount}`,
          lastMonthValue: `${currFinancialData?.[1].subjects[1].amount}`,
          children: [
            {
              name: "分期付款",
              subtitle: "Installment",
              subject_id: 2201,
              value: `${prevFinancialData?.[1].subjects[1].subjects[0].amount}`,
              lastMonthValue: `${currFinancialData?.[1].subjects[1].subjects[0].amount}`,
            },
            {
              name: "車貸",
              subtitle: "Car Loan",
              subject_id: 2202,
              value: `${prevFinancialData?.[1].subjects[1].subjects[1].amount}`,
              lastMonthValue: `${currFinancialData?.[1].subjects[1].subjects[1].amount}`,
            },
            {
              name: "房貸",
              subtitle: "Mortgage",
              subject_id: 2203,
              value: `${prevFinancialData?.[1].subjects[1].subjects[2].amount}`,
              lastMonthValue: `${currFinancialData?.[1].subjects[1].subjects[2].amount}`,
            },
            {
              name: "其他",
              subtitle: "Others",
              subject_id: 2204,
              value: `${prevFinancialData?.[1].subjects[1].subjects[3].amount}`,
              lastMonthValue: `${currFinancialData?.[1].subjects[1].subjects[3].amount}`,
            },
          ],
        },
      ],
    },
    {
      name: "權益",
      subtitle: "Equity",
      subject_id: 3000,
      value: `${prevFinancialData?.[2]?.amount}`,
      lastMonthValue: `${currFinancialData?.[2]?.amount}`,
      children: [
        {
          name: "保留盈餘",
          subtitle: "Retained Earnings",
          subject_id: 3100,
          value: `${prevFinancialData?.[2].subjects[0].amount}`,
          lastMonthValue: `${currFinancialData?.[2].subjects[0].amount}`,
        },
        {
          name: "當期盈餘",
          subtitle: "Current Earnings",
          subject_id: 3200,
          value: `${prevFinancialData?.[2].subjects[1].amount}`,
          lastMonthValue: `${currFinancialData?.[2].subjects[1].amount}`,
        },
      ],
    },
  ];
  return (
    <CardTemplate
      backgroundStyle={{
        background: "linear-gradient(180deg, #0d0221 0%, #090630 100%)",
      }}
      style={{
        display: "flex",
        background: "linear-gradient(to bottom right, #fff, #acb5c2)",
        boxShadow: "0 0 40px rgba(255, 255, 255, 1)",
        border: "none",
      }}
    >
      <SideBar />
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

        <Sheet data={dataSet} />
      </div>
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
