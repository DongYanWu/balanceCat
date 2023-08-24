// import Image from "next/image";
import { useState, useEffect } from "react";
import Image from "next/image";
import LiabilityBar from "@/components/assetsOverview/LiabilityBar";
import styles from "@/styles/assetsOverview/overview.module.scss";
import useSWRMutation from "swr/mutation";
import swal from "sweetalert";
import { Button } from "@mui/material";
import AssetsBar from "./AssetsBar";

export default function AssetsOverview({ token }) {
  const [type, setType] = useState("assets");
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}registers?type=${type}`;
  const [registerData, setRegisterData] = useState(null);

  // useGetRegister({ setData: setAssetData, type: "assets", token });
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
  const { trigger, isMutating } = useSWRMutation(API_URL, fetcher);

  const handleButtonOnClick = async (clickedType) => {
    await setType(clickedType);
    trigger({ token }).then(async (data) => {
      const response = data[0];
      const responseData = await data[1];

      if (response.status === 403) {
        swal("Error", "Wrong Token", "error");
      }
      if (response.status === 400) {
        swal("Error", "Client Error Response", "error");
      }
      if (response.status === 500) {
        swal(
          "Error",
          "Something's wrong. Please try again later or notify our engineering team",
          "info",
        );
      }
      if (response.status === 200) {
        setRegisterData(responseData.data.registers);
      }
    });
  };
  useEffect(() => {
    handleButtonOnClick("assets"); // 這裡可以設定初始的 type
  }, []);
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>資產概況</p>
      <div className={styles.buttons}>
        <button
          disabled={isMutating}
          type="submit"
          className={type === "assets" && styles.blueButton}
          onClick={() => {
            handleButtonOnClick("assets");
          }}
        >
          資產
        </button>
        <button
          disabled={isMutating}
          type="submit"
          className={type === "liabilities" && styles.blueButton}
          onClick={() => {
            handleButtonOnClick("liabilities");
          }}
        >
          負債
        </button>
        <button
          disabled={isMutating}
          type="submit"
          className={type === "ar" && styles.blueButton}
          onClick={() => {
            handleButtonOnClick("ar");
          }}
        >
          應收
        </button>
        <button
          disabled={isMutating}
          type="submit"
          className={type === "ap" && styles.blueButton}
          onClick={() => {
            handleButtonOnClick("ap");
          }}
        >
          應付
        </button>
      </div>
      <hr />
      {type === "assets" && (
        <div className={styles.table}>
          <div className={styles.titleBar}>
            <p className={styles.name}>物品名稱</p>
            <p>購買日期</p>
            <p>購買金額</p>
            <p>物品現值</p>
            <p>累計折舊</p>
            <Button type="submit" id={styles.none}>
              details
            </Button>
          </div>
          <hr />
          {registerData?.map((asset) => (
            <div key={asset.id}>
              <AssetsBar asset={asset} isMutating={isMutating} token={token} />
              <hr />
            </div>
          ))}
          {(registerData?.length <= 5 || registerData === null) && (
            <div className={styles.catBar}>
              <Image
                src="/starcat.png"
                width={100}
                height={100}
                alt="cat"
                className={styles.cat}
              />
              <div className={styles.dialog}>
                <span className={styles.text}>
                  最近比較少記帳喵？要多多記帳喔喵嗚嗚嗚～
                </span>
                <Image
                  src="/Container.svg"
                  width={30}
                  height={30}
                  alt="dialog"
                  className={styles.leg}
                />
              </div>
            </div>
          )}
        </div>
      )}
      {type === "liabilities" && (
        <div className={styles.table}>
          <div className={styles.titleBar}>
            <p className={styles.name}>物品名稱</p>
            <p>購買日期</p>
            <p>初始金額</p>
            <p>剩於負債</p>
            <p>累計還款</p>
            <button type="submit" id={styles.none}>
              更多細節
            </button>
          </div>
          <hr />
          {registerData?.map((liability) => (
            <div key={liability.id}>
              <LiabilityBar
                liability={liability}
                isMutating={isMutating}
                token={token}
              />
              <hr />
            </div>
          ))}
          {(registerData?.length <= 5 || registerData === null) && (
            <div className={styles.catBar}>
              <Image
                src="/starcat.png"
                width={100}
                height={100}
                alt="cat"
                className={styles.cat}
              />
              <div className={styles.dialog}>
                <span className={styles.text}>
                  最近比較少記帳喵？要多多記帳喔喵嗚嗚嗚～
                </span>
                <Image
                  src="/Container.svg"
                  width={30}
                  height={30}
                  alt="dialog"
                  className={styles.leg}
                />
              </div>
            </div>
          )}
        </div>
      )}
      {type === "ar" && (
        <div className={styles.table}>
          <div className={styles.titleBar}>
            <p className={styles.name}>物品名稱</p>
            <p>購買日期</p>
            <p>初始金額</p>
            <p>未收取欠款</p>
            <p>已收取欠款金額</p>
            <button type="submit" id={styles.none}>
              更多細節
            </button>
          </div>
          <hr />
          {registerData?.map((asset) => (
            <div key={asset.id}>
              <AssetsBar
                asset={asset}
                isMutating={isMutating}
                token={token}
                ar
              />
              <hr />
            </div>
          ))}
          {(registerData?.map.length <= 5 || registerData === null) && (
            <div className={styles.catBar}>
              <Image
                src="/starcat.png"
                width={100}
                height={100}
                alt="cat"
                className={styles.cat}
              />
              <div className={styles.dialog}>
                <span className={styles.text}>
                  最近比較少記帳喵？要多多記帳喔喵嗚嗚嗚～
                </span>
                <Image
                  src="/Container.svg"
                  width={30}
                  height={30}
                  alt="dialog"
                  className={styles.leg}
                />
              </div>
            </div>
          )}
        </div>
      )}
      {type === "ap" && (
        <div className={styles.table}>
          <div className={styles.titleBar}>
            <p className={styles.name}>物品名稱</p>
            <p>購買日期</p>
            <p>初始金額</p>
            <p>剩於欠款</p>
            <p>累計還款</p>
            <Button type="submit" id={styles.none}>
              detials
            </Button>
          </div>
          <hr />
          {registerData?.map((liability) => (
            <div key={liability.id}>
              <LiabilityBar
                liability={liability}
                isMutating={isMutating}
                token={token}
                ap
              />
              <hr />
            </div>
          ))}
          {(registerData?.map.length <= 5 || registerData === null) && (
            <div className={styles.catBar}>
              <Image
                src="/starcat.png"
                width={100}
                height={100}
                alt="cat"
                className={styles.cat}
              />
              <div className={styles.dialog}>
                <span className={styles.text}>
                  最近比較少記帳喵？要多多記帳喔喵嗚嗚嗚～
                </span>
                <Image
                  src="/Container.svg"
                  width={30}
                  height={30}
                  alt="dialog"
                  className={styles.leg}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
