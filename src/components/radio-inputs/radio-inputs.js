import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = props => {
    return (
        <div className='col-9 m-auto form-group'>
              <fieldset className='border p-2'>
                <legend className='w-auto'>Оберіть, Ви ввели "чисту" чи "грязну" заробітну плату </legend>
                <div className="">
                  <div className="custom-control custom-radio">
                    <input id='radio1' name="kindOfCalculating" type="radio" value='withTaxes' className="custom-control-input" onChange={props.handleInputChange} defaultChecked/>
                    <label className="custom-control-label" htmlFor='radio1'>"Грязна" заробітна плата</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id='radio2' name="kindOfCalculating" type="radio" value='withoutTaxes' className="custom-control-input" onChange={props.handleInputChange}/>                    
                    <label htmlFor='radio2' className="custom-control-label">"Чиста" заробітна плата</label>
                  </div>                                    
                </div>
              </fieldset>
          </div>
    )
}

RadioInput.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
}

export default RadioInput;