import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <NavLink to="/home">Encapsulate</NavLink>
            </nav> 
        </div>
    );
}

export default Navbar;