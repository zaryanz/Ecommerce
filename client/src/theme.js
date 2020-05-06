import { createMuiTheme } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: { main: "#ff9100" },
  },
});

export default theme;
