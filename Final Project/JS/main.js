
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
