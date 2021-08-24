import { 
    SET_SEARCH_TABLE_CHECKBOX, 
    SET_SEARCH_TABLE_CB_DISABLED,
    SET_SHOP_CART_CB,
    SET_ENROLLED_CB,
    CLASS_SEARCH_ERROR
} from '../types'



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

export const setShoppingCartCB = (value) => {
    return {
        type: SET_SHOP_CART_CB,
        payload: value
    }
}

export const setEnrolledCB = (value) => {
    return {
        type: SET_ENROLLED_CB,
        payload: value
    }
}

export const setClassSearchError = value => {
    return {
        type: CLASS_SEARCH_ERROR,
        payload: value
    }
}