import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = props => {
    return (
        <div className="custom-control custom-checkbox d-flex align-items-center">
            <input 
              type="checkbox"
              name="prepayment"
              onChange={props.handleInputChange}
              className="custom-control-input"
              id='prepayment'
            />
          <label className="custom-control-label pt-1" htmlFor='prepayment' >
            Розрахувати аванс
          </label>
        </div>
    )
}

CheckboxInput.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
}

export default CheckboxInput;
