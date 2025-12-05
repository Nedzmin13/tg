import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaLink, FaFilePdf } from 'react-icons/fa';
import '../styles/Forms.css';
import imgWelder from '../assets/chiSiamo3.png';

const LavoraConNoi = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error'

    const scrollToForm = () => {
        document.getElementById('candidati-form-box').scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.target);

        formData.append("formType", "candidatura");

        try {
            // Invio al TUO server locale (Node.js)
            const response = await fetch("https://tage.onrender.com/send-email", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setLoading(false);
                setStatus('success');
                e.target.reset(); // Pulisce il form
            } else {
                setLoading(false);
                setStatus('error');
            }
        } catch (error) {
            console.error("Errore di connessione al server:", error);
            setLoading(false);
            setStatus('error');
        }
    };

    return (
        <div className="page-wrapper">
            <div className="form-page-wrapper">
                <div className="container">

                    {/* ... Header e Split Layout uguali a prima ... */}
                    <div className="form-header">
                        <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>Lavora con Noi</motion.h1>
                        <p>Siamo alla ricerca di professionisti qualificati e motivati da integrare nel nostro team.
                            Se desideri crescere in un ambiente dinamico e orientato all’eccellenza, inviaci la tua candidatura</p>
                    </div>

                    <div className="split-page-layout">
                        <motion.div className="split-image-side" initial={{opacity:0}} animate={{opacity:1}}>
                            <img src={imgWelder} alt="Saldatore al lavoro" />
                        </motion.div>
                        <motion.div className="split-content-side" initial={{opacity:0}} animate={{opacity:1}}>
                            <div className="job-intro">
                                <h2>Unisciti al Nostro Team</h2>
                                <p>
                                    In <strong>TA.GE S.a.s.</strong> il metallo non è solo materia fredda, è
                                    un'opportunità.
                                    Cerchiamo persone capaci di vedere in un tubo grezzo l'inizio di un lavoro perfetto.
                                </p>

                                <p>
                                    Uniamo l'orgoglio della <strong>tradizione artigiana</strong> alla precisione
                                    della <strong>tecnologia moderna</strong>.
                                    Se cerchi un luogo dove la tua manualità e la tua testa fanno la differenza, sei nel
                                    posto giusto.
                                </p>
                                <div className="job-list">
                                    <h4>Cerchiamo:</h4>
                                    <ul>
                                        <li>Saldatori MIG/TIG qualificati</li>
                                        <li>Piegatori esperti</li>
                                        <li>Operai metalmeccanici</li>
                                        <li>Carpentieri metallici</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div style={{textAlign: 'center', marginTop: '100px', marginBottom: '40px'}}>
                        <p style={{marginBottom: '20px', color: '#555', fontSize: '1.1rem'}}>Invia la tua candidatura
                            compilando il form sottostante.</p>
                        <button className="btn-blue-brand" onClick={scrollToForm}>Candidati Ora</button>
                        <div className="form-divider"><span>oppure</span></div>
                        <a href="mailto:info@tagesas.it" className="btn-outline-blue" style={{textDecoration: 'none'}}>
                            <FaEnvelope /> Invia Email con CV
                        </a>
                    </div>

                    <motion.div
                        id="candidati-form-box"
                        className="form-container"
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once: true}}
                    >
                        <h2 style={{textAlign: 'center', marginBottom: '10px'}}>Candidati Ora</h2>
                        <p style={{textAlign: 'center', marginBottom: '40px', color: '#666', fontSize: '0.9rem'}}>
                            Compila il form e allega il tuo CV (PDF/Word).
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Nome e Cognome *</label>
                                    <input type="text" name="user_name" className="form-input" required />
                                </div>
                                <div className="form-group">
                                    <label>Telefono *</label>
                                    <input type="tel" name="user_phone" className="form-input" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" name="user_email" className="form-input" required />
                            </div>

                            <div className="form-group">
                                <label>Posizione di Interesse</label>
                                <select name="position" className="form-select">
                                    <option>Seleziona una posizione</option>
                                    <option>Saldatore</option>
                                    <option>Carpentiere</option>
                                    <option>Ufficio Tecnico</option>
                                    <option>Altro</option>
                                </select>
                            </div>

                            {/* CAMPO FILE (Nome: attachment) */}
                            <div className="form-group">
                                <label>Carica il tuo CV (PDF/DOC) *</label>
                                <div className="input-icon-wrapper">
                                    <FaFilePdf style={{color: '#e74c3c'}} />
                                    <input type="file" name="attachment" className="file-upload-input input-with-icon" accept=".pdf,.doc,.docx" required />
                                </div>
                                <span className="form-note">File accettati fino a 10MB.</span>
                            </div>



                            <div className="form-group">
                                <label>Presentazione *</label>
                                <textarea name="message" className="form-textarea" placeholder="Parlaci di te..." required></textarea>
                            </div>

                            {status === 'success' && <p style={{color: 'green', textAlign: 'center', fontWeight: 'bold'}}>✅ Candidatura inviata con successo!</p>}
                            {status === 'error' && <p style={{color: 'red', textAlign: 'center', fontWeight: 'bold'}}>❌ Errore del server. Assicurati che il backend sia avviato.</p>}

                            <button type="submit" className="submit-btn" style={{marginTop: '20px'}} disabled={loading}>
                                <FaPaperPlane /> {loading ? 'Invio in corso...' : 'Invia Candidatura'}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default LavoraConNoi;