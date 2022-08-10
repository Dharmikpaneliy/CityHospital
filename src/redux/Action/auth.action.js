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

export const EmailVerify = (user) => (dispatch) => {
    dispatch({type : ActionTypes.EMAIL_VARIFICATION, payload : user})
}