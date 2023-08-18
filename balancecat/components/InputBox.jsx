import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputBox({ email, username }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {email && (
        <TextField
          id="outlined-basic"
          label="電子信箱"
          variant="outlined"
          sx={{
            ".MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
        />
      )}
      {username && (
        <TextField
          id="outlined-basic"
          label="你的名字"
          variant="outlined"
          sx={{
            ".MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
        />
      )}
    </Box>
  );
}
