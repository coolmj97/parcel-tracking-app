import React, { Component, Fragment } from 'react';

class Option extends Component {
  render() {
    return (
      <Fragment>
        <option value={this.props.id}>{this.props.name}</option>
      </Fragment>
    );
  }
}

export default Option;
