// import Button from "@mui/material/Button";
// import React, { useState } from "react";
// import AccountsBox from "./AccountsBox";
// import DateSelector from "../DateSelector";
// import styles from "../../styles/entries.module.scss";

// export default function Entries() {
//   const [debitBoxes, setDebitBoxes] = useState([]);
//   const [creditBoxes, setCreditBoxes] = useState([]);

//   const [debitData, setDebitData] = useState([]);
//   const [creditData, setCreditData] = useState([]);

//   const handleDataChange = (index, data, isDebit = true) => {
//     if (isDebit) {
//       const newDebitData = [...debitData];
//       newDebitData[index] = data;
//       setDebitData(newDebitData);
//     } else {
//       const newCreditData = [...creditData];
//       newCreditData[index] = data;
//       setCreditData(newCreditData);
//     }
//   };

//   const handleSubmit = () => {
//     console.log("Debit Data:", debitData);
//     console.log("Credit Data:", creditData);
//     // Here you can do whatever you want with the data
//   };

//   function addNewDebitBox() {
//     setDebitBoxes((prevBoxes, idx) => [
//       ...prevBoxes,
//       <AccountsBox
//         key={idx + 1}
//         isDebit
//         addBox={() => addNewDebitBox()}
//         onDataChanged={handleDataChange}
//         data={debitData[idx + 1] || {}}
//         index={idx + 1}
//       />,
//     ]);
//   }
//   function addNewCreditBox() {
//     setCreditBoxes((prevBoxes, idx) => [
//       ...prevBoxes,
//       <AccountsBox
//         key={idx + 1}
//         addBox={() => addNewCreditBox()}
//         onDataChanged={handleDataChange}
//         data={creditData[idx + 1] || {}}
//         index={idx + 1}
//       />,
//     ]);
//   }
//   return (
//     <div className={styles.container}>
//       <DateSelector />
//       <div className={styles.accountboxs}>
//         <div className={styles.debitboxs}>
//           <AccountsBox
//             isDebit
//             addBox={() => addNewDebitBox()}
//             onDataChanged={handleDataChange}
//             data={debitData[0] || {}}
//             index={0}
//           />

//           {debitBoxes}
//         </div>
//         <div className={styles.creditboxs}>
//           <AccountsBox
//             isDebit={false}
//             addBox={() => addNewCreditBox()}
//             onDataChanged={handleDataChange}
//             data={creditData[0] || {}}
//             index={0}
//           />
//           {creditBoxes}
//         </div>
//       </div>
//       <Button variant="contained" className={styles.btn} onClick={handleSubmit}>
//         提交
//       </Button>
//     </div>
//   );
// }

import Button from "@mui/material/Button";
import React, { useState } from "react";
import useSWRMutation from "swr/mutation";
import dayjs from "dayjs";
import AccountsBox from "./AccountsBox";
import DateSelector from "../DateSelector";
import styles from "../../styles/entries.module.scss";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function sendRequest(url, { arg }) {
  console.log(arg);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${arg.token}`,
    },
    body: JSON.stringify(arg.mergedData),
  })
    .then((response) => response)
    .then((data) => [data, data.json()])

    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error("Error:", error);
    });
}

const transformData = (data) =>
  data.map((entry) => ({
    subject_id: entry.subjectId,
    amount: parseInt(entry.amount, 10),
    register: null, // Add logic here if required for the 'register' field
    description: entry.description, // Add logic here if required for the 'description' field
  }));

export default function Entries({ token }) {
  // Use data arrays directly for debit and credit.
  const [debitData, setDebitData] = useState([{}]);
  const [creditData, setCreditData] = useState([{}]);
  const [selectedDate, setSelectedDate] = useState(
    // new Date().toISOString().split("T")[0],
    dayjs(),
  );

  // eslint-disable-next-line no-unused-vars
  const { trigger, isMutating } = useSWRMutation(
    `${API_URL}entries`,
    sendRequest,
  );

  const handleDateChange = (e) => {
    setSelectedDate(e.format("YYYY-MM-DD HH:mm:ss"));
    // console.log(e.format("YYYY-MM-DD HH:mm:ss"));
  };

  const handleDataChange = (index, data, isDebit = true) => {
    if (isDebit) {
      const newDebitData = [...debitData];
      newDebitData[index] = data;
      setDebitData(newDebitData);
    } else {
      const newCreditData = [...creditData];
      newCreditData[index] = data;
      setCreditData(newCreditData);
    }
  };

  const handleSubmit = () => {
    console.log("Debit Data:", debitData);
    console.log("Credit Data:", creditData);
    console.log(selectedDate);
    const mergedData = {
      details: [...transformData(debitData), ...transformData(creditData)],
      timestamp: selectedDate.format("YYYY-MM-DD HH:mm:ss"),
      parent_id: null,
    };

    trigger({ token, mergedData }).then(async (data) => console.log(data));
  };

  function addNewDebitBox() {
    setDebitData((prevData) => [...prevData, {}]);
  }

  function addNewCreditBox() {
    setCreditData((prevData) => [...prevData, {}]);
  }

  return (
    <div className={styles.container}>
      <DateSelector
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
      <div className={styles.accountboxs}>
        <div className={styles.debitboxs}>
          {debitData.map((data, idx) => (
            <AccountsBox
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              isDebit
              addBox={() => addNewDebitBox()}
              onDataChanged={handleDataChange}
              data={data}
              index={idx}
            />
          ))}
        </div>
        <div className={styles.creditboxs}>
          {creditData.map((data, idx) => (
            <AccountsBox
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              isDebit={false}
              addBox={() => addNewCreditBox()}
              onDataChanged={handleDataChange}
              data={data}
              index={idx}
            />
          ))}
        </div>
      </div>
      <Button variant="contained" className={styles.btn} onClick={handleSubmit}>
        提交
      </Button>
    </div>
  );
}
