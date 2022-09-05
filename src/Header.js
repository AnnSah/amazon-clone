import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            {/* logo of amazon */}
            <Link to="/">
                <img className="header__logo" src="/images/Amazon-Logo-Transparent-1024x310.png" alt="amazonlogo" /> </Link>

            {/* Serach Box */}
            <div className='header__search'>
                <input type="text" className="header__searchInput" ></input>
                <img className="search__icon" src="/images/search-interface-symbol.png" alt='searchicon'></img>
            </div>

            {/* 3 links */}
            <div className="header__nav">
                {/* 1st Link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email} </span>
                        <span className="header__optionLineTwo">   {user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo"> & Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <img className="header__icon header__span" src="/images/shopping-cart (2).png" alt="basket"></img>
                        <span className="header__span">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav >
    )
}

export default Header;