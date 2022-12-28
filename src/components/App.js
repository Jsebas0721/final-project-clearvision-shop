import React, { useEffect, useState } from "react";
import Header from "./Header";
import ShopList from "./ShopList";
import NavBar from "./NavBar";
import NewFrameForm from "./NewFrameForm";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

function App() {

  const [frameList, setFrameList]= useState([]);
  const [cartItems, setCartItems]= useState([]);
  
  
  
  useEffect(()=>{
    fetch('http://localhost:3000/glasses')
    .then(resp => resp.json())
    .then(frameList => {
      setFrameList(frameList)
      const cart = frameList.filter(frame => frame.onCart);
      setCartItems(cart);
    })
  },[])


  function handleBuy(frameObj){
    const boughtFrames = frameList.map(frame => {
      if(frame.id === frameObj.id){
        return frameObj;
      }else{
        return frame;
      }
    })
    setFrameList(boughtFrames);
    setCartItems([...cartItems, frameObj])
  }

 
  function handleRemove(frameObj){
    const updatedCart = cartItems.filter(item => item.id !== frameObj.id)
    setCartItems(updatedCart);

    fetch('http://localhost:3000/glasses')
    .then(resp => resp.json())
    .then(frameList => setFrameList(frameList)) 
  }

  function handleAddFrame(frameObj){
    console.log("New Frame Added: ", frameObj);
    setFrameList([...frameList, frameObj])
  }
  return (
    <div className="App">
      <Header/>
      <hr/> 
      <NavBar/>
      <hr/>
      <Switch>
        <Route  exact path="/Shop">
          <NewFrameForm onAddFrame={handleAddFrame}/>
          <hr/>
          <ShopList frameList={frameList} onHandleBuy={handleBuy} />
        </Route>
        <Route  exact path="/Cart">
          <Cart cartItems={cartItems} onRemoveItem={handleRemove}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
