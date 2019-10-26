import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const formatNumber = new Intl.NumberFormat('uk-UK', {
  style: 'currency',
  currency: 'UAH',
  minimumFractionDigits: 2,
});

export default class Prepayment extends Component {
  state = {
    workDays: 0,
    prepaymentDay: 0,
    flag: false,
  };

  componentDidMount() {
    if (this.props.kindOfCalculating === 'withTaxes') {
      this.setState({
        ...this.state,
        flag: true,
      });
    } else {
      this.setState({
        ...this.state,
        flag: false,
      });
    }
  }

  handleChange = event => {
    this.setState(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  render() {
    const { salary, withTaxes, ESV, PDFO, VZ } = this.props;
    const { workDays, prepaymentDay, flag } = this.state;
    let salaryOne = +parseFloat(
      Math.round((salary / workDays) * prepaymentDay * 100) / 100,
    ).toFixed(2);
    let withTaxesOne = +parseFloat(
      Math.round((withTaxes / workDays) * prepaymentDay * 100) / 100,
    ).toFixed(2);
    // withTaxes / workDays * prepaymentDay;
    let ESVOne = (ESV / workDays) * prepaymentDay;
    let PDFOOne = (PDFO / workDays) * prepaymentDay;
    let VZOne = (VZ / workDays) * prepaymentDay;
    const taxes = +ESV + +PDFO + +VZ;
    const secondPart = workDays - prepaymentDay;
    return (
      <Box>
        <form autoComplete="off">
          <Grid container justify="space-between">
            <Grid item xs={6}>
              <FormControl>
                <InputLabel htmlFor="workDays">Днів</InputLabel>
                <Select
                  value={workDays}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'workDays',
                    id: 'workDays',
                  }}>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                </Select>
                <FormHelperText>Кількість робочих днів в місяці</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <InputLabel htmlFor="prepaymentDay">Днів</InputLabel>
                <Select
                  value={prepaymentDay}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'prepaymentDay',
                    id: 'prepaymentDay',
                  }}>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                </Select>
                <FormHelperText>
                  Кількість відпрацьованих днів в першій половині місяця
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </form>
        {this.state.workDays !== 0 && this.state.prepaymentDay !== 0 ? (
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Box mb={2}>
                <Paper>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>За першу половину місяця</TableCell>
                        <TableCell align="center">
                          Єдиний соціальний внесок
                        </TableCell>
                        <TableCell align="center">
                          Податок на доходи фізичних осіб
                        </TableCell>
                        <TableCell align="center">Військовий збір</TableCell>
                        <TableCell align="center">
                          Заробітна плата("чиста")
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row" align="center">
                          {flag
                            ? formatNumber.format(salaryOne)
                            : formatNumber.format(withTaxesOne)}
                        </TableCell>
                        <TableCell align="center">
                          {formatNumber.format(ESVOne)}
                        </TableCell>
                        <TableCell align="center">
                          {formatNumber.format(PDFOOne)}
                        </TableCell>
                        <TableCell align="center">
                          {formatNumber.format(VZOne)}
                        </TableCell>
                        <TableCell align="center">
                          {flag
                            ? formatNumber.format(salaryOne - PDFOOne - VZOne)
                            : formatNumber.format(
                                withTaxesOne - PDFOOne - VZOne,
                              )}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Box p={4}>
                    <Typography>
                      Загалом податків:{' '}
                      {formatNumber.format((taxes / workDays) * prepaymentDay)}
                    </Typography>
                    <Typography>
                      Загалом витрат(зарплата + податки):{' '}
                      {formatNumber.format(
                        (taxes / workDays) * prepaymentDay +
                          +salaryOne -
                          PDFOOne -
                          VZOne,
                      )}
                    </Typography>
                  </Box>
                </Paper>
                </Box>
                <Paper>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>За другу половину місяця</TableCell>
                        <TableCell align="center">
                          Єдиний соціальний внесок
                        </TableCell>
                        <TableCell align="center">
                          Податок на доходи фізичних осіб
                        </TableCell>
                        <TableCell align="center">Військовий збір</TableCell>
                        <TableCell align="center">
                          Заробітна плата("чиста")
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row" align="center">
                          {flag
                            ? formatNumber.format(salary - salaryOne)
                            : formatNumber.format(withTaxes - withTaxesOne)}
                        </TableCell>
                        <TableCell align="center">
                          {formatNumber.format(ESV - ESVOne)}
                        </TableCell>
                        <TableCell align="center">
                          {formatNumber.format(PDFO - PDFOOne)}
                        </TableCell>
                        <TableCell align="center">
                          {formatNumber.format(VZ - VZOne)}
                        </TableCell>
                        <TableCell align="center">
                          {flag
                            ? formatNumber.format(
                                salary -
                                  salaryOne -
                                  (VZ - VZOne) -
                                  (PDFO - PDFOOne),
                              )
                            : formatNumber.format(
                                withTaxes -
                                  withTaxesOne -
                                  (VZ - VZOne) -
                                  (PDFO - PDFOOne),
                              )}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Box p={4}>
                    <Typography>
                      Загалом податків:{' '}
                      {formatNumber.format((taxes / workDays) * secondPart)}
                    </Typography>
                    <Typography>
                      Загалом витрат(зарплата + податки):{' '}
                      {formatNumber.format(
                        (taxes / workDays) * secondPart +
                          +salary -
                          salaryOne -
                          (VZ - VZOne) -
                          (PDFO - PDFOOne),
                      )}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        ) : null}
      </Box>
    );
  }
}
