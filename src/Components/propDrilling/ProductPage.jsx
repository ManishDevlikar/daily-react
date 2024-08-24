import { ProductDetails } from "./ProductDetails";

export function ProductPage({user,products}){

    return(<>
    <h1 className="text-white">Products page</h1>
    <p className="text-white">welcome {user && user.name} you have {products.length} products in your cart</p>
    <ProductDetails user={user} products={products}/>


    </>)
}