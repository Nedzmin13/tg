import { motion } from 'framer-motion';
import '../pages/servizi-dettaglio/Services.css'; // Usiamo stili comuni per coerenza

const PrivacyPolicy = () => {
    return (
        <div className="page-wrapper container" style={{ paddingBottom: '100px' }}>

            <div className="service-page-header">
                <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>Privacy & Cookie Policy</motion.h1>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', color: '#444' }}>
                <section style={{ marginBottom: '40px' }}>
                    <h3>1. Titolare del Trattamento dei Dati</h3>
                    <p>
                        <strong>TA.GE S.A.S. DI TATO GJERGJI & C.</strong><br />
                        Via Armando Diaz, 20/B - 33044 Manzano (UD)<br />
                        P.IVA / C.F: 02184200307<br />
                        Email: info@ta-ge.it
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h3>2. Tipologie di Dati raccolti</h3>
                    <p>
                        Fra i Dati Personali raccolti da questo Sito Web, in modo autonomo o tramite terze parti, ci sono:
                        Cookie, Dati di utilizzo, Nome, Cognome, Numero di Telefono, Email e varie tipologie di Dati.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h3>3. Modalità e luogo del trattamento dei Dati raccolti</h3>
                    <p>
                        Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione,
                        la modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento viene effettuato
                        mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente
                        correlate alle finalità indicate.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h3>4. Finalità del Trattamento dei Dati raccolti</h3>
                    <p>
                        I Dati dell’Utente sono raccolti per consentire al Titolare di fornire i propri Servizi,
                        così come per le seguenti finalità: Contattare l'Utente, Gestione contatti e invio di messaggi,
                        Statistica e Visualizzazione di contenuti da piattaforme esterne.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h3>5. Cookie Policy</h3>
                    <p>
                        Questo Sito Web fa utilizzo di Cookie. I cookie sono piccoli file di testo che i siti visitati
                        dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi
                        siti in occasione di visite successive.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h3>6. Diritti dell’Utente</h3>
                    <p>
                        Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.
                        In particolare, l’Utente ha il diritto di: revocare il consenso in ogni momento, opporsi al trattamento
                        dei propri Dati, accedere ai propri Dati, verificare e chiedere la rettificazione, ottenere la limitazione
                        del trattamento, ottenere la cancellazione o rimozione dei propri Dati Personali.
                    </p>
                </section>
            </div>

        </div>
    );
};

export default PrivacyPolicy;