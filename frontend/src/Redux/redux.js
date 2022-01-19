import {combineReducers, createStore} from 'redux'
import navbarReducers from '../Reducers/navbarReducer'

let reducers = combineReducers({
    navbarPage: navbarReducers
})

let store = createStore(reducers)

export default store