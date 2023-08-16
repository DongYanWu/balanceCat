import * as React from "react";
import dayjs from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";

dayjs.extend(isBetweenPlugin);

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  }),
  ...(isLastDay && {
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  }),
}));

function Day(props) {
  const { day, startDate, endDate, ...other } = props;

  if (!startDate || !endDate) {
    return <PickersDay day={day} {...other} />;
  }

  const dayIsBetween = day.isBetween(startDate, endDate, null, "[]");
  const isFirstDay = day.isSame(startDate, "day");
  const isLastDay = day.isSame(endDate, "day");

  return (
    <CustomPickersDay
      {...other}
      day={day}
      sx={dayIsBetween ? { px: 2.5, mx: 0 } : {}}
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
    />
  );
}

export default function Test() {
  const [dateRange, setDateRange] = React.useState([null, null]);

  const handleDateChange = (date) => {
    if (!dateRange[0]) {
      setDateRange([date, null]);
    } else if (!dateRange[1]) {
      setDateRange([dateRange[0], date]);
    } else {
      setDateRange([date, null]);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={dateRange[1] || dateRange[0]}
        onChange={handleDateChange}
        slots={{ day: Day }}
        slotProps={{
          day: {
            startDate: dateRange[0],
            endDate: dateRange[1],
          },
        }}
      />
    </LocalizationProvider>
  );
}
