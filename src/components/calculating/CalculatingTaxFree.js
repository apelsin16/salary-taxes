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

const formatNumber = new Intl.NumberFormat('uk-UK', { style: 'currency', currency: 'UAH', minimumFractionDigits: 2 }) 
const parseNumber = (number, rate) => {return parseFloat(Math.round(number * rate * 100) / 100).toFixed(2)}

export default class CalculatingWithTaxes extends Component {
    
  render() {
    const { salary } = this.props;
    const withTaxes = salary/80.5*100
    let ESV = parseNumber(withTaxes, rateESV);
    const PDFO = parseNumber(withTaxes, ratePDFO);
    const VZ = parseNumber(withTaxes, rateVZ)
    const taxes = +ESV + +PDFO + +VZ;
    if (ESV >= maxESV ) ESV = maxESV;
    return (
      <Box>          
         <Form {...this.props}/>
        <h2>
          Розрахунок заробітної плати та податків від суми "чистої" заробітної плати
        </h2>
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
                  <TableCell component="th" scope="row" align="center">{formatNumber.format(withTaxes)}</TableCell>
                  <TableCell align="center">{formatNumber.format(ESV)}</TableCell>
                  <TableCell align="center">{formatNumber.format(PDFO)}</TableCell>
                  <TableCell align="center">{formatNumber.format(VZ)}</TableCell>
                  <TableCell align="center">{formatNumber.format(salary)}</TableCell>
                </TableRow>

            </TableBody>
          </Table>
          <Box  p={4}>
            <Typography>Загалом податків: {formatNumber.format(taxes)}</Typography>  
            <Typography>Загалом витрат(зарплата + податки): {formatNumber.format(taxes + +salary)}</Typography>          
          </Box>
        </Paper>
      </Box>
    );
  }
}
