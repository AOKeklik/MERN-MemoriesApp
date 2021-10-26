import {logoutUser, refreshAccesstokenUser, signinUser, signupUser} from '../../axios/index'
import { AUTH, LOGOUT, LOGOUT_FAILED, REFRESH_ACCESS_TOKEN_FAIL, REFRESH_ACCESS_TOKEN_SUCCESS, SIGNIN_FAIL, SIGNUP_FAIL } from '../constants/actionConstants'

export const actionSignup = (formdata, history) => async (dispatch) => {
    try {
        const {data} = await signupUser(formdata)
        dispatch({
            type: AUTH,
            payload: data
        })
        history.push('/')
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}

export const actionSignin = (formdata, history) => async (dispatch) => {
    try {
        const { data } = await signinUser(formdata)
        dispatch({
            type: AUTH,
            payload: data
        })
        history.push('/')
    } catch (err) {
        dispatch({
            type: SIGNIN_FAIL,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}

export const actionLogout = (id) => async (dispatch) => {
    try {
        const {data} = await logoutUser(id)
        dispatch({
            type: LOGOUT,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGOUT_FAILED,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}

export const actionRefreshAccesstoken = (id) => async (dispatch, getState) => {
    try {
        const {data} = await refreshAccesstokenUser(id)

        let auth
        if (getState().user.userData)
            auth = getState().user.userData
        
        dispatch({
            type: REFRESH_ACCESS_TOKEN_SUCCESS,
            payload: {...auth, accesstoken: data}
        })
    } catch (err) {
        dispatch({
            type: REFRESH_ACCESS_TOKEN_FAIL,
            payload: err.response && err.response.data
                ? err.response.data
                : err.message
        })
    }
}