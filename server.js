const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors({
    origin: 'https://ppruvost.github.io'  // remplace par ton nom GitHub
}));

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    // ici tu ajoutes le code pour envoyer l'email (NodeMailer ou autre)
    // pour le test, on peut juste renvoyer success
    res.json({ success: true });
});

app.listen(process.env.PORT || 3000, () => console.log("Server running"));
