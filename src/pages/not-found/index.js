// Libraries
import React from 'react';

// Material Components
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const NotFound = () => (
      <Paper>
        <Box p={5}>
          <h1 className="display-3">404!</h1>
          <p className="lead">Page not found</p>
        </Box>
      </Paper>
);

export default NotFound;
