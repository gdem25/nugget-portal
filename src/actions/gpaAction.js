
import _ from 'lodash'
import { CALCULATE_GPA } from '../types'



export const calculateGPA = (units,grade) => {
    //first
    let totalGradePoints = 0;
    for(let i = 0; i < units.length; i++) {
        totalGradePoints += units[i] * grade[i]
    }

    let totalUnits = _.sum(units)

    let Gpa_result = totalGradePoints / totalUnits
    
    return {
        type: CALCULATE_GPA,
        payload: Gpa_result.toFixed(1)
    }
    
}