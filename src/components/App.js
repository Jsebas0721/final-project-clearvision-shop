import React, { useEffect, useState } from "react";
import Header from "./Header";
import ShopList from "./ShopList";
import NavBar from "./NavBar";
import NewFrameForm from "./NewFrameForm";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {

  const [frameList, setFrameList]= useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/glasses')
    .then(resp => resp.json())
    .then(frameList => setFrameList(frameList))
  },[])

  console.log(frameList);
  return (
    <div className="App">
      <Header/>
      <hr/>
      <div>
      <NavBar/>
      <hr/>
      <NewFrameForm/>
      <Switch>
        <Route path="/Shop">
          <ShopList frameList={frameList}/>
        </Route>
        <Route path="/Cart">
          
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
