import { combineReducers } from 'redux';
import { isModalOpen } from './reducers';

const allReducers = combineReducers({
    isModalOpen
});

export default allReducers;