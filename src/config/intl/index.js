// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Material Components
import Typography from '@material-ui/core/Typography';

// Translations
import es from './translations/es.json';
import en from './translations/en.json';

const translations = {
  es,
  en,
};

const lang = localStorage.getItem('lang') || 'en';

export const onlyText = (langKey) => translations[lang][langKey] || '####';

const Intl = ({ langKey, ...props }) => <Typography {...props}>{onlyText(langKey)}</Typography>;

Intl.propTypes = {
  langKey: PropTypes.string.isRequired,
};

export default Intl;
