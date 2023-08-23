// import { Inter } from "next/font/google";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "../../styles/accountsbox.module.scss";
import SelectAccount from "./SelectAccount";
import SelectAdd from "./SelectAdd";
import SelectRegister from "./SelectRegister";

// import NumberInputBasic from "./NumberInput";

export default function AccountsBox({
  isDebit,
  addBox,
  onDataChanged,
  data,
  index,
  token,
  setParent_id,
}) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [subjectId, setSubjectId] = useState("1101");
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    let newData;
    if (id === "amount" && !isDebit) {
      newData = {
        ...data,
        subjectId,
        [id]: -1 * value,
      };
    } else {
      newData = {
        ...data,
        subjectId,
        [id]: value,
      };
    }

    console.log("newData", newData);
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

          {["1201", "1202", "1203", "1204", "1205", "1206"].includes(
            // eslint-disable-next-line prettier/prettier
            subjectId
          ) && (
            <TextField
              id="register"
              onChange={handleInputChange}
              label="折舊期數"
              variant="outlined"
              size="small" // Add this prop
              sx={{
                width: "30%",
                // height: "30px", // Adjust height as per your needs
                // backgroundColor: "#fff",

                backgroundColor: "#fafafa",
                "& label.Mui-focused": {
                  fontSize: "0.6rem",
                },
                "& label": {
                  fontSize: "0.6rem",
                },
                "& .MuiInputBase-input": {
                  fontSize: "0.6rem",
                },
                // "& .MuiOutlinedInput-root": {
                //   "& fieldset": {
                //     borderColor: "black",
                //   },
                //   "&:hover fieldset": {
                //     borderColor: "#fafafa",
                //   },
                //   "&.Mui-focused fieldset": {
                //     borderColor: "black",
                //   },
                // },
              }}
            />
          )}
          {["2201", "2202", "2203", "2204"].includes(subjectId) && (
            <TextField
              id="register"
              onChange={handleInputChange}
              label="分期期數"
              variant="outlined"
              size="small" // Add this prop
              sx={{
                width: "30%",
                // height: "30px", // Adjust height as per your needs
                // backgroundColor: "#fff",

                backgroundColor: "#fafafa",
                "& label.Mui-focused": {
                  fontSize: "0.6rem",
                },
                "& label": {
                  fontSize: "0.6rem",
                },
                "& .MuiInputBase-input": {
                  fontSize: "0.6rem",
                },
                // "& .MuiOutlinedInput-root": {
                //   "& fieldset": {
                //     borderColor: "black",
                //   },
                //   "&:hover fieldset": {
                //     borderColor: "#fafafa",
                //   },
                //   "&.Mui-focused fieldset": {
                //     borderColor: "black",
                //   },
                // },
              }}
            />
          )}
          {["1103"].includes(subjectId) && !isDebit && (
            <SelectRegister
              token={token}
              urlType="ar"
              handleInputChange={handleInputChange}
              setParent_id={setParent_id}
            />
          )}
          {["2102"].includes(subjectId) && isDebit && (
            <SelectRegister
              token={token}
              urlType="ap"
              handleInputChange={handleInputChange}
              setParent_id={setParent_id}
            />
          )}
        </div>
        <label htmlFor="amount" className={styles.amoutInput}>
          <input
            type="text"
            id="amount"
            // defaultValue={data.amoutInput || ""}
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
