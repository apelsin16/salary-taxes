import React from 'react';
import { Typography } from '@material-ui/core';
import CalculatingTaxFree from '../calculating/CalculatingTaxFree';

export default class Home extends React.Component {
  state = {
    value: 'withTaxes',
    salary: 4173,
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleInput = event => {
    this.setState({
      salary: event.target.value,
    });
  };

  render() {
    const { value, salary } = this.state;
    
    return (
      <React.Fragment>
        <Typography variant="h4" component="h1">
          Розрахунок заробітної плати та податків
        </Typography>
        <CalculatingTaxFree
            salary={salary}
            kindOfCalculating={value}
            onHandleChange={this.handleChange}
            onHandleInput={this.handleInput}
          />
      </React.Fragment>
    );
  }
}
