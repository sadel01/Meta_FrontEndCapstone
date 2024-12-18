import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials';
import CustomerSay from './CustomerSay';
import Chicago from './Chicago';

const Homepage = () => {
    return (
        <div>
            <CallToAction />
            <Specials />
            <CustomerSay />
            <Chicago />
         </div>
        )
    }

export default Homepage;