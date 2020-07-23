import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles } from "@material-ui/styles";

import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { useTheme } from "@material-ui/core/styles";

import { Grid, TextField } from "@material-ui/core";

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "0.5em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "10em",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    fontSize: "2em",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  headingColor: {
    color: theme.palette.common.white,
    "&:hover": {
      opacity: 0.5,
    },
  },
  headingSelected: {
    borderBottom: "2px solid #F4CE2C",
    padding: "1em",
    cursor: "pointer",
  },
}));

function Home(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (i) => {
    console.log("func called " + i);
    setSelectedIndex(i);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-around"
              style={{ cursor: "pointer" }}
            >
              <Grid
                item
                container
                sm={7}
                alignItems="center"
                justify="space-evenly"
              >
                <Grid
                  item
                  component={Link}
                  to="/"
                  className={
                    selectedIndex === 1 ? classes.headingSelected : null
                  }
                  onClick={() => {
                    handleMenuItemClick(1);
                  }}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Home
                </Grid>
                <Grid
                  item
                  className={
                    selectedIndex === 2 ? classes.headingSelected : null
                  }
                >
                  {" "}
                  Contact Us
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/About"
                  onClick={() => {
                    handleMenuItemClick(3);
                  }}
                  className={
                    selectedIndex === 3 ? classes.headingSelected : null
                  }
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About Us
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
}

export default Home;
