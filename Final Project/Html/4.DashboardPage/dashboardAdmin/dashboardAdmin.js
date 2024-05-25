import { initializePopovers, getUserFromApi, manipulatingDatabaseUsers, editUser, deleteUser, saveUser, sendEditedADataToServer, cancelEditingDb } from '../../../JS/main.js'

document.addEventListener('DOMContentLoaded', function () {

    initializePopovers('[data-bs-toggle="popover"]');
    const usersFetch = document.getElementById('usersUpdate');
    usersFetch.addEventListener('click', getUserFromApi);

    manipulatingDatabaseUsers();

});

// editUser(userId);
// deleteUser(userId);
// saveUser(userId);
// sendEditedADataToServer(clientData, apiUrl, method = 'PUT');
// cancelEditingDb();


