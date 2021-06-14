import React, { Component } from 'react';

class Form extends Component {
  state = {
    userCode: '',
    userInvoice: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { companies } = this.props;

    return (
      <div onClick={console.log('클릭')}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.state.userCode, this.state.userInvoice);
          }}
        >
          <select>
            {companies.map((company) => (
              <option key={company.Code} id={company.Code}>
                {company.Name}
              </option>
            ))}
          </select>

          <input
            name="userInvoice"
            type="text"
            placeholder="운송장번호"
            value={this.state.userInvoice}
            onChange={this.handleChange}
          />

          <button type="submit">조회</button>
        </form>
      </div>
    );
  }
}

export default Form;
