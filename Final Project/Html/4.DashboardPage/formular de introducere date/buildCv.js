import {addNewFormInput, removeInput} from '../../../JS/main.js'

document.getElementById('inputContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('add-btn')) {
        addNewFormInput(event.target);
    } else if (event.target.classList.contains('remove-btn')) {
        removeInput(event.target);
    
    }
});


