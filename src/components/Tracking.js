import React, { Component, Fragment } from 'react';
import Td from './Td';
import './Tracking.css';

class Tracking extends Component {
  render() {
    const { details } = this.props;

    return (
      <Fragment>
        <table className="tracking__table">
          <thead>
            <tr>
              <th>배송 시간</th>
              <th>현재 위치</th>
              <th>배송 상태</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, i) => (
              <Td key={i} detail={detail} />
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default Tracking;
