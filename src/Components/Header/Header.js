import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
             <header>
              <h2>TecDen Laptop Store</h2>

             <nav>
             <a href="/">Home</a>
                 <a href="/">Shop</a>
                 <a href="/">Contact Us</a>
                 <a href="/">About Us</a>
                 {/* <a href="/">Home <i className="fa-solid fa-house"></i></a>
                 <a href="/">Shop <i className="fa-solid fa-bag-shopping"></i></a>
                 <a href="/">Contact Us <i className="fa-solid fa-square-phone"></i></a>
                 <a href="/">About Us <i className="fa-solid fa-address-card"></i></a> */}
             </nav>

       </header>
        </div>
    );
};

export default Header;