import React, { Component,  } from 'react';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { rateESV, ratePDFO, rateVZ, maxESV } from '../../variables/variables';
import Form from './../form/form';
import { Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Prepayment from '../prepayment/Prepayment';

const formatNumber = new Intl.NumberFormat('uk-UK', { style: 'currency', currency: 'UAH', minimumFractionDigits: 2 }) 
const parseNumber = (number, rate) => {return parseFloat(Math.round(number * rate * 100) / 100).toFixed(2)}

export default class CalculatingWithTaxes extends Component {

  state = {
    prepayment: false
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };
    
  render() {
    const { salary, kindOfCalculating } = this.props;
    const withTaxes = +parseFloat(Math.round(salary/80.5*100 * 100) / 100).toFixed(2)
    let ESV = +parseNumber(withTaxes, rateESV);
    let PDFO = +parseNumber(withTaxes, ratePDFO);
    let VZ = +parseNumber(withTaxes, rateVZ)
    if (kindOfCalculating === 'withTaxes') {
      ESV = +parseNumber(salary, rateESV);;
      PDFO = +parseNumber(salary, ratePDFO);;
      VZ = +parseNumber(salary, rateVZ);;
    }
    if (ESV >= maxESV ) ESV = maxESV;
    const taxes = +ESV + +PDFO + +VZ;
    return (
      <Box>          
         <Form {...this.props}/>
         { kindOfCalculating === 'withTaxes' ? 
          <h2>Розрахунок заробітної плати і податків із суми нарахованої "грязної" заробітної плати</h2> :
          <h2>Розрахунок заробітної плати та податків від суми "чистої" заробітної плати</h2>}
        
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Нарахована заробітна плата</TableCell>
                <TableCell align="center">Єдиний соціальний внесок</TableCell>
                <TableCell align="center">Податок на доходи фізичних осіб</TableCell>
                <TableCell align="center">Військовий збір</TableCell>
                <TableCell align="center">Заробітна плата("чиста")</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
              
                  <TableCell component="th" scope="row" align="center">{kindOfCalculating === 'withTaxes' ? formatNumber.format(salary) : formatNumber.format(withTaxes) }</TableCell>
                  <TableCell align="center">{formatNumber.format(ESV)}</TableCell>
                  <TableCell align="center">{formatNumber.format(PDFO)}</TableCell>
                  <TableCell align="center">{formatNumber.format(VZ)}</TableCell>
                  <TableCell align="center">{kindOfCalculating === 'withTaxes' ? formatNumber.format(salary - PDFO - VZ) : formatNumber.format(salary)}</TableCell>
                </TableRow>

            </TableBody>
          </Table>
          <Box  p={4}>
            <Typography>Загалом податків: {formatNumber.format(taxes)}</Typography>  
            <Typography>Загалом витрат(зарплата + податки): {kindOfCalculating === 'withTaxes' ? formatNumber.format(+salary + +ESV) : formatNumber.format(+withTaxes + +ESV) }</Typography>          
          </Box>
        </Paper>
        <Box mt={2}>
          <Paper mt={2}>
            <Box  p={4}>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox checked={this.state.prepayment} onChange={this.handleChange('prepayment')} value="prepayment" />
                  }
                  label="Розрахувати з авансом"
                  />
                </FormGroup>
                {this.state.prepayment && 
                  <Prepayment  
                    key={kindOfCalculating}
                    salary={salary} 
                    withTaxes={withTaxes}
                    ESV={ESV}
                    PDFO={PDFO}
                    VZ={VZ}
                    kindOfCalculating={kindOfCalculating}
                  />
                }
              </Box>
          </Paper>
        </Box>
      </Box>
    );
  }
}
