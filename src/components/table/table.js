import React from 'react';
import PropTypes from 'prop-types';

const formatNumber = new Intl.NumberFormat('uk-UK', { style: 'currency', currency: 'UAH', minimumFractionDigits: 2 }) 

const Table = ({salaryWithTaxes, ESV, PDFO, VZ, pureSalary}) => {
    return (
        <table className='table text-center col'>
            <thead>
              <tr>
                <th>"Грязна" заробітна плата</th>
                <th>Єдиний соціальний внесок</th>
                <th>Податок на доходи з фізичних осіб</th>
                <th>Військовий збір</th>
                <th>Зарплата на руки</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{formatNumber.format(salaryWithTaxes)}</td>
                <td>{formatNumber.format(ESV)}</td>
                <td>{formatNumber.format(PDFO)}</td>
                <td>{formatNumber.format(VZ)}</td>
                <td>{formatNumber.format(pureSalary)}</td>
              </tr>
            </tbody>
          </table>
    )
}

Table.propTypes = {
    salaryWithTaxes: PropTypes.number.isRequired,
    ESV: PropTypes.number.isRequired,
    PDFO: PropTypes.number.isRequired,
    VZ: PropTypes.number.isRequired,
    pureSalary: PropTypes.number.isRequired,
}

export default Table;
