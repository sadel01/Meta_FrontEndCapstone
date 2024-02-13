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
                    <p>Michael</p>
                    <p>Little Lemon is my go-to spot for a special night out. The staff is attentive and the food is consistently delicious. Highly recommended!"</p>
                </div>
                <div className="testimonial">
                    <p>⭐⭐⭐⭐⭐</p>
                    <img src={Person2} className="testimonialImg"></img>
                    <p>Emily</p>
                    <p>As a food expert, I'm always on the lookout for hidden gems, and Little Lemon is definitely one of them. From the first bite to the last, every dish was a culinary masterpiece.</p>
                </div>
                <div className="testimonial">
                    <p>⭐⭐⭐⭐⭐</p>
                    <img src={Person3} className="testimonialImg"></img>
                    <p>David</p>
                    <p>I've been a regular at Little Lemon for years, and it never disappoints. The flavors are always fresh and vibrant, and the service is top-notch.</p>
                </div>
                <div className="testimonial">
                    <p>⭐⭐⭐⭐⭐</p>
                    <img src={Person4} className="testimonialImg"></img>
                    <p>Sarah</p>
                    <p>Little Lemon exceeded my expectations! The atmosphere was charming, and the food was simply divine. I can't wait to come back for more.</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerSay;