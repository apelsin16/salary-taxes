import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import CalculatingWithTaxes from '../calculating/CalculatingWithTaxes';
import CalculatingTaxFree from '../calculating/CalculatingTaxFree';
import './App.css';

class App extends React.Component {

  state = {
    value: 'withTaxes',
    salary: 4173
  }

  handleChange = event => {
    this.setState({
      value: event.target.value});
  };

  handleInput = event => {
    this.setState({
      salary: event.target.value});
  }
  render () {
 const { value, salary } = this.state;

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1">
          Розрахунок заробітної плати та податків
        </Typography>
        
        {
          (value === "withTaxes") ? 
          <CalculatingWithTaxes salary={salary} kindOfCalculating={value} onHandleChange={this.handleChange} onHandleInput={this.handleInput}/>
          :
          <CalculatingTaxFree salary={salary} kindOfCalculating={value} onHandleChange={this.handleChange} onHandleInput={this.handleInput}/>
        }
        
      </Container>
    </div>
  );
}
  }
export default App;
