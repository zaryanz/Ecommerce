import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import theme from "../../theme";

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(4),
  },
});

const AuthCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>{props.children}</CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default AuthCard;
