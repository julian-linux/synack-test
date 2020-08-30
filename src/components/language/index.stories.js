import React from 'react';

import Box from '@material-ui/core/Box';

import Intl from 'config/intl';

import Typography from '@material-ui/core/Typography';
import Component from '.';

export default {
  title: 'Components/Language',
  component: Component,
};

const Template = () => (
  <>
    <Typography variant="h5" color="primary">Control functionality from storybook controls</Typography>
    <Box mb={2} pb={2}>
      <Component />
    </Box>
    <Intl langKey="STORYBOOK.LANGUAGE.HELP" />
  </>
);

export const Index = Template.bind({});
