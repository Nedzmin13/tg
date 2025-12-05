const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');

// 1. CARICA LE VARIABILI DALL'ENV
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});

const transporter = nodemailer.createTransport({
    host: "smtps.aruba.it",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }, tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000
});
// Endpoint per invio candidatura
app.post('/send-email', upload.single('attachment'), async (req, res) => {
    try {
        // Leggiamo anche formType
        const { user_name, user_email, user_phone, position, message, cv_link, formType } = req.body;
        const file = req.file;

        let subjectText = "";
        let titleHtml = "";

        // LOGICA PER DISTINGUERE I FORM
        if (formType === 'preventivo') {
            subjectText = `Richiesta Preventivo: ${user_name} - ${position}`;
            titleHtml = "Nuova Richiesta di Preventivo";
        } else {
            // Default: Candidatura
            subjectText = `Nuova Candidatura: ${user_name} - ${position}`;
            titleHtml = "Nuova Candidatura dal Sito";
        }

        const mailOptions = {
            from: `"Sito Web TA.GE" <${process.env.EMAIL_USER}>`,
            to: "info@tagesas.it",
            replyTo: user_email,
            subject: subjectText, // Oggetto dinamico
            html: `
                <h3 style="color: #2C3E50;">${titleHtml}</h3>
                <p><strong>Nome:</strong> ${user_name}</p>
                <p><strong>Email:</strong> <a href="mailto:${user_email}">${user_email}</a></p>
                <p><strong>Telefono:</strong> ${user_phone}</p>
                <p><strong>Richiesta/Posizione:</strong> ${position}</p>
                
                ${cv_link ? `<p><strong>Link Esterno:</strong> ${cv_link}</p>` : ''}
                
                <hr>
                <p><strong>Messaggio:</strong><br>${message}</p>
            `,
            attachments: file ? [
                {
                    filename: file.originalname,
                    content: file.buffer
                }
            ] : []
        };

        await transporter.sendMail(mailOptions);
        console.log("Email inviata con successo!");
        res.status(200).json({ message: 'Email inviata!' });

    } catch (error) {
        console.error("Errore invio email:", error);
        res.status(500).json({ error: 'Errore durante l\'invio dell\'email' });
    }
});

// Avvio Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Backend attivo su http://localhost:${PORT}`);
});