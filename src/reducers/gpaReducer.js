/* eslint-disable import/no-anonymous-default-export */
import { CALCULATE_GPA } from '../types'



const INITIAL_STATE = {
    semesterGpa: 0
}

export default (state=INITIAL_STATE,action) => {
    switch(action.type){
        case CALCULATE_GPA:
            return {...state, semesterGpa: action.payload }
        default:
            return state
    }
} 