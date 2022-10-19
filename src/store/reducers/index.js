import { combineReducers } from 'redux';
import { isModalOpen, clientService } from './reducers';

const allReducers = combineReducers({
    isModalOpen,
    clientService
});

export default allReducers;