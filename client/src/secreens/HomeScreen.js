import React, { useEffect, useState } from 'react'

import Memory from '../component/Memory'
import {fetchMemories} from '../axios/index'

function HomeScreen() {
    const [memories, setMemory] = useState([])

    useEffect(() => {
        (async function () {
            const {data} = await fetchMemories()
            setMemory(data)
        })()
    }, [])

    return <>
        <h1>Actual Memories</h1>

        <div className="row">
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
