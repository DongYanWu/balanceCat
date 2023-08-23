import Image from "next/image";
import styles from "../styles/LoadingAnimation.module.scss";

function LoadingAnimation() {
  return (
    <div className={styles.loadingContainer}>
      <Image
        src="/rocketloading.gif"
        alt="Loading..."
        width={700}
        height={400}
      />
    </div>
  );
}

export default LoadingAnimation;
