import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Component from '.';

export default {
  title: 'Components/Help',
  component: Component,
};

const Template = () => (
  <>
    <Box display="flex">
      <Typography variant="h3">Help</Typography>
      <Component />
    </Box>
    <Typography variant="caption">Click on the help icon</Typography>
  </>
);

export const Index = Template.bind({});
