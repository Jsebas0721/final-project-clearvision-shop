import React from "react";

function NewFrameForm(){


 return(
    <div className="new-frame-form">
        <h1>New Frame</h1>
        <form>
            <label>Name: </label>
            <input type="text" name="name"/>
            <label>Image URL: </label>
            <input type="text" name="image"/>
            <label>Price: </label>
            <input type="number" name="price" step="0.01"/>
            <button type="submit">Add Frame</button>
        </form>
    </div>
 )   
}

export default NewFrameForm;