import { createStore , applyMiddleware } from "redux"
import { rootReducer } from "./Reducer"
import thunk from 'redux-thunk';

export const configureStore = () => {
    let store = createStore(rootReducer , applyMiddleware(thunk))

    return store;
}   