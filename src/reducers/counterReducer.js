import { handleActions } from 'redux-actions';
import { setCounter, resetCounter, pauseCounter, resumeCounter } from '../actions/counterActionCreator';

const initialState = {
    counter: 0,
    isPaused: true,
};
export default handleActions({
    [pauseCounter]: (state) => ({ ...state, isPaused: true}),
    [resumeCounter]: (state) => ({ ...state, isPaused: false}),
    [setCounter]: (state, { payload }) => ({ ...state, counter: payload}),
    [resetCounter]: (state) => ({ ...state, counter: 0}),

}, initialState);