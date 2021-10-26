import React, { useEffect, useState } from 'react'
import Memory from '../component/Memory'
import Message from '../component/Message'

//import {fetchMemories} from '../axios/index'
import {useSelector, useDispatch} from 'react-redux'
import {actionFetchMemories} from '../redux/actions/actionMemories'

function HomeScreen() {
    const Dispatch = useDispatch()

    const StateMemories = useSelector(state => state.memories)
    const StateAuth = useSelector(state => state.user.error)
    const [memories, setMemories] = useState([])


    /* useEffect(() => {
        (async function () {
            const {data} = await fetchMemories()
            setMemories(data)
        })()
    }, []) */

    console.log(StateMemories)
    console.log(StateAuth)

    useEffect(() => {
        if (!StateMemories.memories[0]) Dispatch(actionFetchMemories())
        setMemories(StateMemories.memories)
    }, [Dispatch, StateMemories])

    return <>
        <h1>Actual Memories</h1>

        <div className="row">
        {
            
                StateMemories.error ? ( <>
                    <Message variant={StateMemories.error.variant} >{StateMemories.error.message}</Message>
                </>) : (
                    null
                )
        }
        {   
            !memories.length ? (
                <div className="d-flex justify-content-center align-items-center" style={{height: '50vh'}}>
                    <div className="spinner-grow">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                memories.map((item, index, arr) => (
                    <Memory key={index} data={item} />
                ))
            )
        }
        </div>
    </>
}

export default HomeScreen
