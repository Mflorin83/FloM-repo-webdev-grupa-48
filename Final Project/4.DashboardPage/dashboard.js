document.querySelector('.user-menu').addEventListener('click', function() {
    let dropdown = document.querySelector('.dropdown-content');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Închide dropdown-ul când utilizatorul face clic în altă parte
window.onclick = function(event) {
    if (!event.target.matches('.user-menu, .user-menu *')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
};
