showPassword('password', 'togglePassword2', 'togglePasswordIcon2');

function verifyFormInput() {
    const form = document.getElementById('signUpForm');
    if (!form) {
        console.error('Form not found');
        return false;
    }

    let formIsValid = true;
    const inputs = form.querySelectorAll('.form-control');
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
            inputs[i].classList.add('is-invalid');
            inputs[i].classList.remove('is-valid');
            formIsValid = false;
        } else {
            inputs[i].classList.remove('is-invalid');
            inputs[i].classList.add('is-valid');
        }
    }

    const checkbox = document.getElementById('agree');
    if (!checkbox.checkValidity()) {
        checkbox.closest('.custom-checkbox').classList.add('is-invalid');
        formIsValid = false;
    } else {
        checkbox.closest('.custom-checkbox').classList.remove('is-invalid');
    }

    return formIsValid;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signUpForm');
    if (!form) {
        console.error('Form not found');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (verifyFormInput()) { // Apelăm funcția de verificare a validității
            const clientData = createClientFromForm();
            const apiUrl = 'http://localhost:5500/Users';
            sendDataToServer(clientData, apiUrl);
        }
    });
})

function createClientFromForm() {
    const form = document.getElementById('signUpForm');
    if (!form) {
        console.error('Form not found');
        return null;
    }

    return {
        surname: form.querySelector('#surname').value,
        name: form.querySelector('#name').value,
        phone: form.querySelector('#phone').value,
        email: form.querySelector('#email').value,
        password: form.querySelector('#password').value,
        agree: form.querySelector('#agree').checked
    };
}

function sendDataToServer(clientData, apiUrl) {
    if (!clientData) {
        console.error('No client data to send');
        return;
    }

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientData)
    };

    fetch(apiUrl, fetchOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data saved:', data);
            alert('Account created successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to create account.');
        });
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