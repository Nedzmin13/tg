import { motion } from 'framer-motion';
import ServicesPreview from './Home/ServicesPreview';
import './servizi-dettaglio/Services.css';

const Servizi = () => {
    return (
        <div className="page-wrapper">
            <div className="service-page-header">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    I Nostri Servizi
                </motion.h1>
                <p>Soluzioni complete di carpenteria e arredamento metallico, dal progetto alla posa in opera.</p>
            </div>

            <ServicesPreview />

            <div className="container" style={{marginBottom: '80px'}}>
                <div className="cta-section">
                    <h2>Hai un progetto speciale?</h2>
                    <p>Realizziamo lavorazioni su misura fuori standard.</p>
                    <a href="/preventivo" className="btn-white">Parla con noi</a>
                </div>
            </div>
        </div>
    );
};

export default Servizi;