/* eslint-disable import/no-anonymous-default-export */
import { SET_SEARCH_TABLE_CHECKBOX, SET_SEARCH_TABLE_CB_DISABLED } from '../types'


const INITIAL_STATE = {
    searchTableCBValue: '',
    searchTableCBDisabled: false
}


export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_SEARCH_TABLE_CHECKBOX:
            return { ...state, searchTableCBValue: action.payload }
        case SET_SEARCH_TABLE_CB_DISABLED:
            return { ...state, searchTableCBDisabled: action.payload }
        default:
            return state
    }
}

