import { Handjet, DotGothic16 } from "next/font/google";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SubjectDetail from "@/components/SubjectDetial";
// import DatePicker from "@/components/DatePicker";
import DateRangePickerValue from "@/components/DatePicker";
import CardTemplate from "@/components/cardTemplate/CardTemplate";
import SideBar from "@/components/SideBar";
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
export default function DetailPage() {
  return (
    <CardTemplate style={{ display: "flex", gap: "10vw" }}>
      <SideBar />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.title_calender}>
            <div className={styles.titles}>
              <p className={`${dot.className} ${styles.title}`}>現金</p>
              <p className={`${handjet.className} ${styles.subtitle}`}>cash</p>
            </div>
            <div className={styles.calender}>
              <DateRangePickerValue />
            </div>
          </div>
          <SubjectDetail />
        </div>
      </div>
    </CardTemplate>
  );
}
