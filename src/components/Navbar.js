import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

import SignInPopup from './signInPopup/SignInPopup.js';

const displaySignInPopup = () => {
    console.log("Sign in");
}

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <div className="navbar-left">
                    <NavLink className="logo" to="/home">
                        <FontAwesomeIcon className="logo-icon" icon={faPeopleCarry} />
                        <p className="logo-text">Encapsulate</p>
                    </NavLink>
                </div>
                <div className="navbar-right">
                    <input className="search-bar" placeholder="Search..." autoComplete="off" />
                    <button className="sign-in-button" onClick={displaySignInPopup}>Sign in</button> 
                </div>
            </nav> 
        </div>
    );
}

export default Navbar;