import { initializePopovers, getUserFromApi } from '../../../JS/main.js'

document.addEventListener('DOMContentLoaded', function () {

    initializePopovers('[data-bs-toggle="popover"]');
    
    const usersFetch = document.getElementById('usersUpdate');
    usersFetch.addEventListener('click', getUserFromApi);
 
 


});














// function getUserFromApi(users) {
//     const container = document.getElementById('injectedContent');
//     container.innerHTML = ''; // Golește containerul în caz că există alte formulare
//     users.forEach(user => {
//         const form = document.createElement('form');
//         form.id = `user-form-${user.id}`;
//         form.innerHTML = `
//             <div class="mb-3">
//                 <label for="name-${user.id}" class="form-label">Name:</label>
//                 <input type="text" class="form-control" id="name-${user.id}" value="${user.name}" disabled>
//             </div>
//             <div class="mb-3">
//                 <label for="email-${user.id}" class="form-label">Email:</label>
//                 <input type="email" class="form-control" id="email-${user.id}" value="${user.email}" disabled>
//             </div>
//             <button type="button" class="btn btn-primary" onclick="toggleEdit(${user.id}, true)">Edit</button>
//             <button type="button" class="btn btn-success" onclick="saveClient(${user.id})" style="display:none;">Save</button>
//             <button type="button" class="btn btn-secondary" onclick="toggleEdit(${user.id}, false)" style="display:none;">Cancel</button>
//             <button type="button" class="btn btn-danger" onclick="deleteClient(${user.id})">Delete</button>
//         `;
//         container.appendChild(form);
//     });
// }

function toggleEdit(clientId, isEditing) {
    const form = document.getElementById(`client-form-${clientId}`);
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.disabled = !isEditing);

    const editButton = form.querySelector('button[onclick^="toggleEdit"][onclick*="true"]');
    const saveButton = form.querySelector('button[onclick^="saveClient"]');
    const cancelButton = form.querySelector('button[onclick^="toggleEdit"][onclick*="false"]');

    editButton.style.display = isEditing ? 'none' : 'block';
    saveButton.style.display = isEditing ? 'block' : 'none';
    cancelButton.style.display = isEditing ? 'block' : 'none';
}

function saveClient(clientId) {
    const form = document.getElementById(`client-form-${clientId}`);
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;

    // Implementați logica de salvare a modificărilor în baza de date
    console.log(`Saving client ${clientId} with name ${name} and email ${email}`);
}

function deleteClient(clientId) {
    // Implementați logica de ștergere a clientului din baza de date
    console.log(`Deleting client ${clientId}`);
    // Remove form after deletion
    const form = document.getElementById(`client-form-${clientId}`);
    form.remove();
}



// function injectedContent



// function loadContent(contentId) {
//     var content = {
//         'content1': '<p>This is the content for option 1.</p>',
//         'content2': '<p>This is the content for option 2.</p>'
//     };

//     document.getElementById('main-content').innerHTML = content[contentId];
// }


// <div id="sidebar">
//     <button onclick="loadContent('content1')">Content 1</button>
//     <button onclick="loadContent('content2')">Content 2</button>
// </div>

// <div id="main-content">
//     <!-- Conținutul va fi încărcat aici -->
// </div>
