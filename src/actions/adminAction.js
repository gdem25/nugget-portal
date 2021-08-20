import ServerApi from '../api/ServerApi'
import { 
    GET_ADMIN_REQUIRED,
    POST_TO_TRANSCRIPT, 
    POST_GRADING_LIST,
    GET_TRANSCRIPT,
    GET_SEMESTER_TRANSCRIPT
} from '../types'


export const getAdminRequired = userid => async dispatch => {
    const response = await ServerApi.get('/admin', {
        headers: { userid }
    })
    dispatch({ type: GET_ADMIN_REQUIRED, payload: response.data })
}

export const postToTranscript = ( classid, userid, gpa, grade, term, units, sectionid ) => async dispatch => {
    const response = await ServerApi.post('/transcript', {
        classid,
        userid,
        gpa,
        grade,
        term,
        units,
        sectionid
    })
    dispatch({ type: POST_TO_TRANSCRIPT, payload: response.data })
}

export const postGradingList = ( classid, grade, term, units ) => {
    const response  = { classid, grade, term, units }
    return{
        type: POST_GRADING_LIST,
        payload: response
    }
}

export const getTranscript = userid => async dispatch => {
    const response = await ServerApi.get('/transcript', {
        headers: { userid }
    })
    dispatch({ type: GET_TRANSCRIPT, payload: response.data })
}

export const getSemesterTranscript = term => {
    return{
        type: GET_SEMESTER_TRANSCRIPT,
        payload: term
    }
}