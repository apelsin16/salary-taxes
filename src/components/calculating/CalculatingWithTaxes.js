import React, { Component,  } from 'react';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { rateESV, ratePDFO, rateVZ } from '../../variables/variables';
import Form from './../form/form';

const formatNumber = new Intl.NumberFormat('uk-UK', { style: 'currency', currency: 'UAH', minimumFractionDigits: 2 }) 
const parseNumber = (number, rate) => {return parseFloat(Math.round(number * rate * 100) / 100).toFixed(2)}

export default class CalculatingWithTaxes extends Component {
    
  render() {
    const { salary } = this.props;
    const ESV = parseNumber(salary, rateESV);
    const PDFO = parseNumber(salary, ratePDFO);
    const VZ = parseNumber(salary, rateVZ);
    const taxFree = salary- PDFO - VZ
    return (
      <Box>
          <Form {...this.props}/>
        <h2>
          Розрахунок заробітної плати і податків із суми нарахованої "грязної" заробітної плати 
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
                  <TableCell component="th" scope="row" align="center">{formatNumber.format(salary)}</TableCell>
                  <TableCell align="center">{ESV}</TableCell>
                  <TableCell align="center">{PDFO}</TableCell>
                  <TableCell align="center">{VZ}</TableCell>
                  <TableCell align="center">{formatNumber.format(taxFree)}</TableCell>
                </TableRow> 
            </TableBody>
          </Table>
        </Paper>
      </Box>
    );
  }
}
