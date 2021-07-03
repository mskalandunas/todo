import PropTypes from 'prop-types';
import React from 'react';

import { Column } from './Column';
import { IColumn } from './interfaces';

export class Application extends React.Component {
  renderColumns(props) {
    return (
      <li>
        <Column {...props} />
      </li>
    );
  }

  render() {
    return (
      <ol>
        {this.props.columns.map(this.renderColumns)}
      </ol>
    );
  }
};

Application.propTypes = {
  columns: PropTypes.arrayOf(IColumn).isRequired
};