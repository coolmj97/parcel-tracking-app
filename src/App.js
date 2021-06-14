import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Tracking from './components/Tracking';
import './App.css';

class App extends Component {
  state = {
    isTracking: true,
    companies: [],
    companiesCode: '04',
    invoiceNumber: '385546333951',
  };

  getCompany = async () => {
    const {
      data: { Company },
    } = await axios.get(
      'https://info.sweettracker.co.kr/api/v1/companylist?t_key=JJPRq0fbDt8liHM5HWw3IA'
    );

    this.setState({
      companies: Company,
    });
  };

  getTrackingInfo = async (userCode, userInvoice) => {
    this.setState({
      companiesCode: userCode,
      invoiceNumber: userInvoice,
    });
    const code = this.state.companiesCode;
    const invoice = this.state.invoiceNumber;
    const info = await axios.get(
      `https://info.sweettracker.co.kr/api/v1/trackingInfo?t_key=JJPRq0fbDt8liHM5HWw3IA&t_code=${code}&t_invoice=${invoice}`
    );
    console.log(info);
  };

  componentDidMount() {
    this.getCompany();
  }

  render() {
    return (
      <div>
        <h1>택배 배송 조회</h1>
        <Form
          companies={this.state.companies}
          onSumbit={this.getTrackingInfo}
        />
        <Tracking />
      </div>
    );
  }
}

export default App;
