import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import PizzaOrder from "./Pizza"
import Homepage from "./Home"

const defaultPlaceInfo = {
  name: "",
  size: "",
  pepperoni: false,
  olives: false,
  sausage: false,
  pepper: false,

}

const App = () => {
  const [place, setPlace] = useState([]);
  const [placeInfo, setPlaceInfo] = useState(defaultPlaceInfo);

  const updateInfo = (newName, newValue) => {

  }

  const submitInfo = () => {

  }
  


  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza">
          <PizzaOrder info={placeInfo} update={updateInfo} submit={submitInfo} />
        </Route>
        <Route path="/">
          <Homepage info={placeInfo} />
        </Route>
      </Switch>
      
    </>
  );
};
export default App;
