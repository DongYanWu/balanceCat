import Image from "next/image";
import { Silkscreen } from "next/font/google";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import AssetsOverview from "@/components/assetsOverview/AssetsOverview";
import Entries from "@/components/entriesForm/Entries";
import Footer from "@/components/Footer";
import styles from "@/styles/home.module.scss";
import CardTemplate from "@/components/cardTemplate/CardTemplate";
import SideBar from "@/components/SideBar";

const silk = Silkscreen({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={styles.wrapper}>
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
        <div className={styles.box}>
          <div className={styles.title_entries}>
            <p className={`${silk.className} ${styles.title}`}>You always</p>
            <p className={`${silk.className} ${styles.title}`}>are winner</p>
            <Entries />
          </div>
        </div>
        <Image
          src="/astrocat.png"
          alt="cat pic"
          width={300}
          height={300}
          className={styles.cat}
          style={{
            borderRadius: "30%",
            // position: "absolute",
            // bottom: "20px",
            // left: "50%",
            transform: "translateX(-50%)",
            animation: "bounce 2s infinite",
          }}
        />
      </CardTemplate>
      <style>
        {`
          /* 定義彈跳動畫 */
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0); /* 初始和結束狀態為不移動 */
            }
            50% {
              transform: translateY(-20px); /* 中間狀態為向上移動 */
            }
          }
        `}
      </style>

      <CardTemplate
        backgroundStyle={{
          background: "linear-gradient(180deg, #0d0221 0%, #090630 100%)",
        }}
        style={{
          display: "flex",
          gap: "2rem",
          background: "linear-gradient(to bottom right, #fff, #acb5c2)",
          boxShadow: "0 0 40px rgba(255, 255, 255, 1)",
          border: "none",
        }}
      >
        <SideBar />
        <AssetsOverview />
      </CardTemplate>

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
        <div style={{ alignSelf: "center", width: "100%" }}>
          <FrequentlyAskedQuestions />
        </div>
      </CardTemplate>
      <Footer />
    </div>
  );
}
