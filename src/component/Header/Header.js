import React from 'react';
import logo from '../../images/authors.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div>
                 <img src= {logo} alt="" />
            </div>
            <div>
                 <nav>
                     <a href="/home">Home</a>
                     <a href="/author">Author</a>
                     <a href="/publisher">Publisher</a>
                     <a href="/books">Books</a>
                     <a href="/contact">Contact</a>
                     <a href="/register">Register</a>
                 </nav>
            </div>
        </div>
    );
};

export default Header;