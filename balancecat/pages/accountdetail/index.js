import { Handjet, DotGothic16 } from "next/font/google";
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
export default function BalanceSheetPage() {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <p className={`${dot.className} ${styles.title}`}>現金</p>
      <p className={`${handjet.className} ${styles.subtitle}`}>cash</p>
      <SubjectDetail />
    </div>
  );
}
