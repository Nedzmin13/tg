import { motion } from 'framer-motion';
import CTASection from '../../components/CTASection';
import ContinuousSlider from '../../components/ContinuousSlider';
import './Services.css';
import SEO from '../../components/SEO';


import img1 from '../../assets/sedie/2.jpg';
import img2 from '../../assets/sedie/1.jpg';
import img3 from '../../assets/sedie/3.jpg';
import img4 from '../../assets/sedie/4.jpg';
import img5 from '../../assets/sedie/5.jpg';
import img6 from '../../assets/sedie/6.jpg';
import img7 from '../../assets/sedie/7.jpg';
import img8 from '../../assets/sedie/8.jpg';
import img9 from '../../assets/sedie/9.png';
import img10 from '../../assets/sedie/10.jpg';

const sedieImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Sedie = () => {
    return (
        <div className="page-wrapper">

            <SEO
                title="Produzione Sedie in Metallo"
                description="Produciamo oltre 100 modelli di sedie partendo dal tubo grezzo fino al prodotto finito. Personalizzazione e qualità garantita."
                url="/servizi/sedie"
            />

            {/* Contenuto principale */}
            <div className="container">

                <div className="service-page-header">
                    <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>Sedie</motion.h1>
                    <p>Produciamo <strong>oltre 100 modelli di sedie</strong> partendo da un disegno o progettandole insieme al cliente.</p>
                    <p style={{marginTop:'10px', fontSize:'0.95rem'}}>Dal tubo grezzo alla sedia finita, ogni fase è curata nel nostro stabilimento.</p>
                </div>

            </div>


            <ContinuousSlider images={sedieImages} />

            <div className="container">
                {/* Features Grid */}
                <div className="features-section" style={{marginTop: '60px'}}>
                    <h2 className="section-title">Perché Scegliere le Nostre Sedie</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Personalizzazione</h3>
                            <p>Realizziamo sedie su disegno o progetto personalizzato secondo le tue esigenze.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Qualità Garantita</h3>
                            <p>Controllo qualità in ogni fase, dal taglio del tubo alla finitura finale.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Produzione Interna</h3>
                            <p>Tutto realizzato nel nostro stabilimento con macchinari all'avanguardia.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Vasta Scelta</h3>
                            <p>Oltre 100 modelli disponibili per ogni stile e necessità.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Full Width */}
            <CTASection
                title="Hai bisogno di sedie personalizzate?"
                subtitle="Contattaci per un preventivo gratuito"
            />
        </div>
    );
};

export default Sedie;