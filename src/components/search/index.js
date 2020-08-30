// Libraries
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

// Material Components
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

// Icons
import CircularProgress from '@material-ui/core/CircularProgress';
import ClearIcon from '@material-ui/icons/Clear';

// Intl
import { onlyText } from 'config/intl';

// Styles
import useStyles from './styles';

/**
 * Component for search by **name** in api.
 */
const Search = ({
  onSearch, timeout, length, loading, onClear,
}) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');

  const debounceSearch = useRef(debounce((value) => onSearch(value), timeout));

  const handleClear = () => {
    setInputValue('');
    onClear();
  };

  useEffect(() => {
    if (inputValue.length >= length) {
      debounceSearch.current({ key: inputValue });
    }
  }, [inputValue, length]);

  const endAdornment = loading
    ? (<CircularProgress color="primary" size={24} />)
    : (
      <IconButton
        id="SearchBoxClear"
        data-testid="SearchBoxClear"
        aria-label="search-box-clear"
        onClick={handleClear}
        size="small"
      >
        <ClearIcon size="small" />
      </IconButton>
    );

  return (
    <Box my={1} className={classes.root}>
      <TextField
        id="Search"
        name="search"
        variant="outlined"
        label={onlyText('SEARCH')}
        helperText={onlyText('SEARCH_BY_NAME')}
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
        InputProps={{ endAdornment }}
      />
    </Box>
  );
};

Search.propTypes = {
  /**
   * Function that calls search action
   */
  onSearch: PropTypes.func.isRequired,
  /**
   * Timeout for invoke search function
   */
  timeout: PropTypes.number,
  /**
   * Min text length for execute "onSearch" after "timeout"
   */
  length: PropTypes.number,
  /**
   * Function for reset search
   */
  onClear: PropTypes.func.isRequired,
  /**
   * show loading at bottom
   */
  loading: PropTypes.bool.isRequired,
};

Search.defaultProps = {
  timeout: 1000,
  length: 3,
};

export default Search;
