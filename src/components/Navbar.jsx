import React from 'react';
import Style from './Navbar.module.css'

const Navbar = () => {

    const toggleSlide = () => {
        document.querySelector(`.${Style.navBurgerTop}`).classList.toggle(Style.navBurgerTopRotated);
        document.querySelector(`.${Style.navBurgerMiddle}`).classList.toggle(Style.navBurgerMiddleHidden);
        document.querySelector(`.${Style.navBurgerBottom}`).classList.toggle(Style.navBurgerBottomRotated);

        document.querySelector(`.${Style.navLinks}`).classList.toggle(Style.navLinksSlide);
    }

    return (
        <div className={Style.nav}>
            <div className={Style.navLogo}><a href="/"><h3>LOGO</h3></a></div>
            <ul className={Style.navLinks}>
                <li> <a href="/add">Add</a></li>
                <li> <a href="/settings">Settings</a></li>
                <li> <a href="#">Stuff</a></li>
                <li> <a href="#">Things</a></li>
            </ul>
            <div className={Style.navBurger} onClick={toggleSlide}>
                <div className={Style.navBurgerTop}></div>
                <div className={Style.navBurgerMiddle}></div>
                <div className={Style.navBurgerBottom}></div>
            </div>
        </div>
    );
}

export default Navbar;