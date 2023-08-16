import Image from "next/image";
import { Tilt_Warp } from "next/font/google";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import AssetsOverview from "@/components/assetsOverview/AssetsOverview";
import Entries from "@/components/entriesForm/Entries";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/home.module.scss";

const tilt = Tilt_Warp({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <div className={styles.box}>
        <div className={styles.title_entries}>
          <p className={`${tilt.className} ${styles.title}`}>You always</p>
          <p className={`${tilt.className} ${styles.title}`}>are winner</p>
          <Entries />
        </div>
        <div className={styles.cat_coin}>
          <Image src="/bigCat.png" width={340} height={313} alt="cat" />
          <div className={styles.imageContainer}>
            <Image
              id={styles.coin1}
              src="/coin1.png"
              width={100}
              height={100}
              alt="coin"
            />
            <Image
              id={styles.coin2}
              src="/coin2.png"
              width={100}
              height={100}
              alt="coin"
            />
            <Image
              id={styles.coin3}
              src="/coin3.png"
              width={86}
              height={100}
              alt="coin"
            />
            <Image
              id={styles.coin4}
              src="/coin4.png"
              width={100}
              height={100}
              alt="coin"
            />
            <Image
              id={styles.coin5}
              src="/coin5.png"
              width={100}
              height={100}
              alt="coin"
            />
          </div>
        </div>
      </div>
      <br />
      <AssetsOverview />
      <FrequentlyAskedQuestions />
      <br />
      <Footer />
    </div>
  );
}
