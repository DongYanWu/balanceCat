// import * as React from "react";
// import dayjs from "dayjs";
// import isBetweenPlugin from "dayjs/plugin/isBetween";
// import { styled } from "@mui/material/styles";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import { PickersDay } from "@mui/x-date-pickers/PickersDay";

// dayjs.extend(isBetweenPlugin);

// const CustomPickersDay = styled(PickersDay, {
//   shouldForwardProp: (prop) =>
//     prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
// })(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
//   ...(dayIsBetween && {
//     borderRadius: 0,
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     "&:hover, &:focus": {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   }),
//   ...(isFirstDay && {
//     borderTopLeftRadius: "50%",
//     borderBottomLeftRadius: "50%",
//   }),
//   ...(isLastDay && {
//     borderTopRightRadius: "50%",
//     borderBottomRightRadius: "50%",
//   }),
// }));

// function Day(props) {
//   const { day, startDate, endDate, ...other } = props;

//   if (!startDate || !endDate) {
//     // eslint-disable-next-line react/jsx-props-no-spreading
//     return <PickersDay day={day} {...other} />;
//   }

//   const dayIsBetween = day.isBetween(startDate, endDate, null, "[]");
//   const isFirstDay = day.isSame(startDate, "day");
//   const isLastDay = day.isSame(endDate, "day");

//   return (
//     <CustomPickersDay
//       // eslint-disable-next-line react/jsx-props-no-spreading
//       {...other}
//       day={day}
//       sx={dayIsBetween ? { px: 2.5, mx: 0 } : {}}
//       dayIsBetween={dayIsBetween}
//       isFirstDay={isFirstDay}
//       isLastDay={isLastDay}
//     />
//   );
// }

// export default function Test() {
//   const [dateRange, setDateRange] = React.useState([null, null]);

//   const handleDateChange = (date) => {
//     if (!dateRange[0]) {
//       setDateRange([date, null]);
//     } else if (!dateRange[1]) {
//       setDateRange([dateRange[0], date]);
//     } else {
//       setDateRange([date, null]);
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateCalendar
//         value={dateRange[1] || dateRange[0]}
//         onChange={handleDateChange}
//         slots={{ day: Day }}
//         slotProps={{
//           day: {
//             startDate: dateRange[0],
//             endDate: dateRange[1],
//           },
//         }}
//       />
//     </LocalizationProvider>
//   );
// }

import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import { ThemeProvider } from "@mui/joy/styles";
import BasicLineChart from "./BasicLineChart";

export default function CongratCard() {
  return (
    <ThemeProvider>
      <Card
        data-resizable
        sx={{
          textAlign: "center",
          alignItems: "center",
          width: 343,
          // to make the demo resizable
          // overflow: "auto",
          resize: "horizontal",
          "--icon-size": "100px",
        }}
      >
        <CardOverflow variant="solid" color="warning">
          <AspectRatio
            variant="outlined"
            color="warning"
            ratio="1"
            sx={{
              m: "auto",
              transform: "translateY(50%)",
              borderRadius: "50%",
              width: "var(--icon-size)",
              boxShadow: "sm",
              bgcolor: "background.surface",
              position: "relative",
            }}
          >
            <div>
              <BakeryDiningIcon color="warning" sx={{ fontSize: "4rem" }} />
            </div>
          </AspectRatio>
        </CardOverflow>
        <Typography level="title-lg" sx={{ mt: "calc(var(--icon-size) / 2)" }}>
          🎊 Congrats Julia 🎊
        </Typography>
        <CardContent sx={{ maxWidth: "40ch" }}>
          You just gain one Cookhat for Salad cooking. Share your achievement
          with your friends.
        </CardContent>
        <CardActions
          orientation="vertical"
          buttonFlex={1}
          sx={{
            "--Button-radius": "40px",
            width: "clamp(min(100%, 160px), 50%, min(100%, 200px))",
          }}
        />
      </Card>
    </ThemeProvider>
  );
}
