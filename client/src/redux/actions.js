import axios from "axios";
import constants from './constants';

// signup
function doSignup(navigate, body) {
  return async(dispatch)=>{
    try {
      dispatch({ type: constants.FETCH_SIGNUP });
      
      let response = await axios.post("/register", body);
      let data = response.data; 
      if (data.error) {
        dispatch({ type: constants.FETCH_SIGNUP_ERROR, payload: data.error });
      } else {
        dispatch({type:constants.FETCH_SIGNUP_SUCCESS}); 
        dispatch({type:constants.FETCH_LOGIN_SUCCESS}); 
        navigate("/home");
      }
    
    } catch (e) {
      dispatch({ type: constants.FETCH_SIGNUP_ERROR, payload: "Validation failed" });
    }
  };
}

// login
function doLogin(navigate, body){
    return async(dispatch)=>{
        try {
          dispatch({ type: constants.FETCH_LOGIN });
          
          let response = await axios.post("/login", body);
          let data = response.data; 
          if (data.error) {
            dispatch({ type: constants.FETCH_LOGIN_ERROR, payload: data.error });
          } else {
            dispatch({type:constants.FETCH_LOGIN_SUCCESS}); 
            navigate("/home");
          }
        
        } catch (e) {
          dispatch({ type: constants.FETCH_LOGIN_ERROR, payload: e.message });
        }
      };
}

// list products
function listAllProducts(){
    return async(dispatch)=>{
        try{
            dispatch({type:constants.FETCH_PRODUCTS});
            let response=await axios.get("/list_all_products");
            let data=response.data;
            if(data.error){
                dispatch({type:constants.FETCH_PRODUCTS_ERROR, payload:data.error});
            }else{
                dispatch({type:constants.FETCH_PRODUCTS_SUCCESS, payload:data});
            }
            
        }catch(e){
            dispatch({type:constants.FETCH_PRODUCTS_ERROR, payload:e.message});
        }
    }
}

// add products
function addNewProduct(navigate, body){
    return async(dispatch)=>{
        try{
            dispatch({type:constants.FETCH_ADD_PRODUCT});
            let response=await axios.post("/create_new_prouct", body);
            let data=response.data;
            if(data.error){
                dispatch({type:constants.FETCH_ADD_PRODUCT_ERROR, payload:data.error});
            }else{
                dispatch({type:constants.FETCH_ADD_PRODUCT_SUCCESS});
                navigate("/home");
            }
            
        }catch(e){
            dispatch({type:constants.FETCH_ADD_PRODUCT_ERROR, payload:e.message});
        }
    }
}

export {doSignup, doLogin, listAllProducts, addNewProduct};