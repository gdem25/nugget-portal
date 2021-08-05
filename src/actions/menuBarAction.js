import { ACTIVE_MENU_ITEM } from '../types'


export const setActiveMenuItem =  (item) => {
    return {
        type: ACTIVE_MENU_ITEM,
        payload: item
    }
}