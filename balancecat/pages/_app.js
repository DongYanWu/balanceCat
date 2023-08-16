// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   // eslint-disable-next-line react/jsx-props-no-spreading
//   return <Component {...pageProps} />;
// }

import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
