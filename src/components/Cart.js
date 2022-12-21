import React from "react";

function Cart({cartItems}){

    const addedToCart= cartItems.map(item => (
        <div key={item.id}className="onCart">
            <img src={item.image}/>
            <p>{item.name}</p><p>{item.price}</p>
            <button>Remove From Cart</button>
        </div>
    ))
    
    console.log(addedToCart);
    return(
        <div className="cart-container">
            <h1>MY CART: </h1>
            <hr/>
            <ul>
                {addedToCart}
            </ul>
        </div>
    )


}

export default Cart