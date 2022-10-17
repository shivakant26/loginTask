import instance from "../../Utils/api";
import { LOGIN_SUCCESS , REGISTER_SUCCESS ,ERROR} from "../actionType";

export const loginData = (data) =>{
    return (dispatch) => {
        return instance.post('/signin', data)
            .then(data => {
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:ERROR,
                    payload: error.response
                })
            });
    };
}

export const registerData = (data) =>{
    debugger;
    return (dispatch) => {
        return instance.post('/signup', data)
            .then(data => {
                dispatch({
                    type:REGISTER_SUCCESS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:ERROR,
                    payload: error.response
                })
            });
    };
}