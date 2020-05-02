import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import theme from "../../theme";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import AuthCard from "./AuthCard.component";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(2),
  },
  root: {
    margin: theme.spacing(2),
    width: "100%",
  },
}));

const Register = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <form className={classes.form} noValidate autoComplete="off">
        <Typography className={classes.root} variant="h4">
          Register
        </Typography>
        <TextField
          className={classes.root}
          id="standard"
          label="Username"
          defaultValue=""
          fullWidth
        />
        <TextField
          className={classes.root}
          id="standard"
          label="Email"
          defaultValue=""
        />
        <br />
        <TextField
          className={classes.root}
          id="standard"
          label="Password"
          defaultValue=""
        />
        <TextField
          className={classes.root}
          id="standard-password-input"
          label="Confirm password"
          type="password"
          autoComplete="current-password"
        />
        <br />
        <Button variant="contained" color="secondary" className={classes.root}>
          Submit
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default Register;
