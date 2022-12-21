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
    .then(frameList => setFrameList(frameList))
  },[])


  function handleBuy(frameObj){
    setCartItems([...cartItems, frameObj])
  }
 
  return (
    <div className="App">
      <Header/>
      <hr/> 
      <NavBar/>
      <hr/>
      <Switch>
        <Route  exact path="/Shop">
          <NewFrameForm/>
          <hr/>
          <ShopList frameList={frameList} onHandleBuy={handleBuy}/>
        </Route>
        <Route  exact path="/Cart">
          <Cart cartItems={cartItems}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
