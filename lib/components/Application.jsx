import PropTypes from 'prop-types';
import React from 'react';

import { fetchData } from '@utils/fetchUtils';

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

  renderColumns(props, i) {
    const key = props.heading + '_' + i;

    return (
      <li key={key}>
        <Column {...props} />
      </li>
    );
  }

  componentDidMount() {
    fetchData({
      success: columns => {
        this.setState(() => ({
          columns,
          loading: false
        }));
      },
      url: '/api/item'
    });
  }

  render() {
    console.log(this.state);
    if (this.state.loading) {
      return <div>LOADING</div>;
    }

    return <ol>{this.state.columns.map(this.renderColumns)}</ol>;
  }
}
