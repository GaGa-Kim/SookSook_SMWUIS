import { INPUT_VALUE } from './types'

const initialState={
    loginId:"",
    password:""
}
const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case INPUT_VALUE:
            return{
                ...state,
                loginId:action.loginId,
                password:action.password,
                isLogin:action.isLogin
            };
        default:
            return state;
    }
}

export default loginReducer;