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
    if (!inputValue || (inputValue.length < length)) {
      return undefined;
    }
    debounceSearch.current({ key: inputValue });
  }, [inputValue, length]);

  return (
    <Box my={1} className={classes.root}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label={onlyText('SEARCH')}
        helperText={onlyText('SEARCH_BY_NAME')}
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
        InputProps={{
          endAdornment: loading
            ? (<CircularProgress color="primary" size={24} />)
            : (<IconButton aria-label="search-box-clear" onClick={handleClear} size="small"><ClearIcon size="small" /></IconButton>),
        }}
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
};

Search.defaultProps = {
  timeout: 1000,
  length: 3,
};

export default Search;