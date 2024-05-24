document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        loginUser(email, password);
    });
});

function loginUser(email, password) {
    fetch(`http://localhost:5500/Users?email=${encodeURIComponent(email)}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(users => {
        const alertContainer = document.getElementById('alertContainer');
        alertContainer.innerHTML = ''; // Curățăm alertele anterioare
        if (users.length > 0 && users[0].password === password) {
            window.location.href = '../4.DashboardPage/dashboardPage.html';
        } else {
            // Afișăm un mesaj de eroare
            displayAlert('email sau parola incorectă!', 'danger');
        }
    })
    .catch(error => {
        console.error('Eroare la autentificare', error);
        displayAlert('A apărut o eroare la conectarea la server. Vă rugăm să încercați din nou mai târziu.', 'danger');
    });
}

function displayAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    const alertHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
    alertContainer.innerHTML = alertHTML;
}
