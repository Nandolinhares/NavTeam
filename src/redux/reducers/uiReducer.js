import {
    LOADING_UI,
    POSITIVE_MESSAGES,
    CLEAR_LOADING_UI,
    SET_ERRORS,
    NAVER_DELETED,
    CLEAR_NAVER_DELETED,
    CLEAR_ERRORS
} from '../types';

const initialState = {
    loading: false,
    message: "",
    errors: {},
    deletedMessage: ""
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
        case NAVER_DELETED:
            return {
                ...state,
                deletedMessage: action.payload
            }
        case CLEAR_NAVER_DELETED:
            return {
                ...state,
                deletedMessage: ""
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: {}
            }                   
        default:
            return state;
    }
}