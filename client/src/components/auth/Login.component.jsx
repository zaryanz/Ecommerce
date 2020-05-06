import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import theme from "../../theme";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { config } from "../../config";

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

const Login = () => {
  console.log(config.SERVER_URL);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   axios.post();
  // };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        // onSubmit={(e) => handleSubmit(e)}
      >
        <Typography className={classes.root} variant="h4">
          Login
        </Typography>
        <TextField
          className={classes.root}
          id="standard"
          label="Username/Email"
          name="username"
          value={username}
          onChange={(e) => handleChange(e)}
          defaultValue=""
          fullWidth
        />
        <br />
        <TextField
          className={classes.root}
          id="standard-password-input"
          label="Password"
          name="password"
          value={password}
          type="password"
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

export default Login;
