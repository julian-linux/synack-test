import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Component from '.';

export default {
  title: 'Components/Search',
  component: Component,
  argTypes: {
    onSearch: { action: 'search!' },
    onClear: { action: 'clear!' },
  },
};

const Template = (args) => (
  <>
    <Box mb={2} pb={2}>
      <Typography variant="h5" color="primary">Control functionality from storybook controls</Typography>
      <Typography variant="h6" color="secondary">Just type the name for search</Typography>
      <Typography variant="caption" color="primary">In Actions tab can see when Component actions is called</Typography>
      <Component {...args} />
    </Box>

  </>
);

export const Index = Template.bind({});
