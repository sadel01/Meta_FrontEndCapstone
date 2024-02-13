import React from 'react'
import HeroSectionImage from "../assets/restauranfood.jpg";

const CallToAction = () => {
    return(
        <div className="heroSection">
                <div className="heroSectionContainer">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <button>Reserve a table</button>
                </div>
                <div className="heroImage">
                    <img src={HeroSectionImage} id="heroSectionImage"></img>
                </div>
            </div>
    )
}

export default CallToAction;


