import * as React from "react";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import { ThemeProvider } from "@mui/joy/styles";
import Stack from "@mui/material/Stack";
import dynamic from "next/dynamic";
import { Box, createTheme } from "@mui/system";
import useSWR, { mutate as globalMutate } from "swr";
import useSWRMutation from "swr/mutation";
import styles from "../../styles/DataCard.module.scss";
import FetchWithToken from "../fetchWithToken";

const PieChart = dynamic(
  () => import("@mui/x-charts").then((mod) => mod.PieChart),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
    // eslint-disable-next-line prettier/prettier
  }
);

const pieArcClasses = dynamic(
  () => import("@mui/x-charts").then((mod) => mod.pieArcClasses),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
    // eslint-disable-next-line prettier/prettier
  }
);

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const theme = createTheme({
  palette: {
    background: {
      paper: "inherint",
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

export default function DataCard({ isDebitCard, color, token }) {
  let api;
  if (isDebitCard) {
    api = `${API_URL}stats/overall`;
  } else {
    api = `${API_URL}stats/expenses`;
  }
  const {
    data: userData,
    error,
    isLoading,
  } = useSWR([api, token], ([url, token]) => FetchWithToken(url, token));
  // const refreshFriendData = () => {
  //   mutate([`${API_URL}/frie`, token]);
  // };

  if (!isLoading) {
    console.log(userData?.data);
  }
  const data = [
    {
      label: userData?.data.charts[0].name,
      value: userData?.data.charts[0].amount,
      color: "#9bbfe0",
    },
    {
      label: userData?.data.charts[1].name,
      value: userData?.data.charts[1].amount,
      color: "#e8a09a",
    },
    {
      label: userData?.data.charts[2].name,
      value: userData?.data.charts[2].amount,
      color: "#fbe29f",
    },
    {
      label: userData?.data.charts[3].name,
      value: userData?.data.charts[3].amount,
      color: "#c6d68f",
    },
  ];
  if (!isDebitCard) {
    data.push(
      {
        label: userData?.data.charts[4].name,
        value: userData?.data.charts[4].amount,
        color: "#d6d68f",
      },
      {
        label: userData?.data.charts[5].name,
        value: userData?.data.charts[5].amount,
        color: "#e6d68f",
      },
      {
        label: userData?.data.charts[6].name,
        value: userData?.data.charts[6].amount,
        color: "#f6d68f",
      },
      {
        label: userData?.data.charts[7].name,
        value: userData?.data.charts[7].amount,
        color: "#g6d68f",
      },
      {
        label: userData?.data.charts[8].name,
        value: userData?.data.charts[8].amount,
        color: "#h6d68f",
      },
    );
  }
  console.log(data);
  return (
    <ThemeProvider>
      <Card
        data-resizable
        sx={{
          textAlign: "center",
          alignItems: "center",
          width: 280,
          // height: 240,
          height: 263,
          // to make the demo resizable
          // overflow: "auto",
          resize: "horizontal",
          "--icon-size": "100px",
          borderRadius: "30px",
          backgroundColor: color,
          boxShadow: "0 0 20px rgb(0,0,0,0.2)",
          // backgroundImage: color,
        }}
      >
        <CardOverflow variant="solid" color="warning" />

        <CardContent sx={{ maxWidth: "40ch" }}>
          <div className={styles.datacontent}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: 0,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 120,
                  paddingRight: "0px",
                  padding: "0px",

                  textAlign: "left",
                }}
              >
                <Box sx={{ color: "text.secondary" }}>
                  {isDebitCard ? "資產" : "經常性支出"}
                </Box>
                <Box
                  sx={{
                    color: "text.primary",
                    fontSize: 24,
                    fontWeight: "medium",
                  }}
                >
                  {`${userData?.data.stats[0].amount / 1000} K`}
                </Box>
                <Box
                  sx={{
                    color: "success.dark",
                    display: "inline",
                    fontWeight: "bold",
                    mx: 0.5,
                    fontSize: 10,
                  }}
                >
                  {userData?.data.stats[0].percentage_change || "+18.77%"}
                </Box>
                <Box
                  sx={{
                    color: "text.secondary",
                    display: "inline",
                    fontSize: 10,
                  }}
                >
                  vs. last week
                </Box>
              </Box>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: 0,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 120,
                  paddingLeft: "0px",
                  padding: "0px",
                  textAlign: "left",
                }}
              >
                <Box sx={{ color: "text.secondary" }}>
                  {isDebitCard ? "負債" : "非經常性支出"}
                </Box>
                <Box
                  sx={{
                    color: "text.primary",
                    fontSize: 24,
                    fontWeight: "medium",
                  }}
                >
                  {`${userData?.data.stats[1].amount / 1000} K`}
                </Box>
                <Box
                  sx={{
                    color: "success.dark",
                    display: "inline",
                    fontWeight: "bold",
                    mx: 0.5,
                    fontSize: 10,
                  }}
                >
                  {userData?.data.stats[0].percentage_change || "+18.77%"}
                </Box>
                <Box
                  sx={{
                    color: "text.secondary",
                    display: "inline",
                    fontSize: 10,
                  }}
                >
                  vs. last week
                </Box>
              </Box>
            </ThemeProvider>
          </div>

          <Stack direction="row">
            <PieChart
              series={[
                {
                  paddingAngle: 5,
                  innerRadius: 40,
                  outerRadius: 60,
                  // arcLabel: (item) => `${item.label} (${item.value})`, //show the inner data
                  arcLabelMinAngle: 15,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: { innerRadius: 20, additionalRadius: -20 },
                  data,
                },
              ]}
              // width={100}
              height={130}
              // legend={{ hidden: true }}  //hide the color stand for
              sx={{
                marginTop: "20px",
                marginRight: "10px",
                [`& .${pieArcClasses.faded}`]: {
                  fill: "gray",
                },
                "& .MuiChartsLegend-root.MuiChartsLegend-column": {
                  // display: "none",
                  height: "50px",
                  margin: "20px",
                  overflow: "scroll",
                },
                // "& .MuiChartsLegend-root.MuiChartsLegend-column": {
                //   height: "80px",
                //   overflow: "scroll",
                // },
              }}
            />
          </Stack>
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
