import React from "react";

function NewFrameForm(){

function handleChange(event){
    
}
 return(
    <div className="new-frame-form">
        <h1>New Frame</h1>
        <form>
            <label>Name: </label>
            <input 
            type="text" 
            name="name"
            onChange={handleChange}
            />
            <label>Image URL: </label>
            <input 
            type="text" 
            name="image"
            onChange={handleChange}
            />
            <label>Price: </label>
            <input 
            type="number" 
            name="price" 
            step="0.01"
            onChange={handleChange}
            />
            <button type="submit">Add Frame</button>
        </form>
    </div>
 )   
}

export default NewFrameForm;