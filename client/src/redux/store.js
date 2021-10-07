import {compose, createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducerMemories from './reducers/reducerMemories'
import reducerAuth from './reducers/reducerAuth'

const initial_state = {
    memories: [],
    auth: {}
}

const composeEnhancer = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE || compose
const store = createStore(
    combineReducers({
        memories: reducerMemories,
        auth: reducerAuth
    }),
    initial_state,
    composeEnhancer(applyMiddleware(thunk))
)

export default store