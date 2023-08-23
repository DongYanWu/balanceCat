import Image from "next/image";
import styles from "../styles/userLoading.module.scss";
import Sun from "./Sun";

function Userloading() {
  return (
    <div className={styles.loadingContainer}>
      <Sun />
      <Image src="/userloading.gif" alt="Loading..." width={700} height={500} />
    </div>
  );
}

export default Userloading;
