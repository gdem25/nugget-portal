import { SET_SEARCH_TABLE_CHECKBOX, SET_SEARCH_TABLE_CB_DISABLED } from '../types'



export const  searchTableCheckboxValue = (value) => {
    return {
        type: SET_SEARCH_TABLE_CHECKBOX,
        payload: value
    }
}

export const setSearchTableCBDisabled = (value) => {
    return {
        type: SET_SEARCH_TABLE_CB_DISABLED,
        payload: value
    }
}