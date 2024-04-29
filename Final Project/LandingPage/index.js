document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementsByClassName("site-nav-mobile")[0];
    var mobileNav = document.getElementsByClassName("site-nav")[0];
    var menuIconOpen = document.getElementsByClassName("menu-open")[0];
    var menuIconClose = document.getElementsByClassName("menu-close")[0];

    // Inițial, nu seta display: none; aici pentru mobileNav sau menuIconClose

    menuIcon.addEventListener("click", function () {
        // Verifică dimensiunea ecranului înainte de a modifica stilurile
        if (window.innerWidth < 768) {
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

    // Opțional: Ascunde meniul mobil și iconița de închidere când pagina se încarcă,
    // dar doar pe ecrane mici.
    window.addEventListener('resize', function () {
        if (window.innerWidth < 768) {
            mobileNav.style.display = "none";
            menuIconClose.style.display = "none";
            menuIconOpen.style.display = "flex";
        } else {
            // Asigură-te că meniul este afișat pe desktop, dacă a fost anterior ascuns pe mobil.
            mobileNav.style.removeProperty('display');
            menuIconClose.style.removeProperty('display');
            menuIconOpen.style.removeProperty('display');
        }
    });

    // Aplică logica de resize imediat, pentru a asigura starea corectă inițială.
    window.dispatchEvent(new Event('resize'));
});








