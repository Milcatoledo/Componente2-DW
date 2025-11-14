import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css';

const Navbar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navigation">
            <ul className="nav-menu">
                <li><Link to="/home" className={`nav-link ${isActive('/home')}`}>Home</Link></li>
                <li><Link to="/profile" className={`nav-link ${isActive('/profile')}`}>Profile</Link></li>
                <li><Link to="/datatest" className={`nav-link ${isActive('/datatest')}`}>Datatest Now</Link></li>
                <li><a href="#" className="nav-link logout-link" onClick={(e) => { e.preventDefault(); handleLogout(); }}>Log Out</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
