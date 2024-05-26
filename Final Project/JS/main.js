
export function addNewFormInput(addButton) {
    const newInputGroup = document.createElement('div');
    newInputGroup.className = 'input-group mb-3';
    newInputGroup.innerHTML = `
        <input type="text" class="form-control" placeholder="Enter value" aria-label="Enter value">
        <button class="btn btn-outline-danger remove-btn" type="button">-</button>
        <button class="btn btn-outline-secondary add-btn" type="button">+</button>
    `;

    const container = document.getElementById('inputContainer');
    container.appendChild(newInputGroup);

    // Move the add button to the new input group and remove from current position
    addButton.remove();
}

export function removeInput(removeButton) {
    const inputGroup = removeButton.closest('.input-group');
    inputGroup.remove();

    // Ensure the add button is always on the last input group after removal
    const container = document.getElementById('inputContainer');
    const allInputGroups = container.querySelectorAll('.input-group');
    const lastInputGroup = allInputGroups[allInputGroups.length - 1];
    const addButton = lastInputGroup.querySelector('.add-btn');

    if (!addButton) {
        const newAddButton = document.createElement('button');
        newAddButton.className = 'btn btn-outline-secondary add-btn';
        newAddButton.textContent = '+';
        newAddButton.type = 'button';
        lastInputGroup.appendChild(newAddButton);
    }
}

export function initializePopovers(selector) {
    const popoverTriggerList = [].slice.call(document.querySelectorAll(selector));
    const popoverList = popoverTriggerList.map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
}


export function getUserFromApi() {
    const API_URL = "http://localhost:5500/Users";
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const userTableBody = document.getElementById('injectedContent');
            
            userTableBody.innerHTML = '';
            //cmd to delete existing content, to not double infos
            

            data.forEach(user => {
                const row = document.createElement('tr');

                row.setAttribute('data-user-id', user.id); 

                row.innerHTML = `
                <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.id}" disabled></td>
                <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.surname}" disabled></td>
                <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.name}" disabled></td>
                <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.phone}" disabled></td>
                <td><input type="email" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.email}" disabled></td>
                <td><input type="password" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.password}" disabled></td>
                <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.role || 'user'}" disabled></td>
                <td>
                    <select class="form-select form-select-sm" aria-label="Actions">
                        <option selected>Add</option>
                        <option value="edit">Edit</option>
                        <option value="delete">Delete</option>
                        <option value="save">Save</option>
                        <option value="cancel">Cancel</option>
                    </select>
                </td>
                        `;
                userTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
}


  export function manipulatingDatabaseUsers() {
    const userTableBody = document.getElementById('injectedContent');
    userTableBody.addEventListener('change', function(event) {
        const element = event.target;
        if (element.classList.contains('form-select')) {
            const action = element.value;
            const userId = element.closest('tr').getAttribute('data-user-id');
            switch (action) {
                case 'edit':
                    editUser(userId);
                    break;
                case 'delete':
                    deleteUser(userId);
                    break;
                case 'save':
                    saveUser(userId);
                    break;
                case 'cancel':
                    cancelEditingDb(userId);
                    break;
            }
        }
    });
}

export function editUser(userId) {
    const row = document.querySelector(`tr[data-user-id="${userId}"]`);
    row.querySelectorAll('input').forEach(input => {
        input.disabled = false;
    });
}

export function deleteUser(userId) {
    const API_URL = `http://localhost:5500/Users/${userId}`; // Presupunem că acesta este endpoint-ul pentru ștergerea unui utilizator

    const fetchOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(API_URL, fetchOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete the user.');
            }
            return response.json();
        })
        .then(() => {
            alert('User successfully deleted!');
            // Opțional: Elimină rândul din tabel sau actualizează tabelul
            document.querySelector(`tr[data-user-id="${userId}"]`).remove();
        })
        .catch(error => {
            console.error('Error deleting user:', error);
            alert('Failed to delete user!');
        });
}


export function saveUser(userId) {
    const row = document.querySelector(`tr[data-user-id="${userId}"]`);
    const userData = {
        id: userId,
        surname: row.querySelectorAll('input[type="text"]')[1].value,
        name: row.querySelectorAll('input[type="text"]')[2].value,
        phone: row.querySelectorAll('input[type="text"]')[3].value,
        email: row.querySelector('input[type="email"]').value,
        password: row.querySelector('input[type="password"]').value,
        role: row.querySelectorAll('input[type="text"]')[4].value
    };

    const API_URL = "http://localhost:5500/Users/" + userId; // Ajustează URL-ul dacă este necesar
    sendEditedADataToServer(userData, API_URL, 'PUT'); // Asumăm că acesta este URL-ul pentru actualizare
}

 export function sendEditedADataToServer(clientData, apiUrl, method='PUT') {
    if (!clientData) {
        console.error('No client data to send');
        return;
    }

    const fetchOptions = {
        method: method,
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
            alert('Action was successfully!');
        })
        .catch(error => {
            console.error('Failed to save data:', error);
            alert('Failed!');
        });
}

export function cancelEditingDb() {
    window.location.reload();
}

export function signOut() {
    
    if (localStorage.getItem('authToken')) {
        localStorage.removeItem('authToken'); 
        sessionStorage.clear(); 
    }
    
    window.location.href = '../../2.LoginPage/LoginPage.html'; 


}