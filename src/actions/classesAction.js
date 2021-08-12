import ServerApi from '../api/ServerApi'
import { 
     GET_REQUIRED_CLASSES,
     GET_SEARCHED_CLASSES,
     ADD_TO_SHOPPING_CART 
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