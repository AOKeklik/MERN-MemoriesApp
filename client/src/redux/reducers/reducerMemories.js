import {FETCH_ALL,CREATE,UPDATE,DELETE, DELETE_FAIL, UPDATE_FAIL, CREATE_FAIL} from '../constants/actionConstants'

    const reducerMemories = (state = {memories: []}, action) => {
        const {type, payload} = action
        switch (type) {
            case FETCH_ALL:
                return {
                    ...state,
                    memories: payload
                }
            case CREATE:
                return {
                    ...state,
                    error: {variant: 'success', message: payload.message},
                    memories: [
                        ...state.memories,
                        payload.newData
                    ]
                }
            case CREATE_FAIL:
                return {
                    ...state,
                    error: {variant: 'danger', message: payload},
                }
            case UPDATE:
                return {
                    error: {variant: 'success', message: payload.message},
                    memories: state.memories.map(n => {
                        return (n._id === payload.updateData._id) 
                            ? payload.updateData
                            : n
                    })
                }
            case UPDATE_FAIL: 
                return {
                    ...state,
                    error: {variant: 'alert', message: payload}
                }
            case DELETE: 
                return {
                    error: {variant: 'success', message: payload.message},
                    memories: state.memories.filter(n => n._id !== payload.id)
                }
            case DELETE_FAIL:
                console.log(payload)
                return {
                    ...state,
                    error: {variant: 'danger', message: payload}
                }
            default:
                return state
        }
    }

    export default reducerMemories