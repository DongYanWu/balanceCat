import { Handjet, DotGothic16 } from "next/font/google";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import NavBar from "@/components/NavBar";
import SubjectDetail from "@/components/SubjectDetial";
import styles from "./detail.module.scss";

const dot = DotGothic16({
  weight: "400",
  subsets: ["cyrillic"],
});
const handjet = Handjet({
  weight: "400",
  subsets: ["latin"],
});
export default function DetailPage() {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <p className={`${dot.className} ${styles.title}`}>現金</p>
      <p className={`${handjet.className} ${styles.subtitle}`}>cash</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          // label={'"year", "month" and "day"'}
          views={["year", "month", "day"]}
          sx={{ backgroundColor: "#36364e", borderRadius: "10px" }}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          // label={'"year", "month" and "day"'}
          views={["year", "month", "day"]}
          sx={{
            backgroundColor: "#36364e",
            borderRadius: "10px",
            color: "white",
          }}
        />
      </LocalizationProvider>

      <SubjectDetail />
    </div>
  );
}
