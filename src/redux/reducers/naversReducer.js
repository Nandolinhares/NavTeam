import {
    SET_NAVERS
} from '../types';

const initialState = {
    navers: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_NAVERS:
            return {
                ...state,
                navers: action.payload
            }
        default:
            return state;
    }
}