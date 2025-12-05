import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/homepage.png';
import './HomeStyles.css'; 

const Hero = () => {
    return (
        <div
            className="hero-section"
            style={{
                backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.85), rgba(30, 41, 59, 0.8)), url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                marginTop: '0',
                paddingTop: '80px'
            }}
        >
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                        fontWeight: '800',
                        letterSpacing: '2px'
                    }}
                >
                    TA.GE SAS
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                        marginBottom: '40px',
                        color: '#cbd5e1',
                        fontWeight: '300',
                        maxWidth: '700px',
                        margin: '0 auto 40px auto'
                    }}
                >
                    Produzione, saldatura e carpenteria dal 1998
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="hero-buttons-container"
                >
                    <Link to="/chi-siamo" className="btn-hero btn-white">
                        Chi Siamo
                    </Link>

                    <Link to="/preventivo" className="btn-hero btn-blue">
                        Richiedi Preventivo <span className="arrow">→</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;