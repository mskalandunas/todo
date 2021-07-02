import PropTypes from 'prop-types';
import React from 'react';

import { ICard, IColumn } from './interfaces';

export const Application = () => {
  return (
    <h1>Hello world</h1>
  );
};

Application.propTypes = {
  columns: PropTypes.arrayOf(IColumn).isRequired,
  items: PropTypes.arrayOf(ICard).isRequired
};