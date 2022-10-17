import { ERROR, LOGIN_SUCCESS , REGISTER_SUCCESS} from "../actionType"

const initialState = {
    data :[]
}


const userReducer = (state=initialState,action) =>{
    switch(action.type){
        case LOGIN_SUCCESS :
            debugger;
            let token = action.payload.data.token;
            localStorage.setItem("token",token);
        return{
            ...state,
            login_data:action.payload
        }
        case REGISTER_SUCCESS :
        return{
            ...state,
            data:action.payload
        }
        case ERROR :
            return{
                ...state,
                error : action.payload
            }
        default:
            return state
    }
}

export default userReducer;