import { CLOSE_MODAL, OPEN_MODAL, CLIENT_SERVICE_TYPE } from './types';

export const openModal = () => {
    return {
        type: OPEN_MODAL
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

export const clientServiceType = (service) => {
    return {
        type: CLIENT_SERVICE_TYPE,
        payload: service
    }
}