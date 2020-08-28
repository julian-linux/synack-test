// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Material Components
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

// Styles
import useStyles from './styles';

const Loading = ({ error, backdrop }) => {
  const classes = useStyles();

  if (error) {
    window.console.error('error in loading...', error);
  }

  if (backdrop) {
    return (
      <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  return (
    <Grid container justify="center" alignItems="center" flex={1}>
      <Grid container item xs={12} sm={6} md={3} mt={5} justify="center" alignItems="center">
        <CircularProgress color="primary" />
      </Grid>
    </Grid>
  );
};

Loading.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.any,
  backdrop: PropTypes.bool,
};

Loading.defaultProps = {
  error: null,
  backdrop: false,
};

export default Loading;
