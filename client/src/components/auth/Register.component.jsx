import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import theme from "../../theme";
import { Typography } from "@material-ui/core";

import AuthCard from "./AuthCard.component";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

const Register = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography className={classes.root} variant="h4">
          Register
        </Typography>
        <TextField
          className={classes.root}
          id="standard"
          label="Username"
          defaultValue=""
        />
        <TextField
          className={classes.root}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </form>
    </ThemeProvider>
  );
};

export default Register;
