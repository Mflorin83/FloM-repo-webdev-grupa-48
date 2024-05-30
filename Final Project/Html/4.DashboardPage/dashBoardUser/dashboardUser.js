import { initializePopovers, signOut } from '../../../JS/main.js'

document.addEventListener('DOMContentLoaded', function () {

    initializePopovers('[data-bs-toggle="popover"]');

    document.getElementById('signOutLink').addEventListener('click', signOut);


});





