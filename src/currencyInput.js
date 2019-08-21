import React, { Component } from "react";

class CurrencyInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }
  render() {
    const { value, type } = this.props;
    return (
      <p>
        {type}: <input value={value} type="text" onChange={this.handleChange} />
      </p>
    );
  }
}

export default CurrencyInput;
