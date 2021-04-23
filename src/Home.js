import React from 'react'
import { useHistory } from "react-router-dom";

export default function Homepage() {
    const history = useHistory()
    const routeToOrder = () => {
        history.push("/")
    }

    return (
        <div>
            <h1>Home Page</h1>
            <img className="homeImage" src="../Assets/pizza.jpg" alt="" />
        </div>
    )
}