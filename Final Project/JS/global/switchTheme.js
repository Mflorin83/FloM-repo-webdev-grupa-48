document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light'; // Get from local storage
    document.documentElement.setAttribute('data-bs-theme', currentTheme);
});
    
function switchTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'light'; // Obține tema din localStorage sau folosește 'light' ca implicit

    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Salvează noua temă în localStorage
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light'); // Salvează noua temă în localStorage
    }
}

    
    // function switchTheme() {
    //     const htmlElement = document.documentElement;
    //     const currentTheme = htmlElement.getAttribute('data-bs-theme');

    //     if (currentTheme === 'light') {
    //         htmlElement.setAttribute('data-bs-theme', 'dark');
    //     } else {
    //         htmlElement.setAttribute('data-bs-theme', 'light');
    //     }
    // }
