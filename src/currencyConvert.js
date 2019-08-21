import React, { Component } from "react";
import CurrencyInput from "./currencyInput";

function USD2RMB(amount) {
  return amount * 6.7925;
}

function RMB2USD(amount) {
  return amount * 0.1472;
}

function convert(typeFn, amount) {
  return typeFn(amount);
}

class CurrencyConvert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "RMB",
      value: 0
    };

    this.handleRMBChange = this.handleRMBChange.bind(this);
    this.handleUSDChange = this.handleUSDChange.bind(this);
  }
  handleRMBChange(amount) {
    this.setState({
      type: "RMB",
      value: amount
    });
  }

  handleUSDChange(amount) {
    this.setState({
      type: "USD",
      value: amount
    });
  }
  render() {
    const { type, value } = this.state;
    const RMB = type === "RMB" ? value : convert(USD2RMB, value);
    const USD = type === "USD" ? value : convert(RMB2USD, value);
    return (
      <div>
        <p> 请输入金额： </p>
        <CurrencyInput
          type="RMB"
          value={RMB}
          onInputChange={this.handleRMBChange}
        />
        <CurrencyInput
          type="USD"
          value={USD}
          onInputChange={this.handleUSDChange}
        />
      </div>
    );
  }
}

export default CurrencyConvert;
