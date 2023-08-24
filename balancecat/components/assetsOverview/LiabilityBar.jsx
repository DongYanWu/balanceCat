/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import { format } from "date-fns";
import * as React from "react";
import styles from "@/styles/assetsOverview/assetsbar.module.scss";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useSWRMutation from "swr/mutation";
import swal from "sweetalert";
import SheetSkeleton from "../SheetSkeleton";

export default function LiabilityBar({ liability, isMutating, token, ap }) {
  const formattedDate = format(new Date(liability.timestamp), "yyyy/MM/dd");
  const [openDialog, setOpenDialog] = React.useState(false);
  const [entryDetailData, setEntryDetailData] = React.useState(null);
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}entries/${liability?.entry_id}`;
  async function fetcher(url, { arg }) {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${arg.token}`,
      },
    })
      .then((response) => response)
      .then((data) => [data, data.json()])

      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error:", error);
      });
  }
  const { trigger } = useSWRMutation(API_URL, fetcher);
  const handleClose = async () => {
    setOpenDialog(false);
  };
  const handleDetailsClick = () => {
    setOpenDialog(true);
    trigger({ token }).then(async (data) => {
      const response = data[0];
      const responseData = await data[1];
      if (response.status === 200) {
        setEntryDetailData(responseData.data.entry);
      }
    });
  };

  async function deleteEntry(url, { arg }) {
    return fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${arg.token}`,
      },
    })
      .then((response) => response)

      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error:", error);
      });
  }
  const { trigger: triggerDelete } = useSWRMutation(API_URL, deleteEntry);
  const handleClickDelete = () => {
    triggerDelete({ token }).then(async (response) => {
      if (response.status === 200) {
        swal("Success", `成功刪除分錄`, "success").then(() => {
          window.location.reload();
        });
      } else {
        swal("Error", `刪除分錄失敗`, "error");
      }
    });
  };
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
        <p>$ {(liability.initial_value * -1).toLocaleString()}</p>
      )}
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p>$ {(liability.book_value * -1).toLocaleString()}</p>
      )}
      {isMutating ? (
        <SheetSkeleton width={128} height={15} />
      ) : (
        <p>
          ${" "}
          {liability.initial_value - liability.book_value === 0
            ? "0"
            : (
                (liability.initial_value - liability.book_value) *
                -1
              ).toLocaleString()}
        </p>
      )}
      <Button type="submit" onClick={handleDetailsClick}>
        details
      </Button>
      <Dialog open={openDialog} onClose={handleClose}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DialogTitle>詳細資訊</DialogTitle>
          <Button
            variant="contained"
            sx={{ cursor: "pointer", margin: "1rem 1rem 0 0" }}
            onClick={handleClickDelete}
          >
            刪除分錄
          </Button>
        </div>
        <DialogContent sx={{ paddingTop: "0" }}>
          <div>
            <p>購買日期： {formattedDate}</p>
            <p>
              初始金額： $ {(-1 * liability.initial_value).toLocaleString()}
            </p>

            {ap ? (
              <p>剩於負債： $ {(-1 * liability.book_value).toLocaleString()}</p>
            ) : (
              <p>剩於欠款： $ {(-1 * liability.book_value).toLocaleString()}</p>
            )}
            <p>
              累計還款： ${" "}
              {liability.initial_value - liability.book_value === 0
                ? "0"
                : (
                    -1 *
                    (liability.initial_value - liability.book_value)
                  ).toLocaleString()}
            </p>

            {entryDetailData?.details?.[0]?.description && (
              <p>註解： {entryDetailData?.details?.[0]?.description}</p>
            )}

            {entryDetailData?.details ? (
              entryDetailData?.details.some((detail) => detail.amount > 0) && (
                <p>
                  借方：{" "}
                  {entryDetailData.details.map((detail, index) => (
                    <span key={index}>
                      {detail.amount > 0 &&
                        `${
                          detail.subject.name
                        } (金額：$ ${detail.amount.toLocaleString()})`}
                    </span>
                  ))}
                </p>
              )
            ) : (
              <div style={{ display: "flex", margin: "10px 0px" }}>
                <SheetSkeleton width={40} height={30} />:
                <SheetSkeleton width={160} height={30} />
              </div>
            )}
            {entryDetailData?.details ? (
              entryDetailData?.details.some((detail) => detail.amount < 0) && (
                <p>
                  貸方：{" "}
                  {entryDetailData.details.map((detail, index) => (
                    <span key={index}>
                      {detail.amount < 0 &&
                        `${detail.subject.name} (金額：$ ${(
                          -1 * detail.amount
                        ).toLocaleString()})`}
                    </span>
                  ))}
                </p>
              )
            ) : (
              <div style={{ display: "flex" }}>
                <SheetSkeleton width={40} height={30} />:
                <SheetSkeleton width={160} height={30} />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
