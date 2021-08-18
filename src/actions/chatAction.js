import ServerApi from '../api/ServerApi'
import { GET_CHAT_ROOMS, GET_CHAT_COMMENT, POST_CHAT_COMMENT } from '../types'



export const getChatRooms = major => async dispatch => {
    const response = await ServerApi.get('/chatrooms', { 
        headers: { major }
     })
     dispatch({ type: GET_CHAT_ROOMS, payload: response.data })
}


export const getChatComments = sectionid => async dispatch => {
    const response = await ServerApi.get('/chatcomments', {
        headers: { sectionid }
    })
    dispatch({ type: GET_CHAT_COMMENT, payload: response.data })
}

export const postChatComment = ( name, userid, image, sectionid, comment ) => async dispatch => {
    const response = await ServerApi.post('/chatcomments', {
        name,
        userid,
        image,
        sectionid,
        comment
    })
    dispatch({ type: POST_CHAT_COMMENT, payload: response.data })
}