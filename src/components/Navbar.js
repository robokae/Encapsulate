import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar(props) { 
    const isLoggedIn = props.isLoggedIn;

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
                    {isLoggedIn
                        ? <button class="log-out-button">Log out</button>
                        : <button 
                            className="sign-in-button"
                            onClick={props.displayPopup}
                        >
                                Sign in
                        </button> 
                    }
                    
                </div>
            </nav> 
        </div>
    );
}

export default Navbar;