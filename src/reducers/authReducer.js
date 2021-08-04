/* eslint-disable import/no-anonymous-default-export */
import { SIGN_IN, SIGN_OUT } from '../types'

const INITIAL_STATE = {
    isSignedIn: null,
    studentLogInfo: null
} 


export default (state= INITIAL_STATE ,action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, studentLogInfo: action.payload }
        case SIGN_OUT:
            return { ...state, isSignedIn: false, studentLogInfo: null }
        default:
            return state
    }
}