import { createStore, applyMiddleware } from 'redux'
import reducer  from "./reducers/reducers";
import thunk from 'redux-thunk';

export let store = createStore(reducer,applyMiddleware(thunk))








