import { handleActions } from 'redux-actions';
import {
    incInterval, decInterval, intervalSet,
    resetInterval ,setIntervalUnit, resetIntervalUnit,
} from '../actions/intervalActionCreator';

const initialState = {
    interval: 1000,
    intervalUnit: 100,
};
export default handleActions({
    [incInterval]: (state) => ({ ...state, interval: parseInt(state.interval) + parseInt(state.intervalUnit) }), //pars to int cause it concats some times
    [decInterval]: (state) => ({ ...state, interval: state.interval - state.intervalUnit }),
    [intervalSet]: (state, { payload }) => ({ ...state, interval: payload }),
    [resetInterval]: (state) => ({ ...state, interval: 1000 }),
    [setIntervalUnit]: (state, { payload }) => ({ ...state, intervalUnit: payload}),
    [resetIntervalUnit]: (state) => ({ ...state, intervalUnit: 100}),

}, initialState);