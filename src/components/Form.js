import React, { Component, createRef, Fragment } from 'react';
import Option from './Option';
import './Form.css';

class Form extends Component {
  state = {
    userCode: '04',
    userInvoice: '',
  };

  selectRef = createRef();
  inputRef = createRef();

  onSubmit = (e) => {
    const select = this.selectRef.current;
    const input = this.inputRef.current;

    e.preventDefault();
    if (select.value && input.value === '') {
      alert('올바르게 입력하세요.');
      return;
    }
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
            className="user__company"
            onChange={this.handleSelect}
            ref={this.selectRef}
          >
            {companies.map((company) => (
              <Option
                key={company.Code}
                id={company.Code}
                name={company.Name}
              />
            ))}
          </select>

          <input
            className="user__invoice"
            name="userInvoice"
            type="number"
            placeholder="운송장번호"
            value={this.state.userInvoice}
            onChange={this.handleChange}
            ref={this.inputRef}
          />

          <button className="button__submit" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </Fragment>
    );
  }
}

export default Form;
