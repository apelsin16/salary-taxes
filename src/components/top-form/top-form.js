import React from 'react';
import NumberInput from '../number-input/number-input';
import PropTypes from 'prop-types';
import RadioInput from './../radio-inputs/radio-inputs';

const TopForm = props => {

  const handleInputChange = e => {
    props.handleInputChange(e);
  }

  return (
    <div className='row mb-4 '>
      <NumberInput 
        salary={props.salary} 
        onHandleInputChange={handleInputChange} 
        name='salary' />
      <RadioInput handleInputChange={handleInputChange} />
    </div>
  );
};

TopForm.propTypes = {
  salary: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  handleInputChange: PropTypes.func.isRequired,
}

export default TopForm;
