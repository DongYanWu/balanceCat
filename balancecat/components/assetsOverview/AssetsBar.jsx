/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import { format } from "date-fns";
import styles from "@/styles/assetsOverview/assetsbar.module.scss";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useSWRMutation from "swr/mutation";
import swal from "sweetalert";
import SheetSkeleton from "../SheetSkeleton";
// test2
export default function AssetsBar({ asset, isMutating, token, ar }) {
  const formattedDate = format(new Date(asset.timestamp), "yyyy/MM/dd");
  const [openDialog, setOpenDialog] = React.useState(false);
  const [entryDetailData, setEntryDetailData] = React.useState(null);
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}entries/${asset?.entry_id}`;
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
            {ar ? (
              <p>初始金額： $ {asset.initial_value.toLocaleString()}</p>
            ) : (
              <p>購買金額： $ {asset.initial_value.toLocaleString()}</p>
            )}

            {ar ? (
              <p>未收取欠款： $ {asset.book_value.toLocaleString()}</p>
            ) : (
              <p>物品現值： $ {asset.book_value.toLocaleString()}</p>
            )}
            {ar ? (
              <p>
                已收取欠款金額 ${" "}
                {(asset.initial_value - asset.book_value).toLocaleString()}
              </p>
            ) : (
              <p>
                累計折舊： ${" "}
                {(asset.initial_value - asset.book_value).toLocaleString()}
              </p>
            )}
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
