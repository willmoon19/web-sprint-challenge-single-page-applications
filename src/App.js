import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

import PizzaOrder from "./Pizza"
import Homepage from "./Home"
// import Order from "./Order"
import schema from "./validation"

const defaultPlaceInfo = {
  name: "",
  size: "",
  pepperoni: false,
  olives: false,
  sausage: false,
  pepper: false,
  specialRequest: "",
}

const defaultErrors = {
  name: "",
  size: "",
  pepperoni: "",
  olives: "",
  sausage: "",
  pepper: "",
}

const defaultPizza = []
const defaultDisable = true

const App = () => {
  const [place, setPlace] = useState(defaultPizza);
  const [placeInfo, setPlaceInfo] = useState(defaultPlaceInfo);
  const [disabled, setDisabled] = useState(defaultDisable)
  const [errors, setErrors] = useState(defaultErrors);

  const showSaved = (completeOrder) => {
    axios.post("https://reqres.in/api/orders", completeOrder)
      .then(res => {
        console.log(res.data)
        setPlace([res.data, ...place]);
        setPlaceInfo(defaultPlaceInfo);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const updateInfo = (newName, newValue) => {
    yup.reach(schema, newName)
    .validate(newValue)
    .then(() => {
      setErrors({...errors, [newName]: ""})
    })
    .catch(err => {
      setErrors({...errors, [newName]: err.errors[0]})
    })
    setPlaceInfo({...placeInfo, [newName]: newValue})
  }

  const submitInfo = () => {

    const savedOrder = {
      name: placeInfo.name,
      size: placeInfo.size,
      pepperoni: placeInfo.pepperoni ? true : false,
      olives: placeInfo.olives ? true : false,
      sausage: placeInfo.sausage ? true : false,
      pepper: placeInfo.pepper ? true : false,
      specialRequest: placeInfo.specialRequest,
    }
    showSaved(savedOrder)

    return (
      <div> Order Complete
          <Link to={"pizza/order"}>
          </Link>
      </div>
  )
  }
  
  const saveOrder = () => {
    const savedOrder = {
      name: placeInfo.name,
      size: placeInfo.size,
      pepperoni: placeInfo.pepperoni ? "yes" : "no",
      olives: placeInfo.olives ? "yes" : "no",
      sausage: placeInfo.sausage ? "yes" : "no",
      pepper: placeInfo.pepper ? "yes" : "no",
      specialRequest: placeInfo.specialRequest,
    }
    return (
      <div>
        <ul>Name: {savedOrder.name}</ul>
        <ul>Size: {savedOrder.size}</ul>
        <ul>Pepperoni: {savedOrder.pepperoni}</ul>
        <ul>Olives: {savedOrder.olives}</ul>
        <ul>Sausage: {savedOrder.sausage}</ul>
        <ul>Pepper: {savedOrder.pepper}</ul>
        <ul>SpecialRequest: {savedOrder.specialRequest}</ul>
      </div>
    )
    
  }

  useEffect(() => {
    schema.isValid(placeInfo)
    .then(res => {
      setDisabled(!res)
    })
  }, [placeInfo])

  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <Link id="order-pizza" to="/pizza">Pizza</Link>
        <Link to="/">Home</Link>
      </nav>
   
    <Switch>
        <Route path="/pizza">
          <PizzaOrder info={placeInfo} update={updateInfo} submit={submitInfo} disabled={disabled} errors={errors} saveOrder={saveOrder} />
        </Route>

        <Route exact path="/">
          <Homepage />
        </Route>  
      </Switch>
      
    </>
  );
};

export default App;
