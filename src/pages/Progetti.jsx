import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContinuousSlider from '../components/ContinuousSlider';
import './Progetti.css';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

import img1 from '../assets/homepage.png';
import img2 from '../assets/chiSiamo1.png';
import img3 from '../assets/chiSiamo3.png';
import img4 from '../assets/logo_grande.png';
import img5 from '../assets/cancelli/13.jpg';
import img6 from '../assets/cancelli/2.jpg';
import img7 from '../assets/ringhiere/3.jpg';
import img8 from '../assets/ringhiere/4.jpg';
import img9 from '../assets/ringhiere/6.jpg';
import img10 from '../assets/sedie/2.jpg';
import img11 from '../assets/sedie/9.png';
import img12 from '../assets/tavoli/5.png';
import img13 from '../assets/tavoli/6.jpg';


const progettiImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13 ];

const Progetti = () => {
    return (
        <div className="page-wrapper">

            <SEO
                title="Progetti su Misura e Lavorazioni Speciali"
                description="Hai un'idea? Noi la realizziamo. Dal disegno tecnico al prodotto finito, TA.GE SAS è specializzata in carpenteria metallica personalizzata."
                url="/progetti"
            />

            <div className="container">
                <div className="projects-header">
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                        Progetti su Misura
                    </motion.h1>
                    <p className="subtitle-projects">
                        Siamo specializzati in lavorazioni personalizzate. Se puoi immaginarlo, possiamo realizzarlo.
                    </p>
                </div>

                <motion.div
                    className="intro-projects"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p>
                        Dal disegno tecnico al prodotto finito, ci occupiamo di ogni fase della lavorazione
                        con competenza e passione. Ogni progetto è unico e viene seguito nei minimi dettagli.
                    </p>
                </motion.div>
            </div>

            {/* --- SLIDER INFINITO --- */}
            <ContinuousSlider images={progettiImages} />

            <div className="container">
                {/* Timeline Processo */}
                <div className="process-section" style={{marginTop: '80px'}}>
                    <h2 className="section-title-process">Il Nostro Processo</h2>

                    <motion.div className="process-step" initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}}>
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Consulenza</h3>
                            <p>Analizziamo insieme il tuo progetto e le tue esigenze per capire la soluzione migliore.</p>
                        </div>
                    </motion.div>

                    <motion.div className="process-step" initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} transition={{delay:0.1}}>
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>Progettazione</h3>
                            <p>Sviluppiamo il disegno tecnico e valutiamo la fattibilità costruttiva.</p>
                        </div>
                    </motion.div>

                    <motion.div className="process-step" initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} transition={{delay:0.2}}>
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Preventivo</h3>
                            <p>Ti forniamo un preventivo dettagliato e trasparente, senza sorprese.</p>
                        </div>
                    </motion.div>

                    <motion.div className="process-step" initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} transition={{delay:0.3}}>
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h3>Produzione</h3>
                            <p>Realizziamo il prodotto con macchinari moderni e maestranze esperte nel nostro stabilimento.</p>
                        </div>
                    </motion.div>

                    <motion.div className="process-step" initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} transition={{delay:0.4}}>
                        <div className="step-number">5</div>
                        <div className="step-content">
                            <h3>Consegna</h3>
                            <p>Consegniamo il prodotto finito o forniamo supporto per l'installazione in loco.</p>
                        </div>
                    </motion.div>

                </div>

                <div className="cta-section" style={{ background: '#2c5282', color: 'white', textAlign: 'center', padding: '80px 20px', borderRadius: '8px', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Hai un'idea da realizzare?</h2>
                    <p style={{ marginBottom: '30px', opacity: 0.9 }}>Parla con i nostri tecnici per trasformarla in realtà.</p>
                    <Link to="/preventivo" className="btn-white" style={{ background: 'white', color: '#2c5282', padding: '12px 30px', borderRadius: '5px', fontWeight: '600', border: 'none', textDecoration: 'none' }}>
                        Richiedi Preventivo
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Progetti;