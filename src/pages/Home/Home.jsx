import Hero from './Hero';
import ServicesPreview from './ServicesPreview';
import { Link } from 'react-router-dom';
import './HomeStyles.css';
import SEO from '../../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Carpenteria e Arredamento Metallico"
                description="TA.GE SAS dal 1998 è leader nella produzione di sedie, tavoli, cancelli e carpenteria metallica a Manzano (UD). Qualità artigianale e industriale."
                url="/"
            />
            <Hero />
            <ServicesPreview />

            <div className="home-cta-section">
                <div className="container">
                    <h2>Hai un progetto in mente?</h2>
                    <p style={{ margin: '20px 0', opacity: 0.9, fontSize: '1.1rem' }}>
                        Contattaci per un preventivo gratuito e senza impegno
                    </p>

                    <Link to="/preventivo" className="btn-home-cta">
                        Richiedi Preventivo Ora
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;