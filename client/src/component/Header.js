import React, { useEffect, useState } from 'react'
import jwtdecode from 'jwt-decode'
import { Link, useLocation, useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { actionLogout,actionRefreshAccesstoken } from '../redux/actions/actionAuth'

function Header() {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    const [user, setUser] = useState()

    const exit = async (id) => {
        await dispatch(actionLogout(id))
        setUser(null)
        history.push('/auth')
    }

    const renewAccesstoken = async (id) => {
        await dispatch(actionRefreshAccesstoken(id))
        setUser(JSON.parse(localStorage.getItem('user')))
    }

    useEffect(() => {
        if (localStorage.getItem('user') && !user) 
            setUser(JSON.parse(localStorage.getItem('user')))

        const interval = setInterval(() => {
            const userAccesstoekn = user?.accesstoken
            if (userAccesstoekn) {
                const decodedAccesstoken = jwtdecode(userAccesstoekn)
                if (decodedAccesstoken.exp * 1000 < new Date().getTime())
                    renewAccesstoken(user?._id)
            }
        }, 5000)

        return () => {
            clearInterval(interval)
        }

    }, [location, user])


    //console.log(user)
    return <nav id="top" className="navbar navbar-dark navbar-expand-lg bg-dark fs-5 py-lg-2 mb-5">
        <div className="container">
            <Link to='/'><div className="navbar-brand fs-3">Ani Kutusu</div></Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">                   
                {
                    !user ? (
                        <li className="nav-link mx-auto me-lg-5">
                            <Link to='/auth'><div className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Giris Yap</div></Link>
                        </li>
                    ): ( <>
                        <li className="nav-link mx-auto me-lg-5">
                            <Link to='/create'><div className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Bir Ani Paylas</div></Link>
                        </li>
                        <li className="nav-link mx-auto me-lg-5">
                            <Link onClick={() => exit(user._id)} to='/auth'><div className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Cikis Yap</div></Link>
                        </li>
                    </> )
                }                          
                </ul>
            </div>
        </div>
    </nav>
}

export default Header
