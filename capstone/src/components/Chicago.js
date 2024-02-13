import React from 'react'
import RestaurantChef from "../assets/restaurantchefB.jpg";
import MarioAndAdrian from "../assets/marioandadrian.jpg";

const Chicago = () => {
    return (
        <div id="About">
            <div className="aboutContainer">
                <div className="aboutText">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="imageContainer">
                    <img src={RestaurantChef} className="aboutImage"></img>
                    <img src={MarioAndAdrian} className="overlayImage"></img>
                </div>
            </div>
        </div>
    )
}

export default Chicago;