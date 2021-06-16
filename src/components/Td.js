import React, { Component, Fragment } from 'react';
import './Td.css';

class Td extends Component {
  render() {
    const { detail } = this.props;

    return (
      <Fragment>
        <tr>
          <td className="tracking__time">{detail.timeString}</td>
          <td className="tracking__position">{detail.where}</td>
          <td className="tracking__state">{detail.kind}</td>
        </tr>
      </Fragment>
    );
  }
}

export default Td;
