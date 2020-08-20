import {
    SET_NAVERS,
    SET_ACTIVE_NAVER, CLEAR_ACTIVE_NAVER
} from '../types';

const initialState = {
    navers: [],
    activeNaver: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_NAVERS:
            return {
                ...state,
                navers: action.payload
            }
        case SET_ACTIVE_NAVER:
            return {
                ...state,
                activeNaver: action.payload
            }
        case CLEAR_ACTIVE_NAVER:
            return {
                ...state,
                activeNaver: {}
            }        
        default:
            return state;
    }
}