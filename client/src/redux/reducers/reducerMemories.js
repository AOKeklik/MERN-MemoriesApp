import {FETCH_ALL,CREATE,UPDATE,DELETE} from '../constants/actionConstants'

    const reducerMemories = (state = {message: '', memories: []}, action) => {
        const {type, payload} = action
        switch (type) {
            case FETCH_ALL:
                return {
                    ...state,
                    memories: payload
                }
            case CREATE:
                return {
                    message: payload.message,
                    memories: [
                        ...state.memories,
                        payload.newData
                    ]
                }
            case UPDATE:
                return {
                    message: payload.message,
                    memories: state.memories.map(n => {
                        return (n._id === payload.updateData._id) 
                            ? payload.updateData
                            : n
                    })
                }
                case DELETE: 
                    return {
                        message: payload.message,
                        memories: state.memories.filter(n => n._id !== payload.id)
                    }
            default:
                return state
        }
    }

    export default reducerMemories