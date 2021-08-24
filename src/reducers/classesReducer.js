/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash'
import { 
    GET_REQUIRED_CLASSES, 
    GET_SEARCHED_CLASSES,
    ADD_TO_SHOPPING_CART,
    ADD_CLASS,
    GET_ENROLLED_CLASSES,
    DROP_CLASS,
    SWAP_CLASS
} from '../types'

const INITIAL_STATE = {
    requiredClasses: [],
    classesSearched: [],
    shoppingCart: [],
    enrolledClasses: [],
    error: ''
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
            if(!filtered[0]) {
                return {...state, classesSearched: ['error'] }
            }
            else {
                const added = filtered.map(each => {
                    return {...each, term: term }
                })
                return { ...state, classesSearched: added }
            }
        case ADD_TO_SHOPPING_CART:
            const classid = action.payload
            const chosen = _.filter(state.classesSearched, { classid } )
            return {...state, shoppingCart: [...state.shoppingCart, chosen[0]] }
        case ADD_CLASS:
                const newShCart = _.filter(state.shoppingCart, (each) => {
                    return each.classid !== action.payload.classid
                })
                if(action.payload.error === 'class taken') {
                    return {...state , error: action.payload.error, shoppingCart: newShCart}
                }
                else if (action.payload.error === 'Prereq Not Taken' ) {
                    return { ...state , error: action.payload.error, shoppingCart: newShCart }
                }
                else if (action.payload.classid) {
                    const clasid = action.payload.classid
                    const clas = _.filter(state.shoppingCart, { classid: clasid })
                    return {...state, 
                        shoppingCart: newShCart, 
                        enrolledClasses: [...state.enrolledClasses, clas[0]],
                        error : ''
                    }

                }
            return state
        case GET_ENROLLED_CLASSES:
            return {...state, enrolledClasses: action.payload }
        case DROP_CLASS:
            const clasid = action.payload.classid
            const newClasSet = _.filter(state.enrolledClasses, EClass => {
                return EClass.classid !== clasid
            } )
            return {...state, enrolledClasses: newClasSet }
        case SWAP_CLASS:
            const newSCart = _.filter(state.shoppingCart, each => {
                return each.classid !== action.payload.classid
            })
            if(action.payload.error) {
                return { ...state, shoppingCart: newSCart, error: action.payload.error }
            }
            else {
                const classid = action.payload.classid
                const newEnrClass = _.filter(state.enrolledClasses, each => {
                    return each.sectionid !== action.payload.sectionid
                } )
                const clas = _.filter(state.shoppingCart, { classid } )
                newEnrClass.push(clas[0])
                return {
                    ...state,
                    shoppingCart: newSCart,
                    enrolledClasses: newEnrClass,
                    error: ''
                }
            }
        default:
            return state
    }
}

