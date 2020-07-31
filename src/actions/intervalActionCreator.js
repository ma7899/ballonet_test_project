import { ActionTypes } from '../constants/ActionTypes';
import { createAction } from 'redux-actions';

const {
    INTERVAL_INC_INTERVAL,
    INTERVAL_DEC_INTERVAL,
    INTERVAL_INTERVAL_SET,
    INTERVAL_RESET_INTERVAL,
    INTERVAL_SET_INTERVAL_UNIT,
    INTERVAL_RESET_INTERVAL_UNIT,
} = ActionTypes;

export const incInterval = createAction(INTERVAL_INC_INTERVAL);
export const decInterval = createAction(INTERVAL_DEC_INTERVAL);
export const intervalSet = createAction (INTERVAL_INTERVAL_SET);
export const resetInterval = createAction(INTERVAL_RESET_INTERVAL);
export const setIntervalUnit = createAction(INTERVAL_SET_INTERVAL_UNIT);
export const resetIntervalUnit = createAction(INTERVAL_RESET_INTERVAL_UNIT);
