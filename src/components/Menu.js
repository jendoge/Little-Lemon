import React from "react";
import '../styles/Menu.css';
import Salad from '../assets/greek salad.jpg';
import Bell from '../assets/bell.svg';
import Bruchetta from '../assets/bruchetta.jpg';
import LemonDessert from '../assets/lemon dessert.jpg';

function Main() {
    return(
        <body>
            <div className="menu">
           <div className="heading">
            <h1>This week specials!</h1>
            </div>
            <div className="menubutton"> 
            <button>Online menu</button>
            </div>
        
            <div className="card">
                <img className="dish-img" src={Salad} alt="Salad"/>
                <h1 className="heading-1"> 
                    Greek Salad 
                </h1>
                <h3 className="amount">
                    $8.99
                </h3>
                <p className="paragraph1">
                The famous greek sald of crispy lettuce, peppers, olives and 
                our Chicago style feta cheese, garnerised with rosemary croutons and garlic crisp.
                </p>
                <h2 className="delivery">
                    Order a delivery
                </h2>
                <img className="bell-logo" src={Bell} alt="Bell icon"/>
            </div>

            <div className="card">
            <img className="dish-img" src={Bruchetta} alt="Bruchetta"/>
                <h1 className="heading-1"> 
                    Bruchetta 
                </h1>
                <h3 className="amount">
                    $5.99
                </h3>
                <p className="paragraph">
                Our Bruschetta is made from grilled breed that has been smeared with garlic 
                and sessoned with salt and olive oil.
                </p>
                <h2 className="delivery">
                    Order a delivery
                </h2>
                <img className="bell-logo" src={Bell} alt="Bell icon"/>
                
            </div>

            <div className="card">
            <img className="dish-img" src={LemonDessert} alt="Lemon Dessert"/>
                <h1 className="heading-1"> 
                Lemon Dessert 
                </h1>
                <h3 className="amount">
                    $4.99
                </h3>
                <p className="paragraph">
                This comes straight from grandma's recipe book, every last ingredient has been sourced 
                and is as authentic as can be imagined.
                </p>
                <h2 className="delivery">
                    Order a delivery
                </h2>
                <img className="bell-logo" src={Bell} alt="Bell icon" />
            </div>
        </div>

        </body>
    );
}

export default Main;

