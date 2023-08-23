/* eslint-disable react/destructuring-assignment */
import { format } from "date-fns";
import styles from "@/styles/assetsOverview/assetsbar.module.scss";
import { Button } from "@mui/material";
import SheetSkeleton from "../SheetSkeleton";

export default function LiabilityBar({ liability, isMutating }) {
  const formattedDate = format(new Date(liability.timestamp), "yyyy/MM/dd");
  return (
    <div className={styles.wrapper}>
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p className={styles.name}>{liability.subject.name}</p>
      )}
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p>{formattedDate}</p>
      )}
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p>$ {liability.initial_value * -1}</p>
      )}
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p>$ {liability.book_value * -1}</p>
      )}
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p>{(liability.initial_value - liability.book_value) * -1}</p>
      )}
      <Button type="submit">details</Button>
    </div>
  );
}
