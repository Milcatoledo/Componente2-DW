import Navbar from './Navbar';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-section">
                <div className="logo-text">
                    <h2>Fresh Vegetable and Fruit Detection</h2>
                </div>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;