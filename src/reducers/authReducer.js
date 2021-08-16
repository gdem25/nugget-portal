/* eslint-disable import/no-anonymous-default-export */
import { SIGN_IN, SIGN_OUT, SELECT_MAJOR, IF_MAJOR_SELECTED } from '../types'

const INITIAL_STATE = {
    isSignedIn: null,
    studentLogInfo: null,
    studentMajor: null
} 


export default (state= INITIAL_STATE ,action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, studentLogInfo: action.payload }
        case SIGN_OUT:
            return { ...state, isSignedIn: false, studentLogInfo: null, studentMajor: null }
        case SELECT_MAJOR:
            return { ...state, studentMajor: action.payload }
        case IF_MAJOR_SELECTED:
            return { ...state, studentMajor: action.payload  }
        default:
            return state
    }
}