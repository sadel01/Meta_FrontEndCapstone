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
                    <p>At Little Lemon, our passion for gastronomy shines through in every dish we serve. From our humble beginnings, we've been committed to offering an exceptional culinary experience that celebrates fresh flavors and creativity in the kitchen. With a focus on high-quality, locally sourced ingredients and innovative culinary techniques, each visit to our restaurant is an opportunity to explore new flavors and delight in our unique creations. Whether you're seeking an intimate dinner, a family gathering, or a special occasion, we invite you to enjoy the warm hospitality and delicious cuisine of Little Lemon.</p>
                </div>
                <div className="imageContainer">
                    <img src={RestaurantChef} className="aboutImage" alt='Chef of Little Lemon Restaurant'></img>
                    <img src={MarioAndAdrian} className="overlayImage" alt='Owners of Little Lemon Restaurant'></img>
                </div>
            </div>
        </div>
    )
}

export default Chicago;