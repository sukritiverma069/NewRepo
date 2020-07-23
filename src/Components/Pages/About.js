import React, { useEffect } from "react";

import { makeStyles, useTheme } from "@material-ui/styles";

import { connect } from "react-redux";
import Header from "../Header";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function About(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      {console.log(props.myItems)}
      <Header />

      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        style={{ backgroundColor: "#F4CE2C", height: "41em" }}
      >
        <Grid item>
          <Typography variant="h4">{props.myItems.firstname}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">{props.myItems.lastname}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">{props.myItems.address}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    myItems: state.items,
  };
};

export default connect(mapStateToProps, null)(About);
