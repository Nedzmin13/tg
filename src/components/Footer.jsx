import './Footer.css';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">

                {/* Colonna 1: Brand + Contatti */}
                <div className="footer-col">
                    <div className="footer-brand-box">
                        <div className="footer-graphic-col">
                            <img src={logo} alt="TA.GE SAS Logo" className="footer-logo" />
                        </div>
                        <div className="footer-brand-text">
                            {/* Usa il br per andare a capo come hai fatto tu */}
                            <h3>TA.GE S.A.S.<br />DI TATO GJERGJI & C.</h3>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="footer-graphic-col"><FaMapMarkerAlt className="footer-icon" /></div>
                        <span>Via Armando Diaz, 20/B<br />33044 - Manzano (UD)</span>
                    </div>

                    <div className="contact-item">
                        <div className="footer-graphic-col"><FaPhone className="footer-icon" /></div>
                        <a href="tel:+393381687677" className="footer-link">+39 338 168 7677</a>
                    </div>

                    <div className="contact-item">
                        <div className="footer-graphic-col"><FaEnvelope className="footer-icon" /></div>
                        <a href="mailto:ta.ge_sas@alice.it" className="footer-link">ta.ge_sas@alice.it</a>
                    </div>

                    <div className="contact-item">
                        <div className="footer-graphic-col"><FaEnvelope className="footer-icon" /></div>
                        <a href="mailto:info@ta-ge.it" className="footer-link">info@ta-ge.it</a>
                    </div>
                </div>

                {/* Colonna 2: Link Rapidi */}
                <div className="footer-col">
                    <h3>Link Rapidi</h3>
                    <ul className="footer-links-list">
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/chi-siamo" className="footer-link">Chi Siamo</Link></li>
                        <li><Link to="/servizi" className="footer-link">Servizi</Link></li>
                        <li><Link to="/contatti" className="footer-link">Contatti</Link></li>
                        <li><Link to="/lavora-con-noi" className="footer-link">Lavora con Noi</Link></li>
                        <li><Link to="/preventivo" className="footer-link">Richiedi Preventivo</Link></li>
                    </ul>
                </div>


                <div className="footer-col">
                    <h3>I Nostri Servizi</h3>
                    <ul className="footer-links-list">
                        <li><Link to="/servizi/sedie" className="footer-link">Produzione sedie</Link></li>
                        <li><Link to="/servizi/tavoli" className="footer-link">Tavoli su misura</Link></li>
                        <li><Link to="/servizi/cancelli" className="footer-link">Cancelli in ferro</Link></li>
                        <li><Link to="/servizi/ringhiere" className="footer-link">Ringhiere</Link></li>
                        <li><Link to="/servizi/cancelli" className="footer-link">Carpenteria leggera</Link></li>
                        <li><Link to="/progetti" className="footer-link">Progetti personalizzati</Link></li>
                    </ul>
                </div>
            </div>

            {/* Barra Inferiore */}
            <div className="footer-bottom-bar">
                <div className="container footer-bottom-container">
                    <div className="footer-socials">
                        <span>Seguici sui social:</span>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>

                    <div className="footer-copyright">
                        © {new Date().getFullYear()} TA.GE S.A.S. DI TATO GJERGJI & C. P.IVA / C.F: 02184200307 - Tutti i diritti riservati.
                        {' - '}
                        <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
                        {' - '}
                        Powered By <a href="https://codened.it/" target="_blank" rel="noopener noreferrer" className="codened-link">CodeNed</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;