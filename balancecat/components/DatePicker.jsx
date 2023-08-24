import * as React from "react";
import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function DateRangePickerValue({ setStartDate, setEndDate }) {
  const [value, setValue] = React.useState([
    dayjs().subtract(7, "day"),
    dayjs(),
  ]);
  const handleDateChange = (newValue) => {
    setValue(newValue);
    setStartDate(newValue[0]);
    setEndDate(newValue[1]);
  };
  console.log(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        value={value}
        onChange={handleDateChange}
        sx={{
          color: "white",
          ".MuiFormLabel-root": {
            color: "white",
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          ".MuiOutlinedInput-root": {
            borderRadius: "10px",
            color: "white",
          },
        }}
      />
    </LocalizationProvider>
  );
}
