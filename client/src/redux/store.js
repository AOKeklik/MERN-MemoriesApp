import {compose, createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducerMemories from './reducers/reducerMemories'
import reducerUser from './reducers/reducerAuth'

const initial_state = {
    memories: {
        memories: [],
    },
    user: {}
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    combineReducers({
        memories: reducerMemories,
        user: reducerUser
    }),
    initial_state,
    composeEnhancer(applyMiddleware(thunk))
)

export default store