import { motion } from 'framer-motion';
import { FaRulerCombined, FaPalette, FaDumbbell } from 'react-icons/fa';
import CTASection from '../../components/CTASection';
import ContinuousSlider from '../../components/ContinuousSlider';
import './Services.css';

import SEO from '../../components/SEO';

import img1 from '../../assets/tavoli/1.jpg';
import img2 from '../../assets/tavoli/2.jpg';
import img3 from '../../assets/tavoli/3.jpg';
import img4 from '../../assets/tavoli/4.jpg';
import img5 from '../../assets/tavoli/5.png';
import img6 from '../../assets/tavoli/6.jpg';
import img7 from '../../assets/tavoli/7.jpg';
import img8 from '../../assets/tavoli/8.jpg';
import img9 from '../../assets/tavoli/9.jpg';
import img10 from '../../assets/tavoli/10.jpg';

const tavoliImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Tavoli = () => {
    return (
        <div className="page-wrapper">

            <SEO
                title="Tavoli su Misura in Metallo e Legno"
                description="Realizziamo tavoli personalizzati per casa e ristoranti. Strutture in metallo robuste e design unico. Scopri la nostra produzione artigianale."
                url="/servizi/tavoli"
            />

            {/* Container Header */}
            <div className="container">
                <div className="service-page-header">
                    <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>Tavoli su Misura</motion.h1>
                    <p>Tavoli personalizzati in metallo e legno, su misura per ristoranti, uffici e abitazioni.</p>
                    <p style={{marginTop:'10px'}}>Ogni tavolo è realizzato secondo le tue specifiche: dimensioni, materiali, finiture.</p>
                </div>
            </div>

            {/* --- SLIDER INFINITO --- */}
            <ContinuousSlider images={tavoliImages} />

            {/* Container Contenuto */}
            <div className="container">
                <h2 className="section-title" style={{marginTop: '60px'}}>Caratteristiche dei Nostri Tavoli</h2>

                <div className="icon-feature-grid">
                    <div className="icon-feature-card">
                        <FaRulerCombined className="feature-icon" />
                        <h3>Su Misura</h3>
                        <p>Dimensioni personalizzate per ogni spazio.</p>
                    </div>
                    <div className="icon-feature-card">
                        <FaPalette className="feature-icon" />
                        <h3>Design Unico</h3>
                        <p>Stile industriale, moderno o classico.</p>
                    </div>
                    <div className="icon-feature-card">
                        <FaDumbbell className="feature-icon" />
                        <h3>Resistenza</h3>
                        <p>Strutture robuste e durevoli nel tempo.</p>
                    </div>
                </div>

                <h2 className="section-title">Materiali e Finiture</h2>
                <div className="materials-grid">
                    <div className="material-col">
                        <h3>Strutture Metalliche</h3>
                        <ul>
                            <li>Acciaio verniciato a polvere</li>
                            <li>Ferro nero opaco</li>
                            <li>Acciaio inox lucido o satinato</li>
                            <li>Tubolare quadro o tondo</li>
                        </ul>
                    </div>
                    <div className="material-col">
                        <h3>Piani Tavolo</h3>
                        <ul>
                            <li>Legno massello (rovere, noce, ecc.)</li>
                            <li>Vetro temperato</li>
                            <li>Laminato HPL</li>
                            <li>Ceramica o gres porcellanato</li>
                        </ul>
                    </div>
                </div>
            </div>

            <CTASection title="Progetta il tuo tavolo ideale" subtitle="Contattaci per discutere il tuo progetto" />
        </div>
    );
};

export default Tavoli;