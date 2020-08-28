// Libraries
import React from 'react';

// Material Components
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';

// Icon
import HelpIcon from '@material-ui/icons/Help';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

// Intl
import Intl from 'config/intl';

const Help = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton onClick={handleClick}>
        <HelpIcon fontSize="small" color="secondary" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box p={2}>
          <Box display="flex">
            <LabelImportantIcon color="secondary" />
            <Intl langKey="HELP_1" />
          </Box>
          <Box display="flex">
            <LabelImportantIcon color="secondary" />
            <Intl langKey="HELP_2" />
          </Box>
          <Box display="flex">
            <LabelImportantIcon color="secondary" />
            <Intl langKey="HELP_3" />
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default Help;
