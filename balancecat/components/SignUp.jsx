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

      <p className={styles.free}>START FOR FREE</p>
      <div className={styles.sentence}>
        <p className={styles.new}>Create new account</p>
        <p className={styles.period}>.</p>
      </div>
      <div className={styles.member_login}>
        <p className={styles.member}>Already A Member?</p>
        <p
          className={styles.login}
          onClick={() => {
            setIsLogIn(true);
          }}
          aria-hidden="true"
        >
          Log In
        </p>
      </div>
      <div className={styles.inputs}>
        <InputBox email />
        <InputBox username />
        <PwdInput />
        <PwdInput confirm />
        <br />
        <Button
          variant="contained"
          sx={{
            width: "20ch",
            backgroundColor: "#4481f4",
            borderRadius: "15px",
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
