import useMediaQuery from "@mui/material/useMediaQuery";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import styles from "../../styles/BasicLineChart.module.scss";

const Button = dynamic(() => import("@mui/material/Button"), { ssr: false });
const Dialog = dynamic(() => import("@mui/material/Dialog"), { ssr: false });
const DialogActions = dynamic(() => import("@mui/material/DialogActions"), {
  ssr: false,
});
const DialogContent = dynamic(() => import("@mui/material/DialogContent"), {
  ssr: false,
});
const DialogContentText = dynamic(
  () => import("@mui/material/DialogContentText"),
  // eslint-disable-next-line prettier/prettier
  { ssr: false }
);
const DialogTitle = dynamic(() => import("@mui/material/DialogTitle"), {
  ssr: false,
});
const SettingsIcon = dynamic(() => import("@mui/icons-material/Settings"), {
  ssr: false,
});

const YearPicker = dynamic(() => import("../YearPicker"), { ssr: false });

const DynamicLineChart = dynamic(
  () => import("@mui/x-charts").then((mod) => mod.LineChart),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
    // eslint-disable-next-line prettier/prettier
  }
);

// ... rest of your code

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});
export default function BasicLineChart({
  hisData,
  name,
  total,
  wish,
  // eslint-disable-next-line no-unused-vars
  achievement,
  setStartYear,
  setEndYear,
  startYear,
  endYear,
}) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [isSetting, setIsSetting] = useState(false);
  const [tempStartYear, setTempStartYear] = useState(startYear);
  const [tempEndYear, setTempEndYear] = useState(endYear);

  // const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div className={styles.test}>
      {isSetting && (
        <Dialog
          fullScreen={fullScreen}
          open={isSetting}
          onClose={() => setIsSetting(false)}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">設定圖表年份</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ height: "100px" }}>
              <div className={styles.yearPicker}>
                <YearPicker
                  content="Start"
                  setYear={setTempStartYear}
                  year={tempStartYear}
                />
                <YearPicker
                  content="End"
                  setYear={setTempEndYear}
                  year={tempEndYear}
                />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => setIsSetting(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setStartYear(tempStartYear);
                setEndYear(tempEndYear);
                setIsSetting(false);
              }}
              autoFocus
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Button variant="outlined" onClick={handleClickOpen("paper")}>
        更多
      </Button>
      {/* <Button onClick={handleClickOpen("paper")}>scroll=paper</Button>
      <Button onClick={handleClickOpen("body")}>scroll=body</Button> */}
      <Dialog
        // sx={{
        //   zIndex: "0",
        // }}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <div className={styles.accountbar}>
            {name}
            <SettingsIcon onClick={() => setIsSetting(true)} />
          </div>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className={styles.infotext}>
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    boxShadow: 0,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 200,
                  }}
                >
                  <Box sx={{ color: "text.secondary" }}>目標金額</Box>
                  <Box
                    sx={{
                      color: "text.primary",
                      fontSize: 44,
                      fontWeight: "medium",
                    }}
                  >
                    {wish}
                    {/* {Math.round(wish / 1000)} K */}
                  </Box>
                  {/* <Box
                    sx={{
                      color: "success.dark",
                      display: "inline",
                      fontWeight: "bold",
                      mx: 0.5,
                      fontSize: 14,
                    }}
                  >
                    +18.77%
                  </Box> */}
                  {/* <Box
                    sx={{
                      color: "text.secondary",
                      display: "inline",
                      fontSize: 14,
                    }}
                  >
                    vs. last week
                  </Box> */}
                </Box>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    boxShadow: 0,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 200,
                  }}
                >
                  <Box sx={{ color: "text.secondary" }}>總額</Box>
                  <Box
                    sx={{
                      color: "text.primary",
                      fontSize: 44,
                      fontWeight: "medium",
                    }}
                  >
                    {total}
                    {/* {Math.round(total / 1000)} K */}
                  </Box>
                  {/* <Box
                    sx={{
                      color: "success.dark",
                      display: "inline",
                      fontWeight: "bold",
                      mx: 0.5,
                      fontSize: 14,
                    }}
                  >
                    +18.77%
                  </Box>
                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "inline",
                      fontSize: 14,
                    }}
                  >
                    vs. last week
                  </Box> */}
                </Box>
              </ThemeProvider>
            </div>
            <DynamicLineChart
              sx={{
                zIndex: "8000",
                "& .MuiPopper-root": {
                  zIndex: "10000 important",
                  backgroundColor: "red",
                },
                "& .MuiChartsTooltip-table": {
                  zIndex: "10000 important",
                  backgroundColor: "red",
                },
                "& .MuiLineElement-root": {
                  zIndex: "10000 important",
                  backgroundColor: "red",
                },

                "& .MuiPopper-root-MuiPopper-root": {
                  zIndex: "10000 important",
                  backgroundColor: "red",
                },
                "& .MuiPopper-root.MuiPopper-root": {
                  zIndex: "10000 important",
                  backgroundColor: "red",
                },
              }}
              className={styles.MuiChartsTooltip}
              xAxis={[
                {
                  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                  label: "月份",
                },
              ]}
              yAxis={[
                {
                  label: "10,000 (TWD)", // Hypothetical label property for y-axis
                },
              ]}
              series={hisData.map((item) => ({
                label: item.label,
                data: item.data.map((value) => Math.abs(value / 10000)),
              }))}
              width={500}
              height={300}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
