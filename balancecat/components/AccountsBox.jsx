import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import styles from "../styles/accountsbox.module.scss";
import SelectAccount from "./SelectAccount";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function AccountsBox() {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.accountSelectBox}>
          <div className={styles.icon}>
            <p>$</p>
          </div>
          {/* <p className={inter.className}>應收帳款</p>
          <Image
            src="/vector.png"
            onClick={() => setIsSelecting(!isSelecting)}
            height={12}
            width={12}
            style={{ cursor: "pointer" }}
          /> */}
          <SelectAccount />
        </div>
        <label htmlFor="amoutInput" className={styles.amoutInput}>
          <input type="text" id="amoutInput" />
        </label>

        <label
          htmlFor="descriptionInput"
          className={styles.amoutInput}
          style={{ display: isDescriptionVisible ? "block" : "none" }}
        >
          <p>註解</p>
          <input
            type="text"
            id="descriptionInput"
            className={styles.descriptionInput}
          />
        </label>
        <div
          className={styles.circle}
          role="button"
          aria-label="add the input box"
          tabIndex={0}
          onClick={() => setDescriptionVisible(!isDescriptionVisible)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              setDescriptionVisible(!isDescriptionVisible);
            }
          }}
          style={{
            backgroundImage: isDescriptionVisible
              ? "url('/minus.png')"
              : "url('/add.png')",
          }}
        />
      </div>
    </div>
  );
}
