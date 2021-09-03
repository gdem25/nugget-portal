/* eslint-disable import/no-anonymous-default-export */
import { CALCULATE_GPA, CALCULATE_TOTAL_GPA } from '../types'



const INITIAL_STATE = {
    semesterGpa: 0.0,
    totalGpa: 0.0
}

export default (state=INITIAL_STATE,action) => {
    switch(action.type){
        case CALCULATE_GPA:
            return {...state, semesterGpa: action.payload }
        case CALCULATE_TOTAL_GPA:
            return {...state, totalGpa: action.payload }
        default:
            return state
    }
} 