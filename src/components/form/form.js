import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Form = props => {
  return (
    <Paper>
      <Box p={4}>
        <FormControl component="fieldset">
          <Grid container>
            <Grid item xs={3}>
              <Box mt={4}>
                <Input
                  defaultValue={props.salary}
                  onChange={props.onHandleInput}
                  inputProps={{
                    'aria-label': 'Введіть суму заробітної плати',
                  }}
                />
                грн
              </Box>
            </Grid>
            <Grid item xs={9}>
              <FormLabel component="legend">
                Розрахунок заробітної плати та податків
              </FormLabel>
              <RadioGroup
                aria-label="c"
                name="salary"
                value={props.kindOfCalculating}
                onChange={props.onHandleChange}>
                <FormControlLabel
                  value="withTaxes"
                  control={<Radio />}
                  label="Заробітна плата з податками - 'грязна'"
                />
                <FormControlLabel
                  value="taxFree"
                  control={<Radio />}
                  label="Заробітна плата без податків - 'чиста'"
                />
              </RadioGroup>
            </Grid>
            <FormHelperText>
              Оберіть вид розрахунку(Нараховану заробітну плату("Грязну") чи
              заробітну плату після утримання податку("чисту")).
            </FormHelperText>
          </Grid>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default Form;
