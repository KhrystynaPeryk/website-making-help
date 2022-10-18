import { CLOSE_MODAL, OPEN_MODAL } from '../actions/types';

export function isModalOpen( state = false, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false
    default:
      return state;
  }
}