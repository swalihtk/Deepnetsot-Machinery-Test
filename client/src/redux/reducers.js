// import
import { loginState, signupState,productState, productAddState } from "./states";
import constants from './constants';

// login reducer


const loginReducer=(state=loginState, action)=>{
    switch(action.type){
        case constants.FETCH_LOGIN:
            return {
                ...state,
                loading:true
            }
        case constants.FETCH_LOGIN_SUCCESS:
            return {
                loading:false,
                error:"",
                logedin:true
            }

        case constants.FETCH_LOGIN_ERROR:
            return {
                loading:false,
                error:action.payload,
                logedin:false
            }
        default:
            return state;
    }
}

// register reducer



const signupReducer=(state=signupState, action)=>{
    switch(action.type){
        case constants.FETCH_SIGNUP:
            return {
                ...state,
                loading:true
            }
        case constants.FETCH_SIGNUP_SUCCESS:
            return {
                loading:false,
                error:"",
                signup:true
            }

        case constants.FETCH_SIGNUP_ERROR:
            return {
                loading:false,
                error:action.payload,
                signup:false
            }
        default:
            return state;
    }
}

// list product reducer
const productReducer=(state=productState, action)=>{
    switch(action.type){
        case constants.FETCH_PRODUCTS:
            return {
                ...state,
                loading:true
            }
        case constants.FETCH_PRODUCTS_SUCCESS:
            return {
                loading:false,
                error:"",
                products:action.payload
            }

        case constants.FETCH_PRODUCTS_ERROR:
            return {
                loading:false,
                error:action.payload,
                products:[]
            }
        default:
            return state;
    }
}

// add product reducer
const productAddReducer=(state=productAddState, action)=>{
    switch(action.type){
        case constants.FETCH_ADD_PRODUCT:
            return {
                ...state,
                loading:true
            }
        case constants.FETCH_ADD_PRODUCT_SUCCESS:
            return {
                loading:false
            }
        case constants.FETCH_ADD_PRODUCT_ERROR:
            return {
                loading:false,
                error:action.payload,
                signup:false
            }
        default:
            return state;
    }
}

export {loginReducer, signupReducer, productReducer, productAddReducer};

