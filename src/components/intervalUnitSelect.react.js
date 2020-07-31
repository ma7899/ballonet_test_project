import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120,
    width: '100%',
  },
}));

export default function IntervalUnitSelect(prop) {
  const classes = useStyles();
  const [intervalUnit, setIntervalUnit] = React.useState('1000');

  const handleChange = (event) => {
    setIntervalUnit(event.target.value);
    prop.callbackFromParent(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <TextField
          select
          label="Interval Unit"
          value={intervalUnit}
          margin="dense"
          fullWidth
          onChange={handleChange}
        >
          <MenuItem value="100">100</MenuItem>
          <MenuItem value="200">200</MenuItem>
          <MenuItem value="500">500</MenuItem>
          <MenuItem value="1000">1000</MenuItem>
        </TextField>
      </FormControl>
    </div>
  );
}