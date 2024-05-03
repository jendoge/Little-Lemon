import React from "react";
import '../styles/About.css';
import Restaurant from '../assets/restaurant.jpg';
import Owners from '../assets/Mario and Adrian.jpg';

const About = () => (
    <div className="About">
        <div>
        <h2 className="Little-Lemon">Little Lemon</h2>
        <h3 className="chigago">Chigago</h3>
        <p>
        Adrian, a passionate chef, and Mario, a savvy entrepreneur, joined forces to realize their culinary dream. 
        Together, they founded "Little Lemon" a cozy restaurant nestled in the heart of the city. 
        Their shared vision and dedication turned "Savor Harmony" into a beloved dining destination. 
        With Adrin's inventive recipes and Marion's charm, they enchanted patrons, leaving a lasting imprint on the local food scene.
        </p>
        </div>
        <div>
        <img src={Restaurant} alt='Restaurant' className="Restaurant-Image"/>
        <img src={Owners} alt='Restaurant' className="Owners-Image"/>
        </div>
    </div>
)

export default About;