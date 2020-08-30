import React from 'react';
import map from 'lodash/map';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import Language from 'components/language';
import translations from './translations/en.json';

import Component from '.';

export default {
  title: 'Config/Intl',
  component: Component,
};

console.log('translations', translations, Object.keys(translations));

const Template = (args) => (
  <>
    <Box display="flex" flexDirection="row-reverse">
      <Language />
    </Box>
    <Box mb={2} pb={2} display="flex">
      <Typography color="primary">Translated: </Typography>
      <Box ml={2}>
        <Component {...args} />
      </Box>
    </Box>
    <Typography variant="h5" color="primary">Control Loading functionality from storybook controls</Typography>
    <Typography variant="h6" color="primary">Type any of the following keys in storybook prop control  and see the result</Typography>
    <Typography variant="caption" color="secondary">
      <ul>
        {map(translations, (value, key) => <li key={key}>{key}</li>)}
      </ul>

    </Typography>
  </>
);

export const Index = Template.bind({});

Index.args = {
  langKey: 'SEARCH_BY_NAME',
};
