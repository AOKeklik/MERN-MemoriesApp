import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Header from './component/Header'
import HomeScreen from './secreens/HomeScreen'
import CreateScreen from './secreens/CreateSecreen'
import UpdateScreen from './secreens/UpdateScreen'
import AuthScreen from './secreens/AuthScreen'
import NotFound from './secreens/NotFound'
import Footer from './component/Footer'

function App() {
    return <BrowserRouter>
        <Header />
            <div className="container">
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route path='/create' component={CreateScreen} />
                    <Route path='/update/:id' component={UpdateScreen} />
                    <Route path='/auth' component={AuthScreen} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        <Footer />
    </BrowserRouter>
}

export default App
