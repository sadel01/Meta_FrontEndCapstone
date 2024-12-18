import React from 'react'
import HeroSectionImage from "../assets/restauranfood.jpg";

const CallToAction = () => {

    const handleClick = () => {
        window.location.href = "/booking";
    }


    return(
        <div className="heroSection">
                <div className="heroSectionContainer">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon: A Culinary Oasis. Experience exquisite flavors and cozy ambiance in the heart of the city.</p>
                    <button aria-label='Reserve a table' onClick={handleClick}>Reserve a table</button>
                </div>
                <div className="heroImage">
                    <img src={HeroSectionImage} alt='Image of restaurant food' id="heroSectionImage"></img>
                </div>
            </div>
    )
}

export default CallToAction;


