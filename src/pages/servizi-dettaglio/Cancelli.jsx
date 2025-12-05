import { motion } from 'framer-motion';
import CTASection from '../../components/CTASection';
import ContinuousSlider from '../../components/ContinuousSlider';
import './Services.css';
import SEO from '../../components/SEO';


import img1 from '../../assets/cancelli/1.jpg';
import img2 from '../../assets/cancelli/2.jpg';
import img3 from '../../assets/cancelli/3.jpg';
import img4 from '../../assets/cancelli/4.jpg';
import img5 from '../../assets/cancelli/5.jpg';
import img6 from '../../assets/cancelli/6.jpg';
import img7 from '../../assets/cancelli/7.jpg';
import img8 from '../../assets/cancelli/8.jpg';
import img9 from '../../assets/cancelli/9.jpg';
import img10 from '../../assets/cancelli/10.jpg';
import img11 from '../../assets/cancelli/11.jpg';
import img12 from '../../assets/cancelli/12.jpg';
import img13 from '../../assets/cancelli/13.jpg';


const cancelliImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

const Cancelli = () => {
    return (
        <div className="page-wrapper">

            <SEO
                title="Cancelli in Ferro su Misura"
                description="Realizzazione cancelli in ferro moderni e classici, carrai e pedonali. Sicurezza e design per la tua casa o azienda."
                url="/servizi/cancelli"
            />
            
            <div className="container">
                <div className="service-page-header">
                    <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>Cancelli in Ferro</motion.h1>
                    <p>Realizziamo cancelli in ferro su misura: moderni, classici, pedonali e carrai.</p>
                    <p>Progettati per durare e garantire la massima sicurezza.</p>
                </div>
            </div>

            {/* --- SLIDER INFINITO --- */}
            <ContinuousSlider images={cancelliImages} />

            <div className="container">
                <h2 className="section-title" style={{marginTop: '60px'}}>Caratteristiche dei Nostri Cancelli</h2>
                <div className="features-grid" style={{marginBottom: '80px'}}>
                    <div className="feature-card">
                        <h3>Sicurezza</h3>
                        <p>Strutture robuste e resistenti per proteggere la tua proprietà.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Design Personalizzato</h3>
                        <p>Progettazione su misura per integrarsi perfettamente con la tua casa.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Durabilità</h3>
                        <p>Trattamenti antiruggine e verniciature di alta qualità.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Automazione</h3>
                        <p>Predisposti per l'installazione di motori elettrici.</p>
                    </div>
                </div>

                <h2 className="section-title">Tipologie di Cancelli</h2>
                <div className="types-list">
                    <div className="type-item">
                        <h3>Cancelli a Battente</h3>
                        <p>Apertura classica con una o due ante, ideali per ingressi residenziali.</p>
                    </div>
                    <div className="type-item">
                        <h3>Cancelli Scorrevoli</h3>
                        <p>Perfetti dove lo spazio è limitato, scorrono lateralmente su binario.</p>
                    </div>
                    <div className="type-item">
                        <h3>Cancelli Pedonali</h3>
                        <p>Accesso indipendente per le persone, abbinabili al cancello principale.</p>
                    </div>
                </div>
            </div>

            <CTASection title="Hai bisogno di un cancello?" subtitle="Richiedi un preventivo gratuito e senza impegno" />
        </div>
    );
};

export default Cancelli;