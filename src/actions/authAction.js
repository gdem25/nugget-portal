import { SIGN_IN, SIGN_OUT } from '../types'


export const signIn = (name, email, userid,image) => {
    const studentLogInfo = { name, email, userid, image }
    return {
        type: SIGN_IN,
        payload: studentLogInfo
    }
}

export const signOut = () => {
    
    return {
        type: SIGN_OUT,
    }
}