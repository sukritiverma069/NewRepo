import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { makeStyles } from "@material-ui/styles";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { useTheme } from "@material-ui/core/styles";

import { Grid, TextField } from "@material-ui/core";

import { connect } from "react-redux";
import { setData } from "../../Redux/Actions";
import Header from "../Header";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4.3em",
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
    color: theme.palette.common.yellow,
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
  const [userData, setUserData] = React.useState({
    firstname: "",
    lastname: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUserData({ ...userData, [inputName]: inputValue });
  };

  const handleSubmit = () => {
    props.setData(userData);
  };

  return (
    <React.Fragment>
      {console.log("the props.scrollState is = " + props.scrollState)}
      <Header />

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        spacing={2}
        style={{ backgroundColor: "#F4CE2C", height: "41em" }}
      >
        <Grid item>
          <Typography variant="h2" color="primary">
            Contact Us
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            autoFocus={true}
            label="First Name"
            id="input-with-icon-textfield"
            name="firstname"
            value={userData.username}
            // placeholder="First Name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
            fullWidth
            style={{ width: "30em" }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Last Name"
            id="standard-size-small"
            name="lastname"
            value={userData.lastname}
            // placeholder="Last Name"
            size="small"
            variant="outlined"
            fullwidth
            onChange={handleInputChange}
            style={{ width: "30em" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-static"
            label="Address"
            name="address"
            value={userData.address}
            multiline
            rows={4}
            // placeholder="Your Address"
            variant="outlined"
            onChange={handleInputChange}
            style={{ width: "30em" }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapdispatchToProps = (dispatch) => {
  return {
    setData: (userdata) => {
      dispatch(setData(userdata));
    },
  };
};

export default connect(null, mapdispatchToProps)(Home);
