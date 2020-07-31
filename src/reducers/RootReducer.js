import { combineReducers } from 'redux';
import intervalReducer from './intervalReducer';
import counterReducer from './counterReducer';

const combinedReducers = combineReducers({
    interval: intervalReducer,
    counter: counterReducer,
});

export default (state, action) => {
    return combinedReducers(state, action);
};