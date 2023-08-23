/* eslint-disable react/destructuring-assignment */
import { format } from "date-fns";
import styles from "@/styles/assetsOverview/assetsbar.module.scss";
import { Button } from "@mui/material";
import SheetSkeleton from "../SheetSkeleton";
// test2
export default function AssetsBar({ asset, isMutating }) {
  const formattedDate = format(new Date(asset.timestamp), "yyyy/MM/dd");
  return (
    <div className={styles.wrapper}>
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p className={styles.name}>{asset.subject.name}</p>
      )}
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p>{formattedDate}</p>
      )}
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p>$ {asset.initial_value.toLocaleString()}</p>
      )}
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p>$ {asset.book_value.toLocaleString()}</p>
      )}
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p>$ {(asset.initial_value - asset.book_value).toLocaleString()}</p>
      )}
      <Button type="submit">details</Button>
    </div>
  );
}
