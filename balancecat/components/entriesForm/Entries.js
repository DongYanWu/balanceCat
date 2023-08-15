import Button from "@mui/material/Button";
import React, { useState } from "react";
import AccountsBox from "./AccountsBox";
import DateSelector from "../DateSelector";
import styles from "../../styles/entries.module.scss";

export default function Entries() {
  const [debitBoxes, setDebitBoxes] = useState([]);

  function addNewDebitBox() {
    setDebitBoxes((prevBoxes) => [
      ...prevBoxes,
      <AccountsBox key={prevBoxes.length} isDebit />,
    ]);
  }
  return (
    <div className={styles.container}>
      <DateSelector />
      <div className={styles.accountboxs}>
        <AccountsBox isDebit addNewDebitBox={addNewDebitBox} />

        {debitBoxes}
        <AccountsBox />
      </div>
      <Button variant="contained">Add to Cart</Button>
    </div>
  );
}
