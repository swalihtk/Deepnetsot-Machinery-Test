import React from 'react'
import { useSelector } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductAdd from './pages/ProductAdd';
import Signup from './pages/Signup';

function Routers() {

    let {logedin}=useSelector(state=>state.login);


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
               {
                   logedin&&
                   <>
                   <Route path="/home" element={<Home />}/>
                   <Route path="/add" element={<ProductAdd/>}/>
                   </>
               }
               <Route path="/*" element={<h1>No Page Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
