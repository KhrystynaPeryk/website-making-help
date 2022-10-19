import { CLOSE_MODAL, OPEN_MODAL, CLIENT_SERVICE_TYPE } from '../actions/types';

export function isModalOpen(state = false, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false
    default:
      return state;
  }
}

export function clientService(state = null, action) {
  switch (action.type) {
    case CLIENT_SERVICE_TYPE:
      return {
        ...state,
        type: action.payload
      }
    default:
      return state;
  }
}