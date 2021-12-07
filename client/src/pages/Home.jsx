import React, { useEffect } from 'react'
import "../styles/style.css";
import {useNavigate} from 'react-router-dom';
import {listAllProducts} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

function Home() {

    // routers hooks
    let navigate=useNavigate();
    let dispatch=useDispatch();
    let {loading, error, products}=useSelector(state=>state.products);

    useEffect(()=>{
        dispatch(listAllProducts());
    }, [])
   
    return (
        <div className="home__main">
            <h1>List Products</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index)=>{
                            return (
                                <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.category}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={()=>navigate("/add")}>Add Product</button>
        </div>
    )
}

export default Home
