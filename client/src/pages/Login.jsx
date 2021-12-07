import React, {useState} from 'react'
import "../styles/style.css";
import {useNavigate} from 'react-router-dom';
import {doLogin} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function Login() {

    // router hooks
    let navigate=useNavigate();

    let {loading, error}=useSelector(state=>state.login)
    let dispatch=useDispatch();

    let [email, setEmail]=useState("");
    let [password, setPassword]=useState("");

    function handleLoginForm(e){
        e.preventDefault();
        if(!email|| !password){
            return;
        }
        let body={email, password};
        dispatch(doLogin(navigate, body));
    }

    return (
        <div className="register__main">
            <h1>Login Form</h1>
            <form onSubmit={handleLoginForm}>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                </div>
                <span style={{color:"red"}}>{error}</span><br/>
                <button>Submit</button>
                <button onClick={()=>navigate("/signup")}>Register</button>
            </form>
        </div>
    )
}

export default Login
