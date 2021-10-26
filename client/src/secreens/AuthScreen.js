import React, {useState} from 'react'
import Message from '../component/Message'
import {FcGoogle} from 'react-icons/fc'

import {useDispatch, useSelector} from 'react-redux'
import {actionSignup, actionSignin} from '../redux/actions/actionAuth'
import {GoogleLogin} from 'react-google-login'
import { AUTH } from '../redux/constants/actionConstants'

function AuthScreen({history}) {
    const dispatch = useDispatch()
    const {user: auth} = useSelector(state => state)
    const initialState = {firstname: '', lastname: '', email: '', password: '', confirmpassword: ''}

    const [inputs, setInputs] = useState(initialState)
    const handlerOnChange = (e) => setInputs({...inputs, [e.target.name]: e.target.value})

    const [login, setLogin] = useState(true)
    const handlerOnClick = () => {
        setInputs(initialState)
        setLogin(!login)
    }

    const handlerOnSubmit = (e) => {
        e.preventDefault()

        if (login) {
            //Signin
            dispatch(actionSignin(inputs, history))
        } else {
            //signup
            dispatch(actionSignup(inputs, history))
        }
    }

    const googleSuccess = (res) => {
        const {googleId: _id, name, email} = res?.profileObj
        const accesstoken = res?.tokenId
        const google = true
        
        try {
            dispatch({
                type: AUTH,
                payload: {user: {_id, name, email, accesstoken, google}, message: 'Google Signup!'}
            })
            history.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    const googleFailure = (err) => {

    }

    console.log(auth)

    return <div className="row">
        <h1 className="text-center mb-3">{login ? 'Signin' : 'Signup'}</h1>
        {auth.error ? <Message variant={auth.error.variant}>{auth.error.message}</Message> : null}
        <div className="col-lg-6 offset-lg-3 mt-3">
            <form onSubmit={handlerOnSubmit}>
            {login ? (
                <>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            onChange={handlerOnChange}
                            value={inputs.email}
                            name="email"
                            id="email" 
                            placeholder="Place Enter Your Email"
                            className="form-control"
                            type="text"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            onChange={handlerOnChange}
                            value={inputs.password}
                            name="password"
                            id="password" 
                            placeholder="Place Enter Your Password"
                            className="form-control"
                            type="text"
                        />
                    </div>
                    <div className="mb-4">
                        <input type="submit" value="signin" className="btn btn-dark w-100" />
                    </div>
                    <div className="mb-4">
                        <GoogleLogin
                            clientId="337723087603-e033e5lfhj3df860gh19pm9cgrr35ign.apps.googleusercontent.com"
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy={'single_host_origin'}
                            //isSignedIn="true"
                            render={renderProps => (
                                <button
                                    onClick={renderProps.onClick} 
                                    disabled={renderProps.disabled}
                                    className="btn btn-info w-100"                                    
                                >
                                    <FcGoogle size="22" />
                                    <span className="ps-2">Signin with Google</span>
                                </button>
                            )}
                        />
                    </div>
                    <div className="form-text mb-3">
                        <p className="d-inline-block me-3">Do not you have an account yet?</p>
                        <span
                            onClick={handlerOnClick}
                            role="button"
                            className="bold"
                        >Signup</span>
                    </div>
                </>
            ) : (
                <>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input
                            onChange={handlerOnChange}
                            value={inputs.firstname}
                            name="firstname"
                            placeholder="Place Enter Your First Name"
                            className="form-control"
                            id="firstname" 
                            type="text"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input
                            onChange={handlerOnChange}
                            value={inputs.lastname}
                            name="lastname"
                            placeholder="Place Enter Your Last Name"
                            className="form-control"
                            id="lastname" 
                            type="text"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            onChange={handlerOnChange}
                            value={inputs.email}
                            name="email"
                            placeholder="Place Enter Your Email"
                            className="form-control"
                            id="email" 
                            type="text"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            onChange={handlerOnChange}
                            value={inputs.password}
                            name="password"
                            placeholder="Place Enter Password"
                            className="form-control"
                            id="password" 
                            type="text"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                        <input
                            onChange={handlerOnChange}
                            value={inputs.confirmpassword}
                            name="confirmpassword"
                            placeholder="Place Confirm Your Password"
                            className="form-control"
                            id="confirmpassword" 
                            type="text"
                        />
                    </div>
                    <div className="mb-4">
                        <input type="submit" value="signup" className="btn btn-dark w-100" />
                    </div>
                    <div className="form-text mb-3">
                        <p className="d-inline-block me-3">Do you already have an account?</p>
                        <span
                            onClick={handlerOnClick}
                            role="button"
                            className="bold"
                        >Signin</span>
                    </div>
                </>
            )}
            </form>
        </div>
    </div>
}

export default AuthScreen
