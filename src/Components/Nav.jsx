import React from 'react';
import search from '../img/icons.svg';
import userPhoto from '../img/users/user-4.jpg';
import logo from '../img/logo-white.png';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <header className="header">
                <nav className="nav nav--tours">
                    <a href="#" className="nav__el">All tours</a>
                    <form className="nav__search">
                        <button className="nav__search-btn">

                            <svg>
                                <use xlinkHref={`${search}#icon-search`}></use>
                            </svg>
                        </button>
                        <input
                            type="text"
                            placeholder="Search tours"
                            className="nav__search-input"
                        />
                    </form>
                </nav>
                <div className="header__logo">
                    <img src={logo} alt="Natours logo" />
                </div>
                <nav className="nav nav--user">
                    <a href="#" className="nav__el">My bookings</a>
                    <a href="#" className="nav__el">
                        <img src={userPhoto} alt="User photo" className="nav__user-img" />
                        <span>Jonas</span>
                    </a>

                    {/*    <button className="nav__el">Log in</button>*/}
                    {/*<button className="nav__el nav__el--cta">Sign up</button>*/}
                </nav>
            </header>
        </div>
    );
};

export default Nav;