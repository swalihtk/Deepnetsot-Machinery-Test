import React, { useState } from 'react'
import "../styles/style.css";
import {addNewProduct} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

function ProductAdd() {

    // **** Add new Product *******
    let [name, setName]=useState("");
    let [price, setPrice]=useState(1);
    let [quantity, setQuantity]=useState(1);
    let [category, setCategory]=useState("");

    let {error}=useSelector(state=>state.addProducts);
    let dispatch=useDispatch();
    let navigate=useNavigate();

    function handleProductForm(e){
        e.preventDefault();
        if(!name || !price || !quantity || !category){
            return;
        }
        let body={name, price, quantity, category};
        dispatch(addNewProduct(navigate, body));
    }

    return (
        <div className="register__main">
        <h1>Product Add Form</h1>
        <form onSubmit={handleProductForm}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type="text" value={price} onChange={e=>setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" min={1} value={quantity} onChange={e=>setQuantity(e.target.value)}/>
            </div>
            <div>
                <label>Category</label>
                <input type="text" value={category} onChange={e=>setCategory(e.target.value)}/>
            </div>

            <span style={{color:"red"}}>{error}</span><br/>
            <button>Submit</button>
            
        </form>
    </div>
    )
}

export default ProductAdd
