import React from "react";

import store from "./store";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Navbar from "./components/navbar";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const App = props => {
  return (
    <div>
      <Navbar />
      <Button variant="contained" color="secondary" onClick={store.changeTitle}>
        Change text in navbar
      </Button>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
