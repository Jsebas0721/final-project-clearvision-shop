import React, { useState } from "react";

function Cart({cartItems, onRemoveItem}){

   

function handleClick(event){
    console.log("Item Removed")
    console.log(event)
    cartItems.map(item => {
        if(item.id === event){
            onRemoveItem(item);
        }
    })
}

   const addedToCart = cartItems.map(item => (
        <tr>
            <td>
                <img src={item.image}/>
            </td>
            <td>
                <p>{item.name}</p>
            </td>
            <td>
                <p>{item.price}</p>
            </td>
            <td>
                <button onClick={() => handleClick(item.id)}>Remove From Cart</button>
            </td>
        </tr>
    ))


    

    
    console.log(addedToCart);
    return(
        <div className="cart-container">
            <h1>MY CART: </h1>
            <hr/>
            {cartItems.length === 0 ? <h2>YOUR CART IS EMPTY!</h2> :
            <table className="onCart">
                <tr>
                    <th>ITEM</th>
                    <th>DESCRIPTION</th>
                    <th>PRICE</th>
                </tr>
                {addedToCart}      
            </table>  
            }
            <hr/>
        </div>
    )


}

export default Cart