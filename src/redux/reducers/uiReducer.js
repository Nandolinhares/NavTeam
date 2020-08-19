import {
    LOADING_UI,
    POSITIVE_MESSAGES,
    CLEAR_LOADING_UI,
    SET_ERRORS
} from '../types';

const initialState = {
    loading: false,
    message: "",
    errors: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        case CLEAR_LOADING_UI:
            return {
                ...state,
                loading: false
            }
        case POSITIVE_MESSAGES:
            return {
                ...state,
                message: action.payload
            }
            case SET_ERRORS:
                return {
                    ...state,
                    errors: action.payload
                }        
        default:
            return state;
    }
}