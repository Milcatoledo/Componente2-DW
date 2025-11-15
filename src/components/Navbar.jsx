import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css';


import { useState } from 'react';

const Navbar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navigation">
            <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={handleMenuToggle} aria-label="Abrir menú">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
                <li><Link to="/home" className={`nav-link ${isActive('/home')}`} onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/profile" className={`nav-link ${isActive('/profile')}`} onClick={handleLinkClick}>Profile</Link></li>
                <li><Link to="/datatest" className={`nav-link ${isActive('/datatest')}`} onClick={handleLinkClick}>Datatest Now</Link></li>
                <li><a href="#" className="nav-link logout-link" onClick={(e) => { e.preventDefault(); handleLogout(); handleLinkClick(); }}>Log Out</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
