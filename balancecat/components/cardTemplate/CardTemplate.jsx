// components/CardTemplate.js
import styles from "./CardTemplate.module.scss";

function CardTemplate({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>{children}</div>
    </div>
  );
}

export default CardTemplate;
