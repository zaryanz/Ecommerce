import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../theme";
import Register from "../auth/Register.component";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    fontWeight: 400,
    color: "inherit",
    outline: "none",
    margin: theme.spacing(2),
  },
  cart: {
    margin: theme.spacing(1, "auto", "auto", "auto"),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              {/* <MenuIcon /> */}
            </IconButton>

            <Typography variant="h5" color="inherit">
              <Link to="/" className={classes.link} style={{ fontWeight: 500 }}>
                Ecommerce
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit">
              <Link to="/Register" className={classes.link}>
                Register
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit">
              <Link to="/Login" className={classes.link}>
                Login
              </Link>
            </Typography>
            <div style={{ marginLeft: "auto", marginRight: "1em" }}>
              <Link to="/Cart" className={classes.link}>
                <ShoppingCartIcon></ShoppingCartIcon>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Header;
