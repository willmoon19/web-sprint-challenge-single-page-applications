import React from 'react'
import { useHistory } from "react-router-dom";

export default function Homepage() {
    const history = useHistory()
    const routeToOrder = () => {
        history.push("/")
    }

    return (
        <div>
            <img className="homeImage" src="../Assets/pizza.jpg" />
        </div>
    )
}