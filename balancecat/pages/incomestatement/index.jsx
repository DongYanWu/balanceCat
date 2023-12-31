import Cookies from "cookies";
import * as React from "react";
import dayjs from "dayjs";
import Sheet from "@/components/Sheet";
import SideBar from "@/components/SideBar";
import CardTemplate from "@/components/cardTemplate/CardTemplate";
import MonthPicker from "@/components/MonthPicker";
import useGetIncomeData from "@/hooks/useGetIncomeData";
import Image from "next/image";
import Rocket from "@/components/Rocket";

// eslint-disable-next-line no-unused-vars
export default function BalanceSheetPage({ token, userId, username }) {
  const [selectedDate, setSelectedDate] = React.useState(dayjs());
  const [prevDate, setPrevDate] = React.useState(dayjs().subtract(1, "month"));
  const [prevFinancialData, setPrevFinancialData] = React.useState(null);
  const [currFinancialData, setCurrFinancialData] = React.useState(null);
  const isLoading = useGetIncomeData({
    setData: setPrevFinancialData,
    date: prevDate,
    token,
  });
  const isPrevLoading = useGetIncomeData({
    setData: setCurrFinancialData,
    date: selectedDate,
    token,
  });

  const dataSet = [
    {
      name: "收入",
      subtitle: "Income",
      subject_id: 4000,
      value: -1 * Number(prevFinancialData?.[0]?.amount),
      lastMonthValue: -1 * Number(currFinancialData?.[0]?.amount),
      children: [
        {
          name: "經常性收入",
          subtitle: "Regular Income",
          subject_id: 4100,
          value: -1 * Number(prevFinancialData?.[0]?.subjects[0].amount),
          lastMonthValue:
            -1 * Number(currFinancialData?.[0]?.subjects[0].amount),
          children: [
            {
              name: "薪資收入",
              subtitle: "Salary",
              subject_id: 4101,
              value:
                -1 *
                Number(prevFinancialData?.[0]?.subjects[0].subjects[0].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[0]?.subjects[0].subjects[0].amount),
            },
            {
              name: "利息收入",
              subtitle: "Interest Income",
              subject_id: 4102,
              value:
                -1 *
                Number(prevFinancialData?.[0]?.subjects[0].subjects[1].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[0]?.subjects[0].subjects[1].amount),
            },
            {
              name: "其他",
              subtitle: "Others",
              subject_id: 4103,
              value:
                -1 *
                Number(prevFinancialData?.[0]?.subjects[0].subjects[2].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[0]?.subjects[0].subjects[2].amount),
            },
          ],
        },
        {
          name: "非經常性收入",
          subtitle: "Irregular Income",
          subject_id: 4200,
          value: -1 * Number(prevFinancialData?.[0]?.subjects[1].amount),
          lastMonthValue:
            -1 * Number(currFinancialData?.[0]?.subjects[1].amount),
          children: [
            {
              name: "兼職收入",
              subtitle: "Part-time Income",
              subject_id: 4201,
              value:
                -1 *
                Number(prevFinancialData?.[0]?.subjects[1].subjects[0].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[0]?.subjects[1].subjects[0].amount),
            },
            {
              name: "中獎",
              subtitle: "Prize Winnings",
              subject_id: 4202,
              value:
                -1 *
                Number(prevFinancialData?.[0]?.subjects[1].subjects[1].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[0]?.subjects[1].subjects[1].amount),
            },
            {
              name: "其他",
              subtitle: "Others",
              subject_id: 4203,
              value:
                -1 *
                Number(prevFinancialData?.[0]?.subjects[1].subjects[2].amount),
              lastMonthValue:
                -1 *
                Number(currFinancialData?.[0]?.subjects[1].subjects[2].amount),
            },
          ],
        },
      ],
    },
    {
      name: "支出",
      subtitle: "Expenses",
      subject_id: 5000,
      value: prevFinancialData?.[1]?.amount,
      lastMonthValue: currFinancialData?.[1]?.amount,
      children: [
        {
          name: "經常性支出",
          subtitle: "Fixed Expenses",
          subject_id: 5100,
          value: prevFinancialData?.[1]?.subjects[0].amount,
          lastMonthValue: currFinancialData?.[1]?.subjects[0].amount,
          children: [
            {
              name: "伙食支出",
              subtitle: "Food",
              subject_id: 5101,
              value: prevFinancialData?.[1]?.subjects[0].subjects[0].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[0].subjects[0].amount,
            },
            {
              name: "治裝支出",
              subtitle: "Clothing",
              subject_id: 5102,
              value: prevFinancialData?.[1]?.subjects[0].subjects[1].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[0].subjects[1].amount,
            },
            {
              name: "住房支出",
              subtitle: "Housing",
              subject_id: 5103,
              value: prevFinancialData?.[1]?.subjects[0].subjects[2].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[0].subjects[2].amount,
            },
            {
              name: "交通支出",
              subtitle: "Transporting",
              subject_id: 5104,
              value: prevFinancialData?.[1]?.subjects[0].subjects[3].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[0].subjects[3].amount,
            },
            {
              name: "教育支出",
              subtitle: "Education",
              subject_id: 5105,
              value: prevFinancialData?.[1]?.subjects[0].subjects[4].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[0].subjects[4].amount,
            },
            {
              name: "娛樂支出",
              subtitle: "Entertainment",
              subject_id: 5106,
              value: prevFinancialData?.[1]?.subjects[0].subjects[5].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[0].subjects[5].amount,
            },
            {
              name: "孝親費",
              subtitle: "Support Parents",
              subject_id: 5107,
              value: prevFinancialData?.[1]?.subjects[0].subjects[6].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[0].subjects[6].amount,
            },
            {
              name: "折舊費用",
              subtitle: "Depreciation",
              subject_id: 5108,
              value: prevFinancialData?.[1]?.subjects[0].subjects[7].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[0].subjects[7].amount,
            },
            {
              name: "其他",
              subtitle: "Others",
              subject_id: 5109,
              value: prevFinancialData?.[1]?.subjects[0].subjects[8].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[0].subjects[8].amount,
            },
          ],
        },
        {
          name: "非固定支出",
          subtitle: "Variable Expenses",
          subject_id: 5200,
          value: prevFinancialData?.[1]?.subjects[1].amount,
          lastMonthValue: currFinancialData?.[1]?.subjects[1].amount,
          children: [
            {
              name: "伙食支出",
              subtitle: "Food",
              subject_id: 5201,
              value: prevFinancialData?.[1]?.subjects[1].subjects[0].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[1].subjects[0].amount,
            },
            {
              name: "治裝支出",
              subtitle: "Clothing",
              subject_id: 5202,
              value: prevFinancialData?.[1]?.subjects[1].subjects[1].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[1].subjects[1].amount,
            },
            {
              name: "住房支出",
              subtitle: "Housing",
              subject_id: 5203,
              value: prevFinancialData?.[1]?.subjects[1].subjects[2].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[1].subjects[2].amount,
            },
            {
              name: "交通支出",
              subtitle: "Transporting",
              subject_id: 5204,
              value: prevFinancialData?.[1]?.subjects[1].subjects[3].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[1].subjects[3].amount,
            },
            {
              name: "教育支出",
              subtitle: "Education",
              subject_id: 5205,
              value: prevFinancialData?.[1]?.subjects[1].subjects[4].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[1].subjects[4].amount,
            },
            {
              name: "娛樂支出",
              subtitle: "Entertainment",
              subject_id: 5206,
              value: prevFinancialData?.[1]?.subjects[1].subjects[5].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[1].subjects[5].amount,
            },
            {
              name: "孝親費",
              subtitle: "Support Parents",
              subject_id: 5207,
              value: prevFinancialData?.[1]?.subjects[1].subjects[6].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[1].subjects[6].amount,
            },
            {
              name: "其他",
              subtitle: "Others",
              subject_id: 5208,
              value: prevFinancialData?.[1]?.subjects[1].subjects[7].amount,
              lastMonthValue:
                currFinancialData?.[1]?.subjects[1].subjects[7].amount,
            },
          ],
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
        boxShadow: "0 0 40px rgba(255, 255, 255, 1)",
        // background: "linear-gradient(to bottom right, #fff, #acb5c2)",
        background: "#0f0f15",
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
          isLoading={isLoading}
          isPrevLoading={isPrevLoading}
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
