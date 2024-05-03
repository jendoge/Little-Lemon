import React from "react";
 import logo from '../assets/logo.svg';
 import '../styles/Header.css';
 import { Link } from 'react-router-dom';

function Header(){
   return(
       <div className="header">
        <header>
           <img src={logo} className="logo" alt="Little Lemon Logo"/>
        </header>
           <nav className="navlist">
                <ul>
                   <li><Link to="/" className="link">Home</Link></li>
                   <li><Link to="/HomePage/About" className="link">About</Link></li>
                   <li><Link to="/HomePage/Menu" className="link">Menu</Link></li>
                   <li><Link to="/BookingPage" className="link">Reseravation</Link></li>
                   <li><Link to="/Onlineorder" className="link">Online Order</Link></li>
                   <li><Link to="/Login" className="link">Login</Link></li>
               </ul>           
            </nav>
    </div> 
    );
 }

export default Header;

