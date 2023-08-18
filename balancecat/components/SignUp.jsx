import { Button } from "@mui/material";
import styles from "@/styles/signup.module.scss";
import PwdInput from "./PwdInput";
import InputBox from "./InputBox";

export default function SignUp() {
  return (
    <div className={styles.wrapper}>
      <p>Start for free</p>
      <p>Create a new account.</p>
      <div className={styles.member_login}>
        <p className={styles.member}>Already a member?</p>
        <p className={styles.login}>Log in</p>
      </div>
      <div className={styles.inputs}>
        <InputBox email />
        <InputBox username />
        <PwdInput />
        <PwdInput confirm />
        <Button variant="contained">註冊帳號</Button>
      </div>
    </div>
  );
}
