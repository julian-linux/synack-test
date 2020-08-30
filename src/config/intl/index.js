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

/**
 * Component for easy language translations.
 *
 * Is based in Typography material-ui Component
 *
 * Is needed to have a JSON file with the language to use
 *
 * If **Typography** component is not needed, **onlyText** can be used for get only the string
 */
const Intl = ({ langKey, ...props }) => <Typography {...props}>{onlyText(langKey)}</Typography>;

Intl.propTypes = {
  /**
   * key in *translation/[lang].json* json file
   */
  langKey: PropTypes.string.isRequired,
};

export default Intl;
