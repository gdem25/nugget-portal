/* eslint-disable import/no-anonymous-default-export */
import { ACTIVE_MENU_ITEM } from '../types'

const INITIAL_STATE = {

    activeMenuItem: 'Home'
}

export default (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case ACTIVE_MENU_ITEM:
            return { ...state, activeMenuItem: action.payload }
        default:
            return state
    }
}