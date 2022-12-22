import React from "react";

function Cart({cartItems}){


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
                <button>Remove From Cart</button>
            </td>
        </tr>
    ))

    
    console.log(addedToCart);
    return(
        <div className="cart-container">
            <h1>MY CART: </h1>
            <hr/>
            <table className="onCart">
                <tr>
                    <th>ITEM</th>
                    <th>DESCRIPTION</th>
                    <th>PRICE</th>
                </tr>
                {addedToCart}      
            </table>
            <hr/>
        </div>
    )


}

export default Cart