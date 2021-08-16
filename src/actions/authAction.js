import { SIGN_IN, SIGN_OUT, SELECT_MAJOR, IF_MAJOR_SELECTED } from '../types'
import ServerApi from '../api/ServerApi'

export const signIn = (name, email, userid, image) => async (dispatch) =>  {
    const response  = await ServerApi.post("/signin", {
        name,
        email,
        userid,
        image
    })
    dispatch({ type: SIGN_IN, payload: response.data })
}

export const signOut = () => {
    
    return {
        type: SIGN_OUT,
    }
}


export const setSelectedMajor = (major,userid) => async (dispatch) => {
    const response = await ServerApi.put("/signin", { userid, major })
    dispatch({ type: SELECT_MAJOR, payload: response.data })
}

export const ifMajorSelected = major => {
    return {
        type: IF_MAJOR_SELECTED,
        payload: major
    }
}