import {FETCH_ALL,CREATE,UPDATE,DELETE} from '../constants/actionConstants'
import {fetchMemories,createMemory,updateMemory,deleteMemory} from '../../axios/index'

export const actionFetchMemories = () => async (dispatch) => {
    try {
        const {data} = await fetchMemories()
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}

export const actionCreateMemory = (newMemory) => async (dispatch) => {
        try {
            const {data} = await createMemory(newMemory)
            return dispatch({
                type: CREATE,
                payload: data
            })
        } catch (err) {
            console.log(err)
        }
}

export const actionUpdateMemory = (id, newMemory) => async (dispatch) => {
    try {
        const {data} = await updateMemory(id, newMemory)
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}

export const actionDeleteMemory = (id) => async (dispatch) => {
    try {
        const {data} = await deleteMemory(id)
        dispatch({
            type: DELETE,
            payload: {id, message: data.message}
        })
    } catch (err) {
        console.log(err)
    }
}