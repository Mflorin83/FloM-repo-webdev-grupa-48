
document.addEventListener('DOMContentLoaded', function () {

    verifyFormInput();
    showPassword('password', 'togglePassword2', 'togglePasswordIcon2');


},
)


function verifyFormInput() {

    const form = document.getElementById('signUpForm');
    if (!form) {
        console.error('Form not found');
        return;
    }

    form.addEventListener('submit', function (event) {
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

        if (!formIsValid) {
            event.preventDefault();
        }
    })
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

function loadDataIntoDb(formId, apiIp, apiPostAction) {

    const form = document.getElementById(formId);
    if (!form) {
        console.error('Form not found');
        return;
    }

    // Colectează datele din formular
    const formDataObj = {
        surname: document.getElementById('surname').value,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        agree: document.getElementById('agree').checked // acesta va fi true sau false
    };

    let apiPostAction = 'POST';
    

    const fetchOptions = {
        method: apiPostAction,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj) // Convertește obiectul într-un șir JSON
    };

    const apiIp = 'http://localhost:3000/users'
    // Trimiterea datelor la server prin fetch
    fetch(apiIp, fetchOptions)
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





//         // Verificare email existent
//         checkEmailExists(email)
//             .then(exists => {
//                 if (exists) {
//                     alert('This email is already registered.');
//                 } else {
//                     // Logica pentru crearea contului
//                     console.log('Creating account...');
//                     // Aici ar veni codul pentru trimiterea datelor la server
//                 }
//             })
//             .catch(error => {
//                 console.error('Error checking email:', error);
//             });
//     });

//     function validateEmail(email) {
//         const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//         return re.test(String(email).toLowerCase());
//     }

//     function checkEmailExists(email) {
//         return fetch(`http://localhost:3000/users?email=${email}`)
//             .then(response => response.json())
//             .then(data => data.length > 0)
//             .catch(error => {
//                 console.error('Failed to check email', error);
//                 throw error;
//             });
//     }
// });
