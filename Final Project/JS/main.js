
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
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                            <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.id}" disabled></td>
                            <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.surname}" disabled></td>
                            <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.name}" disabled></td>
                            <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.phone}" disabled></td>
                            <td><input type="email" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.email}" disabled></td>
                            <td><input type="password" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.password}" disabled></td>
                            <td><input type="text" class="form-control form-control-sm p-1 fw-light fs-6" value="${user.role || 'user'}" disabled></td>
                            <td>
                            <button type="button" class="btn btn-primary btn-sm" onclick="toggleEdit('${user.id}', true)">Edit</button>
                            <button type="button" class="btn btn-success btn-sm" onclick="saveClient('${user.id}')" style="display:none;">Save</button>
                            <button type="button" class="btn btn-secondary btn-sm" onclick="toggleEdit('${user.id}', false)" style="display:none;">Cancel</button>
                            <button type="button" class="btn btn-danger btn-sm" onclick="deleteClient('${user.id}')">Delete</button>
                            </td>
                        `;
                userTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
}
