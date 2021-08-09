import ServerApi from '../api/ServerApi'
import { GET_REQUIRED_CLASSES } from '../types'



export const getRequiredClasses = major => async dispatch => {
    const response = await ServerApi.get("/required",{
        headers: { major },
    })
    dispatch({ type: GET_REQUIRED_CLASSES, payload: response.data })
}