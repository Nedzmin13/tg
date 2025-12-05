const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});

// --- CONFIGURAZIONE BREVO (Ex Sendinblue) ---
const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com", // Server di Brevo
    port: 2825, // Porta standard
    secure: false, // False per 587
    auth: {
        user: process.env.EMAIL_USER, // La mail usata per registrare Brevo
        pass: process.env.EMAIL_PASS  // La CHIAVE SMTP generata (non la password di login!)
    },
    tls: {
        rejectUnauthorized: false
    }
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

        const mailOptions = {
            // Importante: Brevo richiede che il mittente sia verificato o uguale all'account
            from: `"Sito Web TA.GE" <${process.env.EMAIL_USER}>`,

            // Qui metti la mail DOVE vuoi ricevere i messaggi (la tua Aruba)
            to: "info@tagesas.it",

            replyTo: user_email,
            subject: subjectText,
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
            attachments: file ? [{ filename: file.originalname, content: file.buffer }] : []
        };

        await transporter.sendMail(mailOptions);
        console.log("Email inviata con successo!");
        res.status(200).json({ message: 'Email inviata!' });

    } catch (error) {
        console.error("Errore invio email:", error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Backend attivo su http://localhost:${PORT}`);
});