import React, { useState } from 'react'
import "../styles/style.css";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {doSignup} from '../redux/actions';

function Signup() {

    // ***** signup ********
    let [name,setName]=useState("");
    let [email, setEmail]=useState("");
    let [password, setPassword]=useState("");
    let [place, setPlace]=useState("");

    let {loading, error}=useSelector(state=>state.signup);
    let dispatch=useDispatch();
    let navigate=useNavigate();

    function handleFormSubmit(e){
        e.preventDefault();
        if(!name || !email || !password || !place){
            return;
        }
        let body={name, email, password, place};
        dispatch(doSignup(navigate, body));
    }


    return (
        <div className="register__main">
        <h1>Registration Form</h1>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} name="name"/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} name="email"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} name="password"/>
            </div>
            <div>
                <label>Place</label>
                <input type="text" value={place} onChange={e=>setPlace(e.target.value)} name="place"/>
            </div>

            <span style={{color:"red"}}>{error}</span><br/>
            <button type="submit">Submit</button>
            <button onClick={()=>{
                setName("");
                setPassword("");
                setEmail("");
                setPlace("");
            }}>Clear</button>
            <p><Link to="/">Already have account?</Link></p>
        </form>
    </div>
    )
}

export default Signup
