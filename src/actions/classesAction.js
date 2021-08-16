import ServerApi from '../api/ServerApi'
import { 
     GET_REQUIRED_CLASSES,
     GET_SEARCHED_CLASSES,
     ADD_TO_SHOPPING_CART,
     ADD_CLASS,
     GET_ENROLLED_CLASSES,
     DROP_CLASS,
     SWAP_CLASS
    } from '../types'



export const getRequiredClasses = major => async dispatch => {
    const response = await ServerApi.get("/required",{
        headers: { major },
    })
    dispatch({ type: GET_REQUIRED_CLASSES, payload: response.data })
}

export const searchClass = (term, name, sectionid) => {
    const response = { term, name, sectionid }
    return {
        type: GET_SEARCHED_CLASSES,
        payload: response
    }
}

export const addToShoppingCart = (classid) => {
    return {
        type: ADD_TO_SHOPPING_CART,
        payload: classid
    }
}

export const addClass = (classid, userid, sectionid, prereq, term) => async dispatch => {
    const response = await ServerApi.post('/enrolled', {
        classid,
        userid,
        sectionid,
        prereq,
        term
    })
    dispatch({ type: ADD_CLASS, payload: response.data })
}

export const getEnrolledClasses = userid => async dispatch => {
    const response = await ServerApi.get('/enrolled', {
        headers: {
            userid
        }
    })
    dispatch({ type: GET_ENROLLED_CLASSES, payload: response.data })
}


export const dropClass = ( classid, userid ) => async dispatch => {
    const response = await ServerApi.delete('/enrolled', {
        headers: {
            classid,
            userid
        }
    })
    dispatch({ type: DROP_CLASS, payload: response.data })
}

export const swapClass = ( classid, userid, sectionid, term ) => async dispatch => {
    const response = await ServerApi.put('/enrolled', {
        classid,
        userid,
        sectionid,
        term
    })
    dispatch({ type: SWAP_CLASS, payload: response.data })
}