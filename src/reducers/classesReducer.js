/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash'
import { 
    GET_REQUIRED_CLASSES, 
    GET_SEARCHED_CLASSES,
    ADD_TO_SHOPPING_CART
} from '../types'

const INITIAL_STATE = {
    requiredClasses: [],
    classesSearched: [],
    shoppingCart: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_REQUIRED_CLASSES:
            return { ...state, requiredClasses: action.payload }
        case GET_SEARCHED_CLASSES:
            const term = action.payload.term
            const name = action.payload.name
            const sectionid = action.payload.sectionid
            const filtered = _.filter(state.requiredClasses,{ name, sectionid })
            const response = filtered.map(EClass => {
                return {
                    name: EClass.name,
                    section: EClass.section,
                    teacher: EClass.teacher,
                    rate: EClass.rate,
                    classid: EClass.classid,
                    description: EClass.description,
                    term: term
                }
            })
            return { ...state, classesSearched: response }
        case ADD_TO_SHOPPING_CART:
            const classid = action.payload
            const chosen = _.filter(state.classesSearched, { classid } )
            return {...state, shoppingCart: [...state.shoppingCart, chosen[0]] }
        default:
            return state
    }
}

