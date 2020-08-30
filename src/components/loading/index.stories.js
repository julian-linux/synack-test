import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Component from '.';

export default {
  title: 'Components/Loading',
  component: Component,
};

const Template = (args) => (
  <>
    <Box mb={2} pb={2}>
      <Typography variant="h6">Control Loading functionality from storybook controls</Typography>
      <Component {...args} />
    </Box>

  </>
);

export const Index = Template.bind({});

Index.args = {
  open: false,
  backdrop: false,
};
