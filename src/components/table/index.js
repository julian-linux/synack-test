import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

// Material Components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Components
import Loading from 'components/loading';

const ComponentTable = ({
  head, body, innerRef, fetchingMore,
}) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table" size="medium" ref={innerRef}>
      <TableHead>
        <TableRow>
          {map(head, (name, idx) => (
            <TableCell key={`table-cell-${name}-${idx}`}>{name}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {map(body, (row, keyRow) => (
          <TableRow key={`tableBody-row-${keyRow}`}>
            {map(row, (item, keyItem) => (
              <TableCell key={`table-body-row-${keyRow}-item-${keyItem}`}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        ))}
        {fetchingMore && (
          <TableRow>
            <TableCell colSpan={head.length}>
              <Loading />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </TableContainer>
);

ComponentTable.propTypes = {
  head: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  innerRef: PropTypes.any.isRequired,
  fetchingMore: PropTypes.bool.isRequired,
};

export default ComponentTable;
