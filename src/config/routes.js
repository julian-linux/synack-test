// Libraries
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Material Components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Language from 'components/language';

// Pages
import NotFound from 'pages/not-found';
import Products from 'pages/products';

const Routes = () => (
  <Grid container>
    <Grid item xs={12}>
      <Box mt={1} display="flex" flexDirection="row-reverse">
        <Language />
      </Box>
      <Box mt={1}>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route component={NotFound} />
        </Switch>
      </Box>
    </Grid>
  </Grid>
);

export default Routes;
