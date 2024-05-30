document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        loginUser(email, password);
    });
});

showPassword('password', 'togglePassword2', 'togglePasswordIcon2');



function loginUser(email, password) {
    fetch(`http://localhost:5500/Users?email=${encodeURIComponent(email)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            if (users.length > 0) {
                const user = users[0];
                const userSurname = user.surname;
                const userName = user.name;
                const role = user.role;

                const alertContainer = document.getElementById('alertContainer');
                alertContainer.innerHTML = ''; // Curățăm alertele anterioare

                if (user.password === password && role === 'admin') {
                    displayAlert('Te-ai conectat cu succes!', 'success', userSurname, userName);
                    setTimeout(function () {
                        window.location.href = '../4.DashboardPage/dashboardAdmin/dashboardAdmin.html';
                    }, 2000);
                } else if (user.password === password && role === 'user') {
                    displayAlert('Te-ai conectat cu succes!', 'success', userSurname, userName);
                    setTimeout(function () {
                        window.location.href = '../4.DashboardPage/dashboardUser/dashboardUser.html';
                    }, 2000);
                } else {
                    displayAlert('Email sau parola incorectă!', 'danger', userSurname, userName);
                }
            } else {
                displayAlert('Email sau parola incorectă!', 'danger', '', '');
            }
        })
        .catch(error => {
            console.error('Eroare la autentificare', error);
            displayAlert('A apărut o eroare la conectarea la server. Te rog incearca mai tarziu!', 'danger', '', '');
        });
}


function displayAlert(message, type, userSurname, userName) {
    const alertContainer = document.getElementById('alertContainer');
    const alertHTML = `<div class="alert alert-${type} d-flex align-items-center fade show" role="alert"><strong>${message}  ${userSurname} ${userName}</strong></div>`;
    alertContainer.innerHTML = alertHTML;
}


function showPassword(PassId, switchButtonId, switchiconID) {
    const password = document.getElementById(PassId);
    const toggleButton = document.getElementById(switchButtonId);
    const toggleIcon = document.getElementById(switchiconID);

    toggleButton.addEventListener('click', function () {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        // Toggle the eye icon
        toggleIcon.classList.toggle('bi-eye');
        toggleIcon.classList.toggle('bi-eye-slash');
    });
}
