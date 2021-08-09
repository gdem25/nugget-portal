/* eslint-disable import/no-anonymous-default-export */
import { GET_REQUIRED_CLASSES } from '../types'

const INITIAL_STATE = {
    requiredClasses: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_REQUIRED_CLASSES:
            return { ...state, requiredClasses: action.payload }
        default:
            return state
    }
}

