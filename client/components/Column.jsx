import React from 'react';

import { Card } from './Card';
import { IColumn } from './interfaces';

export const Column = props => {
  const { heading, items } = props;

  return [
    <h1>{heading}</h1>,
    items.map(Card)
  ];
};

Column.propTypes = IColumn;