import React from "react";
import '../styles/Testimonials.css';
import Doge from '../assets/Doge.png';
import Cheems from '../assets/cheems.png';
import Doge2 from '../assets/Doge2.png';
import Cheems2 from '../assets/cheems2.png'


const Testimonials = () => (
    <div className="Testimonials">
        <h1 className="Testimonaials-Heading">
            Testimonials
            </h1>
        <div className="Testimonials-Card">
        <div className="Quotes">
        <p>
        "Delicious from start to finish. Can't wait to come back! Super experience!"
        </p>
        </div>
        <div className="Profile">
        <img src = {Doge} alt='Person1' className="profile-pic"/>
        </div>
        <div className="Profile-Name">
        <h3>Doge</h3>
        </div>
    </div>

    <div className="Testimonials-Card">
    
        <div className="Quotes">
        <p>
        "Perfect ambiance, impeccable service, top-notch food. Highly recommend!"
        </p>
        </div>
        <div className="Profile">
        <img src = {Cheems} alt='Person2' className="profile-pic"/>
        </div>
        <div className="Profile-Name">
        <h3>Baltze</h3>
        </div>
    </div>

    <div className="Testimonials-Card">

    
    
        <div className="Quotes">
        <p>
        "Hands down the best restaurant in town! 
        Top-notch service and cuisine. Best in town!
        </p>
        </div>
        <div className="Profile">
        <img src = {Doge2} alt='Person3' className="profile-pic"/>
        </div>
        <div className="Profile-Name">
        <h3>Astro</h3>
        </div>
    </div>

    <div className="Testimonials-Card">
        <div className="Quotes">
        <p>
        "Exceptional flavors, impeccable presentation, a culinary journey you won't forget!"
        </p>
        </div>
        <div className="Profile">
        <img src = {Cheems2} alt='Person4' className="profile-pic"/>
        </div>
        <div className="Profile-Name">
        <h3>Cheems</h3>
        </div>
    </div>
    </div>
);

export default Testimonials;