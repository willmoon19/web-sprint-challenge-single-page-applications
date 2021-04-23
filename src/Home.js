import React from 'react'
// import { useHistory } from "react-router-dom";

export default function Homepage() {
    // const history = useHistory()
    // const routeToOrder = () => {
    //     history.push("/")
    // }

    return (
        <div>
            <h1>Home Page</h1>
            <p>This is a bit of a failure on my part. I had very little time, I am sick after getting the covid vaccine and the orientation took quite awhile. I would have liked another hour or so to properly tidy things up and add some style</p>
            <img className="homeImage" src="../Assets/pizza.jpg" alt="" />
        </div>
    )
}