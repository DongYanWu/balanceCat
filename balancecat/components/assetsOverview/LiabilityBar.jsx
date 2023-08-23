/* eslint-disable react/destructuring-assignment */
import { format } from "date-fns";
import styles from "@/styles/assetsOverview/assetsbar.module.scss";
import { Button } from "@mui/material";

export default function LiabilityBar({ liability }) {
  const formattedDate = format(new Date(liability.timestamp), "yyyy/MM/dd");
  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>{liability.subject.name}</p>
      <p>{formattedDate}</p>
      <p>$ {liability.initial_value * -1}</p>
      <p>$ {liability.book_value * -1}</p>
      <p>{(liability.initial_value - liability.book_value) * -1}</p>
      <Button type="submit">details</Button>
    </div>
  );
}
