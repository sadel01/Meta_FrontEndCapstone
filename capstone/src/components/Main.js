import React from "react";
import HeroSectionImage from "../assets/restauranfood.jpg";
import GreekSalad from "../assets/greeksalad.jpg";
import Brucchetta from "../assets/bruchetta.png";
import LemonDessert from "../assets/lemondessert.jpg";
import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";
import Person4 from "../assets/person4.png";
import RestaurantChef from "../assets/restaurantchefB.jpg";
import MarioAndAdrian from "../assets/marioandadrian.jpg";

const Nav = () => {
  return (
    <main>
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

        <div className="Highlights">
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

        <div className="Testimonials">
            <h2>Testimonials</h2>
            <div className="testimonialContainer">
                <div className="testimonial">
                    <p>⭐⭐⭐⭐⭐</p>
                    <img src={Person1} className="testimonialImg"></img>
                    <p>Name</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="testimonial">
                    <p>⭐⭐⭐⭐⭐</p>
                    <img src={Person2} className="testimonialImg"></img>
                    <p>Name</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="testimonial">
                    <p>⭐⭐⭐⭐⭐</p>
                    <img src={Person3} className="testimonialImg"></img>
                    <p>Name</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="testimonial">
                    <p>⭐⭐⭐⭐⭐</p>
                    <img src={Person4} className="testimonialImg"></img>
                    <p>Name</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
        </div>

        <div className="About">
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
    </main>
  );
};
export default Nav;