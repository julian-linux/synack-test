import "fontsource-roboto";
// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom"
// Service Worker
import * as serviceWorker from "./serviceWorker";

// Material Components
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// Routes
import Routes from 'config/routes'

// Store
import store from "./config/store";

ReactDOM.render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <Container>
        <Router>
          <Routes />
        </Router>
      </Container>
    </Provider>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();