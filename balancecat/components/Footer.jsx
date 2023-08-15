import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography variant="h6" color="text.primary" gutterBottom>
              關於我們
            </Typography>
            <Typography variant="body2" color="text.secondary">
              我希望通過我的記帳網站，可以幫助更多的人建立起更健康的財務習慣，更明智地管理金錢。請隨時來訪，體驗一下這個簡單而強大的財務工具吧！
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ textAlign: { xs: "center", sm: "center" } }}
          >
            <Typography variant="h6" color="text.primary" gutterBottom>
              聯絡我們
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ textAlign: { xs: "center", sm: "right" } }}
          >
            <Typography variant="h6" color="text.primary" gutterBottom>
              追蹤我們
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link
              color="inherit"
              href="https://www.google.com/search?q=cat&rlz=1C5CHFA_enTW997TW997&oq=cat&aqs=chrome.0.69i59j46i199i433i465i512j46i199i433i457i465i512j69i60l5.4824j0j7&sourceid=chrome&ie=UTF-8"
            >
              Balance Cat
            </Link>{" "}
            {new Date().getFullYear()}.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
