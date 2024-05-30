import { initializePopovers, getUserFromApi, manipulatingDatabaseUsers, editUser, deleteUser, saveUser, sendEditedADataToServer, cancelEditingDb, signOut } from '../../../JS/main.js'

document.addEventListener('DOMContentLoaded', function () {

    initializePopovers('[data-bs-toggle="popover"]');
    const usersFetch = document.getElementById('usersUpdate');
    usersFetch.addEventListener('click', getUserFromApi);

    manipulatingDatabaseUsers();

    document.getElementById('addNewUser').addEventListener('click', function() {
        const userTableBody = document.getElementById('injectedContent');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value=""></td>
            <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value=""></td>
            <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value=""></td>
            <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value=""></td>
            <td><input type="email" class="form-control form-control-sm p-1 fw-light fs-6" value=""></td>
            <td><input type="password" class="form-control form-control-sm p-1 fw-light fs-6" value=""></td>
            <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value="user"></td>
            <td>
                <button class="btn btn-success btn-sm save-btn">Save</button>
                <button class="btn btn-danger btn-sm cancel-btn">Cancel</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
    
    
    document.getElementById('injectedContent').addEventListener('click', function(event) {
        if (event.target.classList.contains('save-btn')) {
            const row = event.target.closest('tr');
            const newUser = {
                id: row.children[0].children[0].value,
                surname: row.children[1].children[0].value,
                name: row.children[2].children[0].value,
                phone: row.children[3].children[0].value,
                email: row.children[4].children[0].value,
                password: row.children[5].children[0].value,
                role: row.children[6].children[0].value
            };
    
            const apiUrl = 'http://localhost:5500/Users'; 
            
            sendEditedADataToServer(newUser, apiUrl, 'POST');
        } else if (event.target.classList.contains('cancel-btn')) {
            event.target.closest('tr').remove(); // Remove the input row on cancel
        }
    });
    
    
    document.getElementById('signOutLink').addEventListener('click', signOut);





});

