import React from 'react';
import PropTypes from 'prop-types';

const makeOptions = (min, max) => {
    const elements = [];
  
    for (let i = min; i <= max; i += 1) { 
    elements.push(
        <option key={i} value={i}>
            {i}
        </option>
    );
  }
  return elements;
  }

const SelectInput = ({value, handleInputChange, name, label, min, max }) => {
    return (
        <label  className='d-block '>
            <select 
                className='m-2 form-control' 
                value={value} 
                onChange={handleInputChange} 
                name={name}
            >
                {makeOptions(min,max)}                  
            </select>
            {label}
        </label>
    )
}

SelectInput.propTypes = {
    value: PropTypes.number.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

export default SelectInput;
