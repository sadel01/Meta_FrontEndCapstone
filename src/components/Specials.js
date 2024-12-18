import React from 'react'
import GreekSalad from "../assets/greeksalad.jpg";
import Brucchetta from "../assets/bruchetta.png";
import LemonDessert from "../assets/lemondessert.jpg";

const Specials = () => {
    return (
        <div id="Highlights">
            <div className="specialsContainer">
                <h2>Specials</h2>
                <button>Online Menu</button>
            </div>
            <div className="highlightContainer">
                <div className="highlight">
                    <img src={GreekSalad} className="dishImg"></img>
                    <div className="dishContainer">
                        <h3>Greek Salad</h3>
                        <p>$12.99</p>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <p className="orderDelivery">Order a delivery</p>
                </div>
                <div className="highlight">
                    <img src={Brucchetta} className="dishImg"></img>
                    <div className="dishContainer">
                        <h3>Bruchetta</h3>
                        <p>$5.99</p>
                    </div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <p className="orderDelivery">Order a delivery</p>
                </div>
                <div className="highlight">
                    <img src={LemonDessert} className="dishImg"></img>
                    <div className="dishContainer">
                        <h3>Lemon Dessert</h3>
                        <p>$5.00</p>
                    </div>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <p className="orderDelivery">Order a delivery</p>
                </div>
            </div>
        </div>
    )
}

export default Specials