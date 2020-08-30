// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Material Components
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

// Styles
import useStyles from './styles';

/**
 * Component for show the user that the app is busy doing something
 *
 *  @param backdrop
 */
const Loading = ({ open, backdrop }) => {
  const classes = useStyles();

  if (backdrop) {
    return (
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (!open) {
    return null;
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
  /**
   * show loading?
   */
  open: PropTypes.bool,
  /**
   * loading full page?
   */
  backdrop: PropTypes.bool,
};

Loading.defaultProps = {
  open: true,
  backdrop: false,
};

export default Loading;
