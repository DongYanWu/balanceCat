import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputBox({ email, username }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "36ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {email && (
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: "15px",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            ".MuiOutlinedInput-root": {
              borderRadius: "15px",
            },
          }}
        />
      )}
      {username && (
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: "15px",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            ".MuiOutlinedInput-root": {
              borderRadius: "15px",
            },
          }}
        />
      )}
    </Box>
  );
}
