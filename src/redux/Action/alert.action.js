import * as ActionType from "../ActionType"

export const setalert = (data) => (dispatch) => {
    console.log(data);
     dispatch({type:ActionType.SET_ALERT, payload: data})
}

export const resetalert = () => (dispatch) =>{
  dispatch({type:ActionType.RESET_ALERT})
}