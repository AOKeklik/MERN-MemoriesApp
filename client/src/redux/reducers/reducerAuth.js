import { AUTH, LOGOUT, LOGOUT_FAILED, REFRESH_ACCESS_TOKEN_SUCCESS, SIGNIN_FAIL, SIGNUP_FAIL } from "../constants/actionConstants"

const reducerUser = (state= {userData: {}}, action) => {
    const {type, payload} = action
    switch (type) {
        case AUTH:
            localStorage.setItem('user', JSON.stringify(payload.user))
            return {
                ...state,
                userData: payload.user,
                error: {variant: 'success', message: payload.message}                
            }
        case SIGNUP_FAIL:
        case SIGNIN_FAIL:
            return {
                error: {variant: 'danger', message: payload}
            }
        case LOGOUT:
            localStorage.removeItem('user')
            return {
                error: {variant: 'success', message: payload.message},
                userData: null
            }
        case LOGOUT_FAILED:
            return {
                error: {variant: 'danger', message: payload},
            }
        case REFRESH_ACCESS_TOKEN_SUCCESS:
            localStorage.setItem('user', JSON.stringify(payload))
            return {
                ...state,
                userData: payload
            }
        default:
            return state
    }
}

export default reducerUser