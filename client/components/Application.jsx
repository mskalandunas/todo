import PropTypes from 'prop-types';
import React from 'react';

import { Column } from './Column';
import { IColumn } from './interfaces';

export const Application = props => {
  return (
    <ol>
      {props.columns.map(Column)}
    </ol>
  );
};

Application.propTypes = {
  columns: PropTypes.arrayOf(IColumn).isRequired
};