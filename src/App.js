import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import theme from "./Ui/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
