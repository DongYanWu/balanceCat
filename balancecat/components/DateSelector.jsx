// import styles from "../styles/dateselector.module.scss";

// export default function DateSelector({ selectedDate, onDateChange }) {
//   return (
//     <div>
//       <input
//         type="date"
//         id="start"
//         name="trip-start"
//         value={selectedDate}
//         onChange={onDateChange}
//         className={styles.selector}
//       />
//     </div>
//   );
// }

import * as React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import dynamic from "next/dynamic";

const DemoContainer = dynamic(
  () =>
    import("@mui/x-date-pickers/internals/demo").then(
      (mod) => mod.DemoContainer,
    ),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

// const AdapterDayjs = dynamic(
//   () =>
//     import("@mui/x-date-pickers/AdapterDayjs").then((mod) => mod.AdapterDayjs),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   },
// );

// const LocalizationProvider = dynamic(
//   () =>
//     import("@mui/x-date-pickers/LocalizationProvider").then(
//       (mod) => mod.LocalizationProvider,
//     ),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   },
// );

// const DateTimePicker = dynamic(
//   () =>
//     import("@mui/x-date-pickers/DateTimePicker").then(
//       (mod) => mod.DateTimePicker,
//     ),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   },
// );

export default function DateSelector({ selectedDate, onDateChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          label="日期"
          onChange={onDateChange}
          value={selectedDate}
          sx={{
            width: "fit-content",
            ".MuiOutlinedInput-root": {
              borderRadius: "10px",
              // color: "white",
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
