export function ProductDetails({user,products}){
    return (
        <>
        <h1>Product Details:</h1>
        <ul className="text-white">
            {user.name=='John' && products && products.map((product,key)=>(
                <li key={key}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </li>
            ))}
        </ul>
        </>
    )    
}