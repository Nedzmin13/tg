import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">

                {/* 1. Logo a Sinistra */}
                <div className="navbar-logo-container">
                    <Link to="/">
                        <img src={logo} alt="TA.GE SAS Logo" className="logo-img" />
                    </Link>
                </div>

                {/* 2. Icona Mobile */}
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX /> : <FiMenu />}
                </div>

                {/* 3. Menu Centrale */}
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item"><Link to="/chi-siamo" className="nav-link">Chi Siamo</Link></li>
                    <li className="nav-item"><Link to="/servizi" className="nav-link">Servizi</Link></li>
                    <li className="nav-item"><Link to="/progetti" className="nav-link">Progetti</Link></li>
                    <li className="nav-item"><Link to="/contatti" className="nav-link">Contatti</Link> </li>
                    <li className="nav-item"><Link to="/lavora-con-noi" className="nav-link">Lavora con Noi</Link></li>

                    {/* Bottone visibile SOLO nel menu a tendina mobile */}
                    <li className="nav-item mobile-btn">
                        <Link to="/preventivo" className="btn btn-primary" onClick={() => setIsOpen(false)}>Richiedi Preventivo</Link>
                    </li>
                </ul>

                {/* 4. Bottone a Destra (Visibile solo Desktop) */}
                <div className="nav-btn-container">
                    <Link to="/preventivo" className="btn btn-primary">Richiedi Preventivo</Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;