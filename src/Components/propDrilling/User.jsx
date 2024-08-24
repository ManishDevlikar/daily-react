import { useEffect } from "react";
import { useState } from "react"
import { ProductPage } from "./ProductPage";

export function User(){
 const[user,setUser]= useState({})
 const [products,setProduct]=useState([]);

 useEffect(()=>{
    setUser({
        name: 'John',
        cart: []
    })
    setProduct([ { id: 1, name: 'Product 1', price: 10, description:"product 1 description"},
        { id: 2, name: 'Product 2', price: 20, description:"product 2 decsription" },])
 },[])
    return(<>
    <ProductPage user={user} products={products}/>
    </>)
}