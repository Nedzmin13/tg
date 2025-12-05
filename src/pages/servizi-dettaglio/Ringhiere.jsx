import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaIndustry } from 'react-icons/fa';
import CTASection from '../../components/CTASection';
import ContinuousSlider from '../../components/ContinuousSlider';
import './Services.css';

import SEO from '../../components/SEO';

import img1 from '../../assets/ringhiere/1.jpg';
import img2 from '../../assets/ringhiere/2.jpg';
import img3 from '../../assets/ringhiere/3.jpg';
import img4 from '../../assets/ringhiere/4.jpg';
import img5 from '../../assets/ringhiere/5.jpg';
import img6 from '../../assets/ringhiere/6.jpg';
import img7 from '../../assets/ringhiere/7.jpg';
import img8 from '../../assets/ringhiere/8.jpg';
import img9 from '../../assets/ringhiere/9.jpg';
import img10 from '../../assets/ringhiere/10.jpg';
import img11 from '../../assets/ringhiere/11.jpg';
import img12 from '../../assets/ringhiere/12.jpg';
import img13 from '../../assets/ringhiere/13.jpg';


const ringhiereImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

const Ringhiere = () => {
    return (
        <div className="page-wrapper">

            <SEO
                title="Ringhiere e Parapetti in Ferro"
                description="Produzione ringhiere per interni ed esterni, balconi e scale. Sicurezza, design moderno e conformità alle normative. Richiedi un preventivo."
                url="/servizi/ringhiere"
            />
            
            <div className="container">
                <div className="service-page-header">
                    <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>Ringhiere</motion.h1>
                    <p>Ringhiere per interni ed esterni, parapetti, balconi e scale.</p>
                    <p>Realizziamo ringhiere che uniscono sicurezza, funzionalità ed estetica.</p>
                </div>
            </div>

            {/* --- SLIDER INFINITO --- */}
            <ContinuousSlider images={ringhiereImages} />

            <div className="container">
                <div className="features-section" style={{marginTop: '60px'}}>
                    <h2 className="section-title">Perché Scegliere le Nostre Ringhiere</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Conformità Normative</h3>
                            <p>Rispetto delle norme di sicurezza per altezze e distanze.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Design Versatile</h3>
                            <p>Stili classici, moderni o minimali per ogni ambiente.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Materiali di Qualità</h3>
                            <p>Ferro, acciaio inox e alluminio con trattamenti protettivi.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Installazione Professionale</h3>
                            <p>Montaggio curato nei minimi dettagli.</p>
                        </div>
                    </div>
                </div>

                <h2 className="section-title">Applicazioni</h2>
                <div className="applications-grid">
                    <div className="app-item">
                        <div className="app-icon-box" style={{color: '#e74c3c'}}><FaHome /></div>
                        <h3>Abitazioni</h3>
                        <p style={{fontSize: '0.8rem', color: '#666'}}>Scale interne, balconi, terrazzi</p>
                    </div>
                    <div className="app-item">
                        <div className="app-icon-box" style={{color: '#3498db'}}><FaBuilding /></div>
                        <h3>Uffici</h3>
                        <p style={{fontSize: '0.8rem', color: '#666'}}>Scale di sicurezza, parapetti</p>
                    </div>
                    <div className="app-item">
                        <div className="app-icon-box" style={{color: '#f39c12'}}><FaIndustry /></div>
                        <h3>Industriale</h3>
                        <p style={{fontSize: '0.8rem', color: '#666'}}>Passerelle, soppalchi, piattaforme</p>
                    </div>
                </div>
            </div>

            <CTASection title="Hai bisogno di ringhiere?" subtitle="Contattaci per un sopralluogo e un preventivo gratuito" />
        </div>
    );
};

export default Ringhiere;