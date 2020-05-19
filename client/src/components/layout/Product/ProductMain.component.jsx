import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import theme from "../../../theme";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button>
            <AddShoppingCartIcon color="primary" />
          </Button>
          <Button>
            <FavoriteBorderIcon color="primary" />
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
