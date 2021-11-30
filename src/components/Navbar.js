import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

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
                    <button className="sign-in-button">Sign in</button> 
                </div>
            </nav> 
        </div>
    );
}

export default Navbar;