import React from "react";
import '../styles/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterIcon from '../assets/footer icon.png'
import {
    faGithub,
    faLinkedin,
    faFacebook,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => { 

    const socials = [
        {
          icon: faGithub,
          url: "https://github.com",
          name: "GitHub"
        },
        {
          icon: faLinkedin,
          url: "https://www.linkedin.com",
          name: "LinkedIn"
        },
        {
          icon: faFacebook,
          url: "https://facebook.com",
          name: "Facebook"
        },
        {
          icon: faInstagram,
          url: "https://instagram.com",
          name: "Instagram"
        },
      ];

    return (
    <footer className="footer">
    <div>
        <img src={FooterIcon} alt="Logo"/>
    </div>
    <div>
        <h3>Site Nagivation</h3>
        <h4>About</h4>
        <h4>Menu</h4>
        <h4>Reservation</h4>
        <h4>Online Order</h4>
        <h4>Login</h4>
    </div>
    <div>
        <h3>Contact</h3>
        <p>
            Little Lemon Restaurant <br />
            123 Main Street <br />
            Chicago, IL 60601 <br />
            United States
        </p>
    </div>
    
      
    <div className="social-media">
        <div className="social-media-heading">
          <h3>Social Media Links</h3>
        </div>
        <div className="icons">
          {socials.map((social, index) => (
            <div key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link"
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
                <span className="icon-name">{social.name}</span>
              </a>
              
            </div>
          ))}
  </div>
  </div>
    </footer>
)
}
export default Footer;