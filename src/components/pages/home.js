import React from 'react';
import TopForm from '../top-form/top-form';
import { rateESV, ratePDFO, rateVZ, maxESV } from '../../variables/variables';
import Table from '../table/table';
import CheckboxInput from '../checkbox-input/checkbox-input';
import SelectInput from '../select-input/select-input';
import './home.css';

const parseNumber = (number, rate) => {return parseFloat(Math.round(number * rate * 100) / 100).toFixed(2)}

export default class Home extends React.Component {
  state = {
    salary: 4173,
    kindOfCalculating: 'withTaxes',
    prepayment: false,
    workingDays: 0,
    firstPartDays: 0
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { salary, kindOfCalculating, prepayment, workingDays, firstPartDays } = this.state;
    let salaryWithTaxes = salary/80.5*100;
    if (kindOfCalculating === 'withTaxes') salaryWithTaxes = salary;
    let ESV = Number(parseNumber(salaryWithTaxes, rateESV));
    const PDFO = Number(parseNumber(salaryWithTaxes, ratePDFO));
    const VZ = Number(parseNumber(salaryWithTaxes, rateVZ));
    const pureSalary = Number(parseFloat(Math.round((salaryWithTaxes - PDFO - VZ) * 100) / 100).toFixed(2));
    if (ESV >= maxESV ) ESV = maxESV;
    const firstPartSalary = salaryWithTaxes/workingDays*firstPartDays;
    let firstPartESV = Number(parseNumber(firstPartSalary, rateESV));
    const firstPartPDFO = Number(parseNumber(firstPartSalary, ratePDFO));
    const firstPartVZ = Number(parseNumber(firstPartSalary, rateVZ));
    const firstPartPureSalary = Number(parseFloat(Math.round((firstPartSalary - firstPartPDFO - firstPartVZ) * 100) / 100).toFixed(2));
    const secondPartSalary = salaryWithTaxes - firstPartSalary;
    const secondPartESV = ESV - firstPartESV;
    const secondPartPDFO = PDFO - firstPartPDFO;
    const secondPartVZ = VZ - firstPartVZ;
    const secondPartPureSalary = pureSalary - firstPartPureSalary;

    return (
      <div className="container">
        <TopForm salary={salary} handleInputChange={this.handleInputChange}/>
        <div className='row'>
          <Table 
            salaryWithTaxes={salaryWithTaxes}
            ESV={ESV}
            PDFO={PDFO}
            VZ={VZ}
            pureSalary={pureSalary}  
          />
        </div>
        <div>
          <CheckboxInput handleInputChange={this.handleInputChange}/>
        </div>
        {prepayment ?
          <div className='form-inline'>
            <fieldset className='border p-2'>
              <legend className='w-auto'>Оберіть кількість днів </legend>
                <SelectInput 
                  value={Number(workingDays)}
                  handleInputChange={this.handleInputChange}
                  name='workingDays'
                  label='Кількість робочих днів в місяці'
                  min={15} 
                  max={25}
                />
                <SelectInput 
                  value={Number(firstPartDays)}
                  handleInputChange={this.handleInputChange}
                  name='firstPartDays'
                  label='Кількість робочих днів в першій половині місяця'
                  min={5} 
                  max={15}
                />              
            </fieldset>  
          <div>
              { workingDays && firstPartDays ?
                <div className='row mt-4 pb-4'>
                  <h3 className='col-12 mt-4 mb-4'>Перша половина місяця</h3>
                  <Table 
                    salaryWithTaxes={firstPartSalary}
                    ESV={firstPartESV}
                    PDFO={firstPartPDFO}
                    VZ={firstPartVZ}
                    pureSalary={firstPartPureSalary} 
                  />                  
                  <h3 className='col-12 mb-4 mt-4'>Друга половина місяця</h3>  
                  <Table 
                    salaryWithTaxes={secondPartSalary}
                    ESV={secondPartESV}
                    PDFO={secondPartPDFO}
                    VZ={secondPartVZ}
                    pureSalary={secondPartPureSalary} 
                  /> 
                </div> :
                null
              }
            </div> 
          </div> : 
          null
        }
      </div>
    );
  }
}
