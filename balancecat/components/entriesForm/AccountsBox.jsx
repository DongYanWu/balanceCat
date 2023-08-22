// import { Inter } from "next/font/google";
import React, { useState } from "react";
import styles from "../../styles/accountsbox.module.scss";
import SelectAccount from "./SelectAccount";
import SelectAdd from "./SelectAdd";
// import NumberInputBasic from "./NumberInput";

export default function AccountsBox({
  isDebit,
  addBox,
  onDataChanged,
  data,
  index,
}) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [subjectId, setSubjectId] = useState("1101");
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const newData = {
      ...data,
      subjectId,
      [id]: value,
    };
    onDataChanged(index, newData, isDebit);
  };

  return (
    <div
      className={styles.container}
      style={{ background: isDebit ? "#7af98e" : "#CCE8FE" }}
    >
      <div className={styles.content}>
        <div className={styles.accountSelectBox}>
          <div className={styles.icon}>
            <p>$</p>
          </div>

          <SelectAccount setSubjectId={setSubjectId} subjectId={subjectId} />
        </div>
        <label htmlFor="amount" className={styles.amoutInput}>
          <input
            type="text"
            id="amount"
            defaultValue={data.amoutInput || ""}
            // value={data.amoutInput || ""}
            onChange={handleInputChange}
          />
        </label>

        <label
          htmlFor="description"
          className={styles.descriptionInput}
          style={{ display: isDescriptionVisible ? "block" : "none" }}
        >
          <p>註解</p>
          <textarea
            type="text"
            id="description"
            defaultValue={data.descriptionInput || ""}
            // value={data.descriptionInput || ""}
            onChange={handleInputChange}
          />
        </label>
        {/* <div
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
        /> */}
        <SelectAdd
          isDebit={isDebit}
          addBox={addBox}
          isDescriptionVisible={isDescriptionVisible}
          setDescriptionVisible={setDescriptionVisible}
        />
      </div>
    </div>
  );
}
