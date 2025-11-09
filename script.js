const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  try {
    const response = await fetch('https://courriel.onrender.com/send-email', { // URL de Render
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer test1234' // remplace par ton token
      },
      body: JSON.stringify({ name, email, message })
    });

    const text = await response.text();
    alert(text); // affiche le retour du serveur

  } catch (err) {
    console.error(err);
    alert('Problème de connexion au serveur.');
  }
});

