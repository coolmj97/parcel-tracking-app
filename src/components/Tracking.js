import React, { Component } from 'react';

class Tracking extends Component {
  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <th>배송 시간</th>
            <th>현재 위치</th>
            <th>배송 상태</th>
          </thead>
          <tbody></tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Tracking;
