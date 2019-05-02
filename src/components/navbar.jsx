import React from 'react';

const Navbar = () => {

    return (
        <nav className="navbar" style={{backgroundColor: "#76a912"}}>
            <img className = "img-cirlce" src='favicon.ico' alt="plantlove"></img>
            <ul>
                <li>Settings</li>
                <li>About</li>
            </ul>
        </nav>
    );
}

export default Navbar;