import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';

const Form = props => {
  return (
    <FormControl component="fieldset">
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
          label="Нарахована заробітна плата"
        />
        <FormControlLabel
          value="taxFree"
          control={<Radio />}
          label="Заробітна плата, після утримання податків"
        />
      </RadioGroup>
      <FormHelperText>
        Оберіть вид розрахунку(Нараховану заробітну плату("Грязну") чи заробітну
        плату після утримання податку("чисту")).
      </FormHelperText>
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
    </FormControl>
  );
};

export default Form;