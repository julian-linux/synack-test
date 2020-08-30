import store from "../src/config/store";
import {Provider} from "react-redux";
import React from "react";

// Material Components
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <>
      <CssBaseline />
      <Provider store={store}>
        <Container>
          <Story />
        </Container>
      </Provider>
    </>
  )
]