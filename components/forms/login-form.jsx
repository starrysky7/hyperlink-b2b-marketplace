import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "./elements/text-field";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "../paper";

export default function LoginForm() {
  //state for email address field
  const [emailAddress, setEmailAddress] = React.useState("");
  //state for password field
  const [password, setPassword] = React.useState("");
  return (
    <Paper sx={{ width: "400px" }}>
      <Stack spacing={2} sx={{ width: "100%" }}>
        {/* login form heading */}
        <Typography variant="h2">Login</Typography>

        {/* email address */}
        <TextField
          label="Email Address"
          placeholder="Enter your email address"
          value={emailAddress}
          onChange={(e) => {
            setEmailAddress(e.target.value);
          }}
        />
        {/* password */}
        {/* <Stack spacing={0.5}>
          <TextField
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          /> */}

        {/* forgot password link */}

        {/* </Stack> */}

        {/* continue to next step */}
        <Button variant="contained">Login</Button>
        <Button type="text" sx={{ alignSelf: "start" }}>
          Need help?
        </Button>
        {/* create an account button */}
      </Stack>
    </Paper>
  );
}
