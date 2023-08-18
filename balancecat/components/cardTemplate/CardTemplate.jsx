// components/CardTemplate.js
import styles from "./CardTemplate.module.scss";

function CardTemplate({ children, style }) {
  return (
    <div className={styles.container}>
      <div className={styles.card} style={style}>
        {children}
      </div>
    </div>
  );
}

export default CardTemplate;
