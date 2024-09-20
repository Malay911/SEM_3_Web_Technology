import React, { useState } from 'react';

function Displayproducts(){
    const [products,setProducts]=useState([]);
    const [data, setData] = useState({productName:"",price:""});
    const x=products.map((p)=>{
        return(
            <div>
                <h1>{p.productName}</h1>
                <h2>{p.price}</h2>
            </div>
        )
    })
    return(
        <>
            <div class="form-floating mb-3 col-lg-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="Name" onChange={(e) => {
                    setData({ ...data, productName: e.target.value });
                }} />
                <label for="floatingInput">Product Name</label>
            </div>
            <div class="form-floating col-lg-2">
                <input type="number" class="form-control " id="floatingPassword" placeholder="Price" onChange={(e) => {
                    setData({ ...data, price: e.target.value });
                }} />
                <label for="floatingPassword">Price</label><br />
                <button class="btn btn-primary" onClick={(e) => {
                    e.preventDefault();
                    setProducts([...products, data]);
                    console.log(products);
                }}>Submit</button>
            </div><br/>
            <div>{x}</div>
        </>
    )
}

export default Displayproducts;