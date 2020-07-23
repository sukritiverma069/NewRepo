import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#02102B";
const arcOrange = "#FFBA60";
const arcYellow = "#F4CE2C";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
      yellow: `${arcYellow}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcYellow}`,
    },
  },

  typography: {
    fontFamily: "Venti CF",
    tab: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1em",
    },
    h2: {
      fontFamily: "Pacifico",
      fontWeight: 700,
      fontSize: "2.5em",
      color: "white",
      lineHeight: 1.5,
    },

    h4: {
      fontWeight: 700,
      fontSize: "2.2em",
      color: arcBlue,
      lineHeight: 1,
    },
    h6: {
      fontSize: "1.2em",
      color: `white`,
      lineHeight: 1,
    },
    estimate: {
      fontSize: "1em",
      textTransform: "none",
      color: "white",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          zIndex: 2,
          scrollBehavior: "smooth",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        },
      },
    },
  },
});
