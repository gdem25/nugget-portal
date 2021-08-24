/* eslint-disable import/no-anonymous-default-export */
import { 
    SET_SEARCH_TABLE_CHECKBOX, 
    SET_SEARCH_TABLE_CB_DISABLED,
    SET_SHOP_CART_CB,
    SET_ENROLLED_CB,
    CLASS_SEARCH_ERROR
} from '../types'


const INITIAL_STATE = {
    searchTableCBValue: '',
    searchTableCBDisabled: false,
    getShoppingCartCB: '',
    getEnrolledCB: '',
    classSearchError: 'set'
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
        case CLASS_SEARCH_ERROR:
            return { ...state, classSearchError: action.payload }
        default:
            return state
    }
}

