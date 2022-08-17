import *as ActionTypes from '../ActionType'

export const SignupUser =(data)=>(dispatch)=>{
    dispatch({type :ActionTypes.AUTH_LOGIN, payload:data})
}

export const LoginUser =(data)=>(dispatch)=>{
    dispatch({type :ActionTypes.LOGIN_FORM, payload:data})
}

export const LoggedUser = (data) => (dispatch) => {
    dispatch({type : ActionTypes.LOGED_FORM, payload : data})
}

export const googleLogin = () => (dispatch) => {
    dispatch({type : ActionTypes.GOOGLE_LOGIN})
}

export const Logout = () => (dispatch) => {
    dispatch({type : ActionTypes.LOGOUT_USER})
}

export const forgotpassword = (data) => (dispatch) => {
    dispatch({type : ActionTypes.FORGOT_PASSWORD, payload : data    })
}

export const Loggedout = () => (dispatch) => {
    dispatch({type : ActionTypes.LOGGEDOUT_USER})
}

export const EmailVerify = (user) => (dispatch) => {
    dispatch({type : ActionTypes.EMAIL_VARIFICATION, payload : user})
}