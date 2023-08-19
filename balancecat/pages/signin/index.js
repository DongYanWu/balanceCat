import { useState } from "react";
import SignUp from "@/components/SignUp";
import CardTemplate from "@/components/cardTemplate/CardTemplate";
import styles from "@/styles/loginpage.module.scss";
import SignIn from "@/components/SignIn";

export default function LogInPage() {
  const [isLogIn, setIsLogIn] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const handleModeChange = () => {
    setOpacity(0);
    setTimeout(() => {
      setIsLogIn(!isLogIn);
      setOpacity(1);
    }, 300);
  };
  return (
    <CardTemplate
      style={{
        width: "70vw",
        background: "linear-gradient(to bottom right, #fff, #acb5c2)",
      }}
    >
      <div className={styles.wrapper} style={{ opacity }}>
        {isLogIn ? (
          <SignIn setIsLogIn={handleModeChange} />
        ) : (
          <SignUp setIsLogIn={handleModeChange} />
        )}
      </div>
    </CardTemplate>
  );
}
