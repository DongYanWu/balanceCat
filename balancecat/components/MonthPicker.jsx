import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function MonthPicker({
  selectedDate,
  setSelectedDate,
  setPrevDate,
}) {
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setPrevDate(dayjs(date).subtract(1, "month"));
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="選擇當期月份與年份"
        views={["month", "year"]}
        value={selectedDate}
        onChange={handleDateChange}
        sx={{
          ".MuiInputLabel-root": {
            color: "white",
          },
          ".MuiOutlinedInput-root": {
            borderRadius: "10px",
            color: "white",
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          ".MuiIconButton-root": {
            color: "white",
          }
        }}
      />
    </LocalizationProvider>
  );
}
