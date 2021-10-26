import React, {useState} from 'react'
import Message from '../component/Message'

import {useDispatch, useSelector} from 'react-redux'
import {actionSignup, actionSignin} from '../redux/actions/actionAuth'

function AuthScreen({history}) {
    const Dispatch = useDispatch()
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
            Dispatch(actionSignin(inputs, history))
        } else {
            //signup
            Dispatch(actionSignup(inputs, history))
        }
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
