import React , { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography, Button, TextField, Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useInterval from './hooks/useInterval.react';

import { Grid } from '@material-ui/core';
import { 
    incInterval, decInterval, intervalSet,
    resetInterval ,resetIntervalUnit, setIntervalUnit,
} from './actions/intervalActionCreator';
import { setCounter, resetCounter, pauseCounter, resumeCounter } from './actions/counterActionCreator';

const useStyles = makeStyles((theme) => ({
  mainbox: {
    background: '#D1F2A5',
    color: 'white',
    margin:'350px',
    borderRadius: '40px',
  },
  optionBox: {
    background: '#597652',
    borderTopRightRadius: '40px',
    borderBottomRightRadius: '40px',
    padding: '20px',
  },
  counterBox: {
    padding: '10px',
    paddingTop: '40px',
    paddingBottom: '40px',
  },
  counterButtons: {
    padding: '10px',
  },
  intervalButtons: {
    paddingTop: '100px',
    padding: '20px',
  },


}));

function App() {
  const interval = useSelector((state) => state.interval.interval);
  const intervalUnit = useSelector((state) => state.interval.intervalUnit);
  const counter = useSelector((state) => state.counter.counter);
  const isPaused = useSelector((state) => state.counter.isPaused);
  const dispatch = useDispatch();
  const classes = useStyles();


  const [isMouseDown, setMouseDown] = useState({
    isIncMouseDown: false,
    isDecMouseDown: false,
  });
  const [intervals, setIntervals] = useState({
    FirstInterval: 1000,
    FirstIntervalUnit: 100,
  });
  
  const onMouseDown = () => {
    if(isMouseDown.isIncMouseDown){
      dispatch(incInterval())
    }
    if(isMouseDown.isDecMouseDown){
      dispatch(decInterval())
    }  
  };
  useInterval(() => {
    if(!isPaused){
      dispatch(setCounter(counter + 1));
    }
  }, interval);

  useInterval(onMouseDown, isMouseDown ? 700 : null);

  const handleIntervalChange = () => (e) => {

    setIntervals({...intervals, FirstInterval: e.target.value});
  };

  const handleIntervalUnitChange = () => (e) => {

    setIntervals({...intervals, FirstIntervalUnit: e.target.value});
  };
  
  const handleIntervalSubmit = () => {
    dispatch(intervalSet(intervals.FirstInterval));
  }

  const handleIntervalUnitSubmit = () => {
    dispatch(setIntervalUnit(intervals.FirstIntervalUnit));
  }

  return (
    <Box className={classes.mainbox}>
      <Grid container direction="row" justify="center" alignItems="stretch">
        <Grid item xs={8}>
          <Box className={classes.cont}>
            <Grid item xs container direction="column" justify="center" alignItems="stretch">
              <Grid item xs container direction="row" justify="center" alignItems="stretch">
                <Box className={classes.counterBox}>
                  <Typography variant="h1"> {counter} </Typography>
                </Box>
              </Grid>
              <Grid item x container direction="row" justift="space-around" alignItems="space-around" spacing={6} className={classes.intervalButtons}>
                <Grid item xs>
                  <Button
                    className="inc-interval"
                    onClick={() => dispatch(incInterval())}
                    onMouseDown = {() => setMouseDown({...isMouseDown, isIncMouseDown:true})}
                    onMouseUp={() => setMouseDown({...isMouseDown, isIncMouseDown:false})}
                    variant="contained"
                    fullWidth
                  >
                    +{intervalUnit}
                  </Button>
                </Grid>
                <Grid item xs>
                  {
                      isPaused ?
                      <Button
                        className="pause-button"
                        onClick={() => dispatch(resumeCounter())}
                        variant="contained"
                        fullWidth
                      >
                        Resume
                      </Button>
                      :
                      <Button
                        className="resume-button"
                        onClick={() => dispatch(pauseCounter())}
                        variant="contained"
                        fullWidth
                      >
                        Pause
                      </Button>
                      
                    }
                </Grid>
                <Grid item xs>
                  <Button
                    className="dec-interval"
                    onClick={() => dispatch(decInterval())}
                    onMouseDown = {() => setMouseDown({...isMouseDown, isDecMouseDown:true})}
                    onMouseUp={() => setMouseDown({...isMouseDown, isDecMouseDown:false})}
                    variant="contained"
                    fullWidth
                  >
                    -{intervalUnit}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={classes.optionBox}>
            <Grid item xs container direction="column" justify="center" alignItems="center" spacing={2}>
              <Grid item xs container direction="coloumn" justify="center" >
                <Typography variant="h4" className={classes.Interval}>Interval: {interval} </Typography>
              </Grid>
              <Grid item xs container direction="coloumn" justify="center" >
                <Typography variant="h4" className={classes.IntervalUnit}>Interval Unit: {intervalUnit} </Typography>
              </Grid>
              <Grid item xs container direction="row" justify="flex-end" alignItems="stretch">
                <Grid item xs={8}>
                  <TextField
                    label="Enter Interval"
                    className={classes.intervalInput}
                    onChange={handleIntervalChange()}
                    value={intervals.FirstInterval}
                    type="number"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    className="set-interval-submit"
                    onClick={() => handleIntervalSubmit()}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs container direction="row" justify="flex-end" alignItems="stretch">
                <Grid item xs={8}>
                  <TextField
                    label="Enter Interval Unit"
                    onChange={handleIntervalUnitChange()}
                    className={classes.intervalUnitInput}
                    value={intervals.FirstIntervalUnit}
                    type="number"
                    color="primary"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    className="set-interval-unit-submit"
                    onClick={() => handleIntervalUnitSubmit()}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs>
                <Button 
                  className={classes.resetCounter}
                  onClick={() => dispatch(resetCounter())}
                  variant="contained"
                  fullWidth
                >
                  reset Counter
                </Button>
              </Grid>
              <Grid item xs>
              <Button 
                className={classes.resetInterval}
                onClick={() => dispatch(resetInterval())}
                variant="contained"
                fullwidth
              >
                reset Interval
              </Button>
              </Grid>
              <Grid item xs>
                <Button
                  className={classes.resetIntervalUnit}
                  onClick={() => dispatch(resetIntervalUnit())}
                  variant="contained"
                  fullwidth
                >
                  Reset Interval Unit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
