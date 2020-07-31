import { ActionTypes } from '../constants/ActionTypes';
import { createAction } from 'redux-actions';

const {
    COUNTER_SET_COUNTER,
    COUNTER_RESET_COUNTER,
    COUNTER_PAUSE_COUNTER,
    COUNTER_RESUME_COUNTER,
} = ActionTypes;

export const setCounter = createAction(COUNTER_SET_COUNTER);
export const resetCounter = createAction(COUNTER_RESET_COUNTER);
export const pauseCounter = createAction(COUNTER_PAUSE_COUNTER);
export const resumeCounter = createAction(COUNTER_RESUME_COUNTER);


