import React, { useEffect, useState } from 'react'
import Memory from '../component/Memory'

//import {fetchMemories} from '../axios/index'
import {useSelector, useDispatch} from 'react-redux'
import {actionFetchMemories} from '../redux/actions/actionMemories'

function HomeScreen() {
    const Dispatch = useDispatch()

    const State = useSelector(state => state.memories)
    const [memories, setMemories] = useState([])


    /* useEffect(() => {
        (async function () {
            const {data} = await fetchMemories()
            setMemories(data)
        })()
    }, []) */

    //console.log(State)

    useEffect(() => {
        if (!State.memories[0]) Dispatch(actionFetchMemories())
        setMemories(State.memories)
    }, [Dispatch, State])

    return <>
        <h1>Actual Memories</h1>

        <div className="row">
        {
            
                State.message.length ? (
                    <div className="alert alert-info" role="alert">{State.message}</div>
                ) : (
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
