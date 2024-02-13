import React from 'react'
import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";
import Person4 from "../assets/person4.png";

const CustomerSay = () => {
    return (
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
    )
}

export default CustomerSay;