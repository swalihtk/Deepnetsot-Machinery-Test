import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {signupReducer, loginReducer, productReducer, productAddReducer} from './reducers';

const rootReducer=combineReducers({
    signup:signupReducer,
    login:loginReducer,
    products:productReducer,
    addProducts:productAddReducer
})

const store=createStore(rootReducer, applyMiddleware(thunk));

export default store;