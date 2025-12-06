import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Controlla se l'utente ha già cliccato "Accetto" in passato
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        // Salva la scelta nel browser
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie-text">
                <p>
                    Questo sito utilizza i cookie per garantirti la migliore esperienza.
                    Continuando a navigare, accetti la nostra <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>
            </div>
            <button onClick={handleAccept} className="cookie-btn">
                Accetto
            </button>
        </div>
    );
};

export default CookieBanner;