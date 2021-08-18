/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash'
import { GET_CHAT_ROOMS, GET_CHAT_COMMENT, POST_CHAT_COMMENT } from '../types'


const INITIAL_STATE = {
    chatRooms: [],
    chatComments:[]
}

export default ( state =INITIAL_STATE, action ) => {
    switch(action.type) {
        case GET_CHAT_ROOMS:
            const unique = _.uniqBy(action.payload, 'sectionid')
            return { ...state, chatRooms: unique }
        case GET_CHAT_COMMENT:
            return { ...state, chatComments: action.payload }
        case POST_CHAT_COMMENT:
            return { ...state, chatComments: [ ...state.chatComments, action.payload ] }
        default:
            return state
    }
}