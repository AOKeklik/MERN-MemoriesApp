import React from 'react'

import {useSelector} from 'react-redux'

function HomeScreen() {
    const {memories} = useSelector(state => state)
    
    console.log(memories)
    return <>
        <h1>Home Screen</h1>
    </>
}

export default HomeScreen
