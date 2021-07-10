import PropTypes from 'prop-types';
import React from 'react';

import { Column } from './Column';
import { IColumn } from './interfaces';

export class Application extends React.Component {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape(IColumn)).isRequired
  };

  state = {
    columns: [],
    loading: true
  };

  renderColumns(props) {
    return (
      <li>
        <Column {...props} />
      </li>
    );
  }

  componentDidMount() {
    fetch('/api/item').then(data => data.json()).then(columns => {
      this.setState(() => ({
        columns,
        loading: false
      }));
    });
  }

  render() {
    console.log(this.state);
    if (this.state.loading) {
      return <div>LOADING</div>
    }

    return <ol>{this.state.columns.map(this.renderColumns)}</ol>;
  }
}
