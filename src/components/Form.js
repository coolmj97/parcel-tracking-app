import React, { Component, Fragment } from 'react';
import Option from './Option';
import './Form.css';

class Form extends Component {
  state = {
    userCode: '',
    userInvoice: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { userCode, userInvoice } = this.state;
    this.props.onSubmit(userCode, userInvoice);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSelect = (e) => {
    const userCode = e.target.value;
    this.setState({
      userCode,
    });
  };

  render() {
    const { companies } = this.props;

    return (
      <Fragment>
        <form className="user__form" onSubmit={this.onSubmit}>
          <select
            name="companies"
            className="user__company"
            onChange={this.handleSelect}
          >
            <option value="">택배사 선택</option>
            {companies.map((company) => (
              <Option
                key={company.Code}
                id={company.Code}
                name={company.Name}
              />
            ))}
          </select>

          <input
            name="userInvoice"
            type="number"
            placeholder="운송장번호"
            value={this.state.userInvoice}
            className="user__invoice"
            onChange={this.handleChange}
          />

          <button
            className="button__submit"
            type="submit"
            aria-label="배송조회하기"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </Fragment>
    );
  }
}

export default Form;
