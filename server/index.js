const express = require('express');
const multer = require('multer');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configurazione Multer per i file
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});

app.post('/send-email', upload.single('attachment'), async (req, res) => {
    try {
        const { user_name, user_email, user_phone, position, message, cv_link, formType } = req.body;
        const file = req.file;

        let subjectText = "";
        let titleHtml = "";

        if (formType === 'preventivo') {
            subjectText = `Richiesta Preventivo: ${user_name} - ${position}`;
            titleHtml = "Nuova Richiesta di Preventivo";
        } else {
            subjectText = `Nuova Candidatura: ${user_name} - ${position}`;
            titleHtml = "Nuova Candidatura dal Sito";
        }

        // Costruiamo il contenuto HTML
        const htmlContent = `
            <h3 style="color: #2C3E50;">${titleHtml}</h3>
            <p><strong>Nome:</strong> ${user_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${user_email}">${user_email}</a></p>
            <p><strong>Telefono:</strong> ${user_phone}</p>
            <p><strong>Richiesta/Posizione:</strong> ${position}</p>
            ${cv_link ? `<p><strong>Link Esterno:</strong> ${cv_link}</p>` : ''}
            <hr>
            <p><strong>Messaggio:</strong><br>${message}</p>
        `;

        // Preparazione dati per API Brevo
        const emailData = {
            sender: { name: "Sito Web TA.GE", email: process.env.EMAIL_USER },
            to: [{ email: "info@tagesas.it", name: "TA.GE SAS" }],
            replyTo: { email: user_email, name: user_name },
            subject: subjectText,
            htmlContent: htmlContent
        };

        // Gestione Allegato (se presente)
        if (file) {
            emailData.attachment = [
                {
                    content: file.buffer.toString('base64'),
                    name: file.originalname
                }
            ];
        }

        // Chiamata API Brevo
        await axios.post('https://api.brevo.com/v3/smtp/email', emailData, {
            headers: {
                'api-key': process.env.EMAIL_PASS,
                'Content-Type': 'application/json'
            }
        });

        console.log("Email inviata con API!");
        res.status(200).json({ message: 'Email inviata!' });

    } catch (error) {
        console.error("Errore API Brevo:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Errore invio email' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Backend attivo su http://localhost:${PORT}`);
});