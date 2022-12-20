import React from "react";

function Frame({frame}){

    const{name,image, price} = frame

    console.log(frame);

    return(
        <div className="frame-product">
            <li>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <span>
                    <p>Price: {price}</p>
                    <button>Add to Cart!</button> 
                </span>   
            </li>
        </div>
    )
}

export default Frame;