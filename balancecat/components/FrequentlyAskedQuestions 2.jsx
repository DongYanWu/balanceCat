import Image from "next/image";
import styles from "../styles/frequentlyaskedquestions.module.scss";

export default function FrequentlyAskedQuestions() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>常見問題一覽</p>
      <div className={styles.blueBox}>
        <div className={styles.bar}>
          <p>關於</p>
          <Image src="/vector.png" height={16} width={16} />
        </div>
        <hr />
        <p>
          這是一個用會計學的方式來記帳的網站，我們的目標是
          採「應計基礎」來衡量損益依照權利或責任發生與否來決定收入與費用的歸屬期間
        </p>
        <div className={styles.bar}>
          <p>什麼是應收帳款？</p>
          <Image src="/vector.png" height={16} width={16} />
        </div>
        <hr />
        <p>
          應收帳款是指公司出售商品或提供服務給客戶，但客戶還沒有支付相應款項的金額。簡單來說，它是公司等待從客戶那裡收取的錢，通常是由於商品銷售或服務提供而產生的。這個金額被視為公司的應收款項，因為客戶有義務在之後的一定時間內支付。
        </p>
        <div className={styles.bar}>
          <p>什麼是折舊？</p>
          <Image src="/vector.png" height={16} width={16} />
        </div>
        <hr />
        <p>
          折舊是一種會計上的概念，它用來表示長期資產（如設備、機器、車輛等）隨著時間的過去和使用而價值逐漸減少的情況。簡單地說，折舊是資產價值減少的方式，就像是物品因為長時間的使用而損耗或磨損。折舊費用的紀錄可以使財務報表更加準確地反映公司的資產價值，而不是只考慮初始成本。
        </p>
        <div className={styles.bar}>
          <p>什麼是資產負債表？</p>
          <Image src="/vector.png" height={16} width={16} />
        </div>
        <hr />
        <p>
          資產負債表是一份會計報表，它提供了一個關於一個人或公司財務狀況的快速概述。這份報表主要分為兩個主要部分：資產和負債。
        </p>
        <div className={styles.bar}>
          <p>什麼是綜合損益表？</p>
          <Image src="/vector.png" height={16} width={16} />
        </div>
        <hr />
        <p>
          綜合損益表是一份會計報表，它顯示了一家公司或一個人在一定時間內（通常是一年）的綜合收入和支出情況。
        </p>
      </div>
    </div>
  );
}
