import { Button } from "@mui/material";
import styles from "@/styles/signup.module.scss";
import PwdInput from "./PwdInput";
import InputBox from "./InputBox";

export default function SignUp({ setIsLogIn }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_container}>
        <p className={styles.circle} />
        <p className={styles.title}>Balance Cat</p>
      </div>

      <p className={styles.free}>CONTINUE YOUT JOURNEY</p>
      <div className={styles.sentence}>
        <p className={styles.new}>Member Sign In</p>
        <p className={styles.period}>.</p>
      </div>
      <div className={styles.member_login}>
        <p className={styles.member}>Not A Member?</p>
        <p
          className={styles.login}
          onClick={() => {
            setIsLogIn(false);
          }}
          aria-hidden="true"
        >
          Sign Up
        </p>
      </div>
      <div className={styles.inputs}>
        <br />
        <InputBox email />
        <br />
        <PwdInput />
        <br />
        <Button
          variant="contained"
          sx={{
            fontWeight: "600",
            width: "20ch",
            backgroundColor: "#4481f4",
            borderRadius: "15px",
          }}
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
}
