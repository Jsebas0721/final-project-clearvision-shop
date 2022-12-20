import React, { useEffect, useState } from "react";
import Header from "./Header";
import ShopList from "./ShopList";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route path="/Shop">
          
        </Route>
        <Route path="/Cart">
          
        </Route>
        <Route path="/">
          
        </Route>
      </Switch>
      </div>
      <hr/>
      <ShopList frameList={frameList}/>
    </div>
  );
}

export default App;
