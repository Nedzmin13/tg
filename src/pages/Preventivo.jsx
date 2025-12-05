import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import '../styles/Forms.css';

const Preventivo = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.target);

        formData.append("formType", "preventivo");

        try {
            const response = await fetch("http://localhost:5000/send-email", {
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
            console.error("Errore server:", error);
            setLoading(false);
            setStatus('error');
        }
    };

    return (
        <div className="page-wrapper">
            <div className="form-page-wrapper">
                <div className="container">

                    <div className="form-header">
                        <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>Richiedi Preventivo</motion.h1>
                        <p>Compila il form e ti risponderemo con un preventivo dettagliato e gratuito</p>
                    </div>

                    <motion.div
                        className="form-container"
                        initial={{opacity:0, y:30}}
                        animate={{opacity:1, y:0}}
                        transition={{delay: 0.1}}
                    >
                        {/* USARE onSubmit={handleSubmit} INVECE DI EMAILJS */}
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Nome e Cognome *</label>
                                    <input type="text" name="user_name" className="form-input" placeholder="Mario Rossi" required />
                                </div>
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input type="email" name="user_email" className="form-input" placeholder="mario.rossi@email.com" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Telefono *</label>
                                <input type="tel" name="user_phone" className="form-input" placeholder="+39 123 456 7890" required />
                            </div>

                            <div className="form-group">
                                <label>Tipo di Lavoro *</label>
                                {/* NAME cambiato in "position" per compatibilità col backend esistente */}
                                <select name="position" className="form-select" required>
                                    <option value="">Seleziona il tipo di lavoro</option>
                                    <option value="Sedie">Produzione Sedie</option>
                                    <option value="Tavoli">Tavoli su Misura</option>
                                    <option value="Cancelli">Cancelli in Ferro</option>
                                    <option value="Ringhiere">Ringhiere</option>
                                    <option value="Carpenteria">Carpenteria Leggera</option>
                                    <option value="Altro">Altro Progetto</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Carica Disegno o Foto (Opzionale, Max 10MB)</label>
                                {/* NAME deve essere "attachment" per Multer */}
                                <input type="file" name="attachment" className="file-upload-input" />
                            </div>

                            <div className="form-group">
                                <label>Descrizione Richiesta *</label>
                                <textarea name="message" className="form-textarea" placeholder="Descrivi nel dettaglio..." required></textarea>
                            </div>

                            {status === 'success' && <p style={{color: 'green', marginTop: '10px', textAlign:'center', fontWeight:'bold'}}>✅ Richiesta inviata con successo!</p>}
                            {status === 'error' && <p style={{color: 'red', marginTop: '10px', textAlign:'center', fontWeight:'bold'}}>❌ Errore del server. Riprova più tardi.</p>}

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? 'Invio in corso...' : 'Invia Richiesta Preventivo'}
                            </button>
                        </form>

                        <div className="contact-box">
                            <h3><FaPhoneAlt /> Preferisci chiamare?</h3>
                            <p>Puoi contattarci direttamente:</p>
                            <p><strong>Tel:</strong> +39 338 168 7677</p>
                            <p><strong>Email:</strong> info@tagesas.it</p>
                        </div>

                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Preventivo;