import {
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED
} from '../types';

const initialState = {
    userInformation: {},
    authenticated: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                userInformation: action.payload
            }
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }
        case SET_UNAUTHENTICATED:
            return {
                ...state,
                authenticated: false
            }        
        default:
            return state;
    }
}