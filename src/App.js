import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Tracking from './components/Tracking';
import './App.css';

class App extends Component {
  state = {
    isTracking: false,
    companies: [],
    trackingDetails: [],
    itemName: '',
  };

  key = '6cZakepFWRyHctZn3HJYiw';

  getCompany = async () => {
    const {
      data: { Company },
    } = await axios.get(
      `https://info.sweettracker.co.kr/api/v1/companylist?t_key=${this.key}`
    );

    this.setState({
      companies: Company,
    });
  };

  getTrackingInfo = async (userCode, userInvoice) => {
    const {
      data: { msg, status, itemName, trackingDetails },
    } = await axios.get(
      `https://info.sweettracker.co.kr/api/v1/trackingInfo?t_key=${this.key}&t_code=${userCode}&t_invoice=${userInvoice}`
    );

    if (status === false) {
      alert(msg);
      return;
    }

    this.setState({
      isTracking: true,
      trackingDetails,
      itemName,
    });
  };

  componentDidMount() {
    this.getCompany();
  }

  render() {
    const { isTracking } = this.state;
    return (
      <section className="tracker">
        <div className="container">
          <h1 className="tracker__title">배송 조회</h1>
          <Form
            companies={this.state.companies}
            onSubmit={this.getTrackingInfo}
          />

          {isTracking ? (
            <Fragment>
              <span className="tracker__item__name">{this.state.itemName}</span>
              <Tracking details={this.state.trackingDetails} />
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </div>
      </section>
    );
  }
}

export default App;
