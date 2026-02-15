
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar: FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">OpenL4bs</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
};
