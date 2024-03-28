document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementsByClassName("site-nav-mobile")[0];
    var mobileNav = document.getElementsByClassName("site-nav")[0];
    var menuIconOpen = document.getElementsByClassName("menu-open")[0];
    var menuIconClose = document.getElementsByClassName("menu-close")[0];

    // Ascunde meniul mobil și iconița de închidere inițial
    mobileNav.style.display = "none";
    menuIconClose.style.display = "none";
    menuIconOpen.style.display = "flex"; // Asigură-te că iconița de deschidere este afișată

    menuIcon.addEventListener("click", mobileMenu);

    function mobileMenu() {
        if (mobileNav.style.display === "flex") {
            mobileNav.style.display = "none";
            menuIconOpen.style.display = "flex";
            menuIconClose.style.display = "none";
        } else {
            mobileNav.style.display = "flex";
            menuIconClose.style.display = "flex";
            menuIconOpen.style.display = "none";
        }
    }
});
