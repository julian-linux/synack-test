import React from 'react';
import faker from 'faker';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import times from 'lodash/times';

import Component from '.';

export default {
  title: 'Components/Table',
  component: Component,
};

const mockHead = ['ID', 'Name', 'Description'];

const mockBody = times(5, () => ([faker.random.uuid(), faker.commerce.productName(), faker.lorem.sentence()]));

const Template = (args) => (
  <>
    <Box mb={2} pb={2}>
      <Typography variant="h6">Control functionality from storybook controls</Typography>
      <Component {...args} />
    </Box>

  </>
);

export const Index = Template.bind({});

Index.args = {
  head: mockHead,
  body: mockBody,
  innerRef: null,
  fetchingMore: false,
};
