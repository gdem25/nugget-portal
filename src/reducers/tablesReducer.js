/* eslint-disable import/no-anonymous-default-export */
import { 
    SET_SEARCH_TABLE_CHECKBOX, 
    SET_SEARCH_TABLE_CB_DISABLED,
    SET_SHOP_CART_CB
} from '../types'


const INITIAL_STATE = {
    searchTableCBValue: '',
    searchTableCBDisabled: false,
    getShoppingCartCB: ''
}


export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_SEARCH_TABLE_CHECKBOX:
            return { ...state, searchTableCBValue: action.payload }
        case SET_SEARCH_TABLE_CB_DISABLED:
            return { ...state, searchTableCBDisabled: action.payload }
        case SET_SHOP_CART_CB:
            return { ...state, getShoppingCartCB: action.payload }
        default:
            return state
    }
}

