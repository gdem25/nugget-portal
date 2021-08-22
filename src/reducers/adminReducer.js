/* eslint-disable import/no-anonymous-default-export */
import { 
    GET_ADMIN_REQUIRED, 
    POST_GRADING_LIST, 
    GET_TRANSCRIPT, 
    POST_TO_TRANSCRIPT,
    GET_SEMESTER_TRANSCRIPT
} from '../types'
import _ from 'lodash'

const INITIAL_STATE = {
    adminRequired: [],
    gradingList: [],
    transcript: [],
    semTranscript: []
}


export default ( state=INITIAL_STATE, action ) => {
    switch(action.type) {
        case GET_ADMIN_REQUIRED:
            const classOptions = action.payload.map(( each,index ) => {
                return{
                    key: index,
                    text: each.sectionid,
                    value: each.classid
                }
            } )
            return { ...state, adminRequired: classOptions }
        case POST_GRADING_LIST:
            const filtered = _.filter(state.adminRequired, each => {
                return each.value !== action.payload.classid
            } )
            return { ...state, adminRequired: filtered  
                ,gradingList: [ ...state.gradingList, action.payload ] }
        case GET_TRANSCRIPT:
            return { ...state, transcript: action.payload }
        case POST_TO_TRANSCRIPT:
            return { ...state,
                 transcript: [ ...state.transcript, action.payload ]
                 }
        case GET_SEMESTER_TRANSCRIPT:
            const semester = _.filter( state.transcript ,each => {
                return each.term === action.payload
            })
            return { ...state, semTranscript: semester }
        default:
            return state
    }
}