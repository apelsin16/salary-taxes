import React from 'react'
import PropTypes from 'prop-types';

const NumberInput = ({salary, onHandleInputChange, name}) => {
    return (
        <div className='col-3 m-auto d-flex align-items-center'>
            <input
              className='pl-2 form-control m-1' 
              type='number'  
              name={name} 
              value={salary} 
              onChange={e => onHandleInputChange(e)}
            /> 
            грн.
          </div>
    )
};

NumberInput.propTypes = {
    salary: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onHandleInputChange: PropTypes.func.isRequired,
}

export default NumberInput;