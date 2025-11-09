const form = document.getElementById('contact-form');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire et les nettoyer
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    // Vérification simple des champs
    if (!name || !email || !message) {
        feedback.style.color = 'red';
        feedback.textContent = "Merci de remplir tous les champs.";
        return;
    }

    // Feedback pendant l'envoi
    feedback.style.color = 'black';
    feedback.textContent = "Envoi en cours...";

    const data = { name, email, message };

    try {
        const response = await fetch('https://courriel.onrender.com/', { // <- ton URL serveur
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            feedback.style.color = 'green';
            feedback.textContent = "Mail envoyé avec succès !";
            form.reset();
        } else {
            feedback.style.color = 'red';
            feedback.textContent = "Erreur lors de l'envoi du mail.";
        }
    } catch (error) {
        feedback.style.color = 'red';
        feedback.textContent = "Erreur : " + error.message;
        console.error(error); // utile pour le debug
    }
});
