/* eslint-disable import/no-anonymous-default-export */
import { 
    SET_SEARCH_TABLE_CHECKBOX, 
    SET_SEARCH_TABLE_CB_DISABLED,
    SET_SHOP_CART_CB,
    SET_ENROLLED_CB
} from '../types'


const INITIAL_STATE = {
    searchTableCBValue: '',
    searchTableCBDisabled: false,
    getShoppingCartCB: '',
    getEnrolledCB: ''
}


export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_SEARCH_TABLE_CHECKBOX:
            return { ...state, searchTableCBValue: action.payload }
        case SET_SEARCH_TABLE_CB_DISABLED:
            return { ...state, searchTableCBDisabled: action.payload }
        case SET_SHOP_CART_CB:
            return { ...state, getShoppingCartCB: action.payload }
        case SET_ENROLLED_CB:
            return {...state, getEnrolledCB: action.payload }
        default:
            return state
    }
}

