import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Forms.css';
import SEO from '../components/SEO';

const Contatti = () => {
    return (
        <div className="page-wrapper">

            <SEO
                title="Contatti e Dove Siamo"
                description="Contatta TA.GE SAS a Manzano (UD). Telefono, email e mappa. Siamo a tua disposizione per informazioni sulla nostra carpenteria metallica."
                url="/contatti"
            />
            
            <div className="container" style={{ padding: '140px 20px 100px' }}>

                <div className="form-header">
                    <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>Contatti</motion.h1>
                    <p>Siamo a tua disposizione per informazioni, preventivi e collaborazioni.</p>
                </div>

                <div className="split-page-layout" style={{ alignItems: 'center' }}>

                    {/* Colonna Sinistra: Info */}
                    <motion.div className="split-content-side" initial={{opacity:0, x:-50}} animate={{opacity:1, x:0}}>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: '30px', color: '#2c3e50' }}>I Nostri Recapiti</h3>

                            <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'flex-start' }}>
                                <FaMapMarkerAlt style={{ color: '#3498db', fontSize: '1.5rem' }} />
                                <div>
                                    <strong>Indirizzo:</strong><br />
                                    Via Armando Diaz, 20/B<br />33044 - Manzano (UD)
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'flex-start' }}>
                                <FaPhone style={{ color: '#3498db', fontSize: '1.5rem' }} />
                                <div>
                                    <strong>Telefono:</strong><br />
                                    <a href="tel:+393381687677" style={{ color: '#555', textDecoration: 'none' }}>+39 338 168 7677</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'flex-start' }}>
                                <FaEnvelope style={{ color: '#3498db', fontSize: '1.5rem' }} />
                                <div>
                                    <strong>Email:</strong><br />
                                    <a href="mailto:info@ta-ge.it" style={{ color: '#555', textDecoration: 'none', display: 'block' }}>info@ta-ge.it</a>
                                    <a href="mailto:ta.ge_sas@alice.it" style={{ color: '#555', textDecoration: 'none', display: 'block' }}>ta.ge_sas@alice.it</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Colonna Destra: Bottoni Azione */}
                    <motion.div className="split-image-side" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}}>
                        <div style={{ textAlign: 'center', padding: '40px' }}>
                            <h3 style={{ marginBottom: '20px' }}>Come possiamo aiutarti?</h3>

                            <p style={{ marginBottom: '30px', color: '#666' }}>
                                Hai un progetto in mente o vuoi unirti al nostro team? Scegli il percorso giusto per te.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <Link to="/preventivo" className="btn-blue-brand" style={{ textDecoration: 'none', padding: '18px' }}>
                                    Richiedi un Preventivo
                                </Link>

                                <Link to="/lavora-con-noi" className="btn-outline-blue" style={{ textDecoration: 'none', padding: '18px', justifyContent: 'center' }}>
                                    Lavora con Noi
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default Contatti;