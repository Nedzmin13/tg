import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = ({ title, subtitle, btnText = "Richiedi Preventivo", link = "/preventivo" }) => {
    return (
        <div className="cta-full-width">
            <div className="container">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <Link to={link} className="btn-cta-white">
                    {btnText}
                </Link>
            </div>
        </div>
    );
};

export default CTASection;