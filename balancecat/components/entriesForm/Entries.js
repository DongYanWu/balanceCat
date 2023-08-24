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
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";
import AccountsBox from "./AccountsBox";
import DateSelector from "../DateSelector";
import styles from "../../styles/entries.module.scss";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function sendRequest(url, { arg }) {
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

// const transformData = (data) =>
//   data.map((entry) => ({
//     subject_id: entry.subjectId,
//     amount: parseInt(entry.amount, 10),
//     register: entry.register
//       ? { id: null, expired_in: parseInt(entry.register, 10) }
//       : null,

//     description: entry.description, // Add logic here if required for the 'description' field
//   }));
const transformData = (data) =>
  data.map((entry) => {
    let registerValue;
    if (entry.dataSet) {
      registerValue = entry.dataSet;
    } else if (entry.register) {
      registerValue = { id: null, expired_in: parseInt(entry.register, 10) };
    } else {
      registerValue = null;
    }

    return {
      subject_id: entry.subjectId,
      amount: parseInt(entry.amount, 10),
      register: registerValue,
      description: entry.description,
    };
  });

export default function Entries({ token }) {
  // Use data arrays directly for debit and credit.
  const [debitData, setDebitData] = useState([{}]);
  const [creditData, setCreditData] = useState([{}]);
  const [selectedDate, setSelectedDate] = useState(
    // new Date().toISOString().split("T")[0],
    // eslint-disable-next-line prettier/prettier
    dayjs()
  );
  const [parent_id, setParent_id] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const { trigger, isMutating } = useSWRMutation(
    `${API_URL}entries`,
    // eslint-disable-next-line prettier/prettier
    sendRequest
  );

  const handleDateChange = (e) => {
    setSelectedDate(e);
    // console.log(e.format("YYYY-MM-DD HH:mm:ss"));
  };

  function sumAmount(dataArray) {
    console.log(dataArray);
    return dataArray.reduce((sum, entry) => sum + Number(entry.amount), 0);
  }

  function areDebitAndCreditEqual(data1, data2) {
    const debitSum = sumAmount(data1);
    const creditSum = sumAmount(data2);
    console.log(debitSum);
    console.log(creditSum);
    return debitSum === -1 * creditSum;
  }

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
    if (areDebitAndCreditEqual(debitData, creditData)) {
      const mergedData = {
        details: [...transformData(debitData), ...transformData(creditData)],
        timestamp: selectedDate.format("YYYY-MM-DD HH:mm:ss"),
        parent_id,
      };

      trigger({ token, mergedData }).then(async (data) => {
        const response = data[0];
        // const userData = await data[1]; //it would it you the user data(token user_id and provider which now is native)
        console.log(response.status);
        if (response.status === 403) {
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>;
        }
        if (response.status === 422) {
          Swal.fire({
            title: "同科目不能出現兩次",
            footer:
              '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">了解詳細規則</a>',
            width: 450,
            padding: "3em",
            // color: "#716add",
            // color: "rgba(0, 0, 0, 0.834)",
            confirmButtonText: "OK",
            // background: "#fff url(/userloading.gif)",
            backdrop: `
          rgba(0, 0, 0, 0.834)
            url("/mboom.gif")
            left 
            no-repeat
          `,
          }).then(() => {
            window.location.reload();
          });
        }
        if (response.status === 400) {
          Swal.fire({
            title: "指定沖銷超過原始金額",
            footer:
              '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">了解詳細規則</a>',
            width: 450,
            padding: "3em",
            // color: "#716add",
            // color: "rgba(0, 0, 0, 0.834)",
            confirmButtonText: "OK",
            background: "#fff url(/buttomloading.gif)",
            backdrop: `
          rgba(0, 0, 0, 0.834)
            url("/boom.gif")
            left 
            no-repeat
          `,
          }).then(() => {
            window.location.reload();
          });
        }
        if (response.status === 500) {
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>;
        }
        if (response.status === 200) {
          Swal.fire({
            title: "又邁進了成功的一步",
            width: 450,
            padding: "3em",
            // color: "#716add",
            // color: "rgba(0, 0, 0, 0.834)",
            confirmButtonText: "讚讚",
            // background: "#fff url(/cat.png)",
            backdrop: `
          rgba(0, 0, 0, 0.834)
            url("/dance.gif")
            left 
            no-repeat
          `,
          }).then(() => {
            window.location.reload();
          });
        }
      });
    } else {
      Swal.fire({
        title: "你沒有平衡= =",
        footer:
          '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Why do I have this issue?</a>',
        width: 450,
        padding: "3em",
        // color: "#716add",
        // color: "rgba(0, 0, 0, 0.834)",

        // background: "#fff url(/cat.png)",
        backdrop: `
      rgba(0, 0, 0, 0.834)
        url("/error.gif")
        left 
        no-repeat
      `,
      });
    }
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
              token={token}
              setParent_id={setParent_id}
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
              token={token}
              setParent_id={setParent_id}
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
