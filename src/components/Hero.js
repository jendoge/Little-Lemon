import React from "react";
import Heroimage from '../assets/heroimage.jpg'
import '../styles/Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigateTo = useNavigate();
  
    const clickReserveButton = () => {
      navigateTo('/BookingPage');
    };
  
    return (
     <body className="herosection">
            <div className="title">
                <h1>Little Lemon</h1>
                <h2>Chigago</h2>
                <p>We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist </p>
                <button onClick={clickReserveButton} className="btn">Reserve a Table</button>
            </div>
            <div className="heroimage">
            <img src={Heroimage} alt="hightlight dish"/>
            </div>
      </body>
    )
}

export default Hero;