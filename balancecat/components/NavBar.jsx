import Image from "next/image";
import styles from "../styles/navbar.module.scss";

export default function NavBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBar}>
        <Image src="/cat.png" width={50} height={50} className={styles.image} />
        <button type="submit" className={styles.title}>
          Balance Cat
        </button>
        <button type="submit">個人頁面</button>
        <button type="submit">資產負債表</button>
        <button type="submit">綜合損益表</button>
        <button type="submit">Support</button>
      </div>
      <div className={styles.rightBar}>
        <button type="submit">Sign In</button>
        <button type="submit" className={styles.freeTrial}>
          Start free trial
        </button>
      </div>
    </div>
  );
}
