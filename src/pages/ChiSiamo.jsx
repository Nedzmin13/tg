import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import headerBg from '../assets/homepage.png';
import imgDesign from '../assets/chiSiamo1.png';
import imgMachine from '../assets/chiSiamo2.png';
import imgWelder from '../assets/chiSiamo3.png';
import logoGrande from '../assets/logo_grande.png';
import './ChiSiamo.css';
import SEO from '../components/SEO';


const ChiSiamo = () => {
    // Animazione
    const fastFade = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="page-wrapper">

            <SEO
                title="Chi Siamo - La Nostra Storia"
                description="Scopri la storia di TA.GE SAS. Dal 1998 esperti nella lavorazione del metallo, saldatura e assemblaggio. Un'azienda familiare con tecnologie moderne."
                url="/chi-siamo"
            />

            {/* Header */}
            <div className="about-header" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="about-header-content">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Chi Siamo
                    </motion.h1>
                    <p>La nostra storia, la nostra passione</p>
                </div>
            </div>

            <div className="container">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fastFade}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '40px',
                        marginTop: '40px'
                    }}
                >
                    <img
                        src={logoGrande}
                        alt="Logo TA.GE Grande"
                        style={{
                            width: '100%',
                            maxWidth: '550px',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </motion.div>

                {/* Intro Testo */}
                <motion.div
                    className="intro-text-section"
                    initial="hidden"
                    animate="visible"
                    variants={fastFade}
                >
                    <p>
                        Fondata nel <strong>1998</strong>, la nostra azienda si è occupata inizialmente della saldatura
                        di componenti e dell’assemblaggio di sedie e tavoli.
                    </p>
                    <p>
                        Negli anni, ampliando il parco macchinari, abbiamo evoluto la produzione gestendo l'intero ciclo,
                        dalla materia prima all'articolo finito.
                    </p>
                    <p>
                        Oggi curiamo ogni fase internamente: <strong>progettazione, taglio, piegatura, saldatura e assemblaggio</strong>.
                    </p>
                </motion.div>

                {/* Design Section */}
                <motion.div
                    className="design-section"
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                    variants={fastFade}
                >
                    <h2>Dal Disegno al Prodotto Finito</h2>
                    <p>Ogni progetto nasce da un disegno tecnico dettagliato e si trasforma in un prodotto reale grazie alla nostra esperienza e ai nostri macchinari moderni.</p>
                    <div className="design-image-container">
                        <img src={imgDesign} alt="Progettazione e disegni tecnici" />
                    </div>
                </motion.div>

                {/* Macchinari */}
                <motion.div
                    className="split-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fastFade}
                >
                    <div className="split-image">
                        <img src={imgMachine} alt="Macchinario piegatrice" className="transparent-img" />
                    </div>
                    <div className="split-text">
                        <h3>Macchinari e Tecnologie</h3>
                        <span className="subtitle">Parco Macchinari Moderno</span>
                        <ul className="feature-list">
                            <li className="feature-item"><FaCheckCircle className="check-icon" /><div><strong>Calandra:</strong> per curvature precise</div></li>
                            <li className="feature-item"><FaCheckCircle className="check-icon" /><div><strong>Curvatubi:</strong> piegatura tubolare di alta precisione</div></li>
                            <li className="feature-item"><FaCheckCircle className="check-icon" /><div><strong>Presse:</strong> lavorazione lamiere</div></li>
                            <li className="feature-item"><FaCheckCircle className="check-icon" /><div><strong>Troncatrice:</strong> taglio preciso</div></li>
                            <li className="feature-item"><FaCheckCircle className="check-icon" /><div><strong>Piega e Cesoia Lamiera:</strong> manuale e CNC</div></li>
                        </ul>
                    </div>
                </motion.div>

                {/* Saldatura */}
                <motion.div
                    className="split-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fastFade}
                >
                    <div className="split-text">
                        <h3>Tipi di Saldatura</h3>
                        <p style={{marginBottom: '20px', color: '#666'}}>Utilizziamo le tecniche di saldatura più moderne e affidabili.</p>
                        <ul className="feature-list">
                            <li className="feature-item"><FaCheckCircle className="check-icon" /><div><strong>MIG</strong><p>Saldatura a filo continuo per produzioni veloci</p></div></li>
                            <li className="feature-item"><FaCheckCircle className="check-icon" /><div><strong>TIG</strong><p>Saldatura di precisione per finiture perfette</p></div></li>
                            <li className="feature-item"><FaCheckCircle className="check-icon" /><div><strong>CANNELLO</strong><p>Saldatura tradizionale per lavori robusti</p></div></li>
                        </ul>
                    </div>
                    <div className="split-image">
                        <img src={imgWelder} alt="Saldatore professionista" className="cover-img" />
                    </div>
                </motion.div>

                {/* Carpenteria */}
                <motion.div
                    className="carpentry-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fastFade}
                >
                    <h2>Carpenteria Leggera</h2>
                    <p>Realizziamo ringhiere, cancelli e piccoli lavori metallici con la stessa cura e attenzione che dedichiamo ai nostri prodotti principali.</p>
                    <br />
                    <p style={{fontStyle: 'italic'}}>TA.GE SAS è un’azienda familiare, fondata sulla qualità e sulla passione per il settore metalmeccanico.</p>
                </motion.div>

            </div>
        </div>
    );
};

export default ChiSiamo;