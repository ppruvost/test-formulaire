const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
        const response = await fetch('https://courriel.onrender.com/send-email', { // <-- URL de Render
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();
        if(data.success){
            alert("Email envoyé avec succès !");
            form.reset();
        } else {
            alert("Erreur lors de l'envoi !");
        }
    } catch (error) {
        console.error(error);
        alert("Problème de connexion au serveur.");
    }
});

