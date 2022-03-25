import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
             <header>
              <h2>Computer Store</h2>

             <nav>
                 <a href="/">Home <i className="fa-solid fa-house"></i></a>
                 <a href="/">Shop <i className="fa-solid fa-bag-shopping"></i></a>
                 <a href="/">Contact Us <i className="fa-solid fa-square-phone"></i></a>
                 <a href="/">About Us <i className="fa-solid fa-address-card"></i></a>
             </nav>

       </header>
        </div>
    );
};

export default Header;