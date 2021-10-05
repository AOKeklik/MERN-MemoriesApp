import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomeScreen from './secreens/HomeScreen'
import CreateScreen from './secreens/CreateSecreen'
import UpdateScreen from './secreens/UpdateScreen'
import AuthScreen from './secreens/AuthScreen'

function App() {
    return <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/create' component={CreateScreen} />
            <Route path='/update/:id' component={UpdateScreen} />
            <Route path='/auth' component={AuthScreen} />
        </Switch>
    </BrowserRouter>
}

export default App
