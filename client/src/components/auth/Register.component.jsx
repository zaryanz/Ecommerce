import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_c: "",
  });

  const { username, email, password, password_c } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
    console.log(e.target.name);
  };

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
          name="username"
          value={username}
          fullWidth
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className={classes.root}
          id="standard"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <TextField
          className={classes.root}
          id="standard-password-input"
          label="Password"
          name="password"
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className={classes.root}
          id="standard-password-input"
          label="Confirm password"
          name="password_c"
          type="password"
          value={password_c}
          autoComplete="current-password"
          onChange={(e) => handleChange(e)}
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
