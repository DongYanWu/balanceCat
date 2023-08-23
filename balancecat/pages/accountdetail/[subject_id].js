import { Handjet, DotGothic16 } from "next/font/google";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Cookies from "cookies";
import { useRouter } from "next/router";
import { useState } from "react";
import dayjs from "dayjs";
import SubjectDetail from "@/components/SubjectDetial";
// import DatePicker from "@/components/DatePicker";
import DateRangePickerValue from "@/components/DatePicker";
import CardTemplate from "@/components/cardTemplate/CardTemplate";
import SideBar from "@/components/SideBar";
import useGetEntryHistory from "@/hooks/useGetEntryHistory";
import idNameConverter from "@/idNameConverter";
import Rocket from "@/components/Rocket";
import Image from "next/image";
import styles from "./detail.module.scss";

const dot = DotGothic16({
  weight: "400",
  // subsets: ["cyrillic"],
  subsets: ["latin"],
});
const handjet = Handjet({
  weight: "400",
  subsets: ["latin"],
});
export default function DetailPage({ token, userId, username }) {
  console.log(token);
  console.log(userId);
  console.log(username);
  const [entriesData, setEntriesData] = useState(null);
  const [endDate, setEndDate] = useState(dayjs());
  const [startDate, setStartDate] = useState(dayjs().subtract(7, "day"));
  const router = useRouter();
  const { subject_id } = router.query;
  useGetEntryHistory({
    setData: setEntriesData,
    startDate,
    endDate,
    token,
    subject_id,
  });
  const [subject_name, subject_name_en] = idNameConverter({ subject_id });
  return (
    <CardTemplate
      backgroundStyle={{
        background: "#0f0f15",
        zIndex: "-1",
      }}
      style={{
        display: "flex",
        // gap: "15%",
        background: "#0f0f15",
        // background: "linear-gradient(to bottom right, #fff, #acb5c2)",
        boxShadow: "0 0 40px rgb(255, 255, 255, 1)",
        border: "none",
        zIndex: "0",
      }}
    >
      <SideBar token={token} shadow />
      <Rocket />
      <Rocket />
      <Rocket />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.title_calender}>
            <div className={styles.titles}>
              <p className={`${dot.className} ${styles.title}`}>
                {`${subject_name}`}
              </p>
              <p
                className={`${handjet.className} ${styles.subtitle}`}
              >{`${subject_name_en}`}</p>
            </div>
            <div className={styles.calender}>
              <DateRangePickerValue
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </div>
          </div>
          <SubjectDetail entriesData={entriesData} token={token} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "15%",
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
