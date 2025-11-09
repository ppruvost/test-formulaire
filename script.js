const form = document.getElementById('contact-form');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

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
    }
});

