import React from "react";

function Frame({frame, onHandleBuy}){

    const{name,image, price} = frame

    function handleClick(){
        onHandleBuy(frame);   
    }

    return(
        <div className="frame-product">
            <li>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <span>
                    <p>Price: {price}</p>
                    <button onClick={handleClick}>Add to Cart!</button> 
                </span>   
            </li>
        </div>
    )
}

export default Frame;