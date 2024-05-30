document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const content = document.querySelector('.content');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const closeHamburgerMenu = document.getElementById('closeHamburgerMenu');
    const footer = document.getElementById('footer');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function () {
            if (window.innerWidth < 768) {
                if (hamburgerMenu && hamburgerMenu.classList.contains('show')) {
                    hamburgerMenu.classList.remove('show');
                }
            }
            if (sidebarMenu) {
                sidebarMenu.classList.toggle('show');
            }
            if (content) {
                content.classList.toggle('shift');
            }
        });
    }

    document.addEventListener('click', function (event) {
        const sidebar = document.getElementById('sidebarMenu');
        const toggle = document.getElementById('sidebarToggle');
        const content = document.querySelector('.content');
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const navbarToggler = document.querySelector('.navbar-toggler');

        if (sidebar && toggle && !sidebar.contains(event.target) && !toggle.contains(event.target)) {
            sidebar.classList.remove('show');
            if (content) {
                content.classList.remove('shift');
            }
        }

        if (hamburgerMenu && navbarToggler && !hamburgerMenu.contains(event.target) && !navbarToggler.contains(event.target)) {
            hamburgerMenu.classList.remove('show');
        }
    });

    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            const sidebarMenu = document.getElementById('sidebarMenu');
            const hamburgerMenu = document.getElementById('hamburgerMenu');

            if (window.innerWidth < 768) {
                if (sidebarMenu && sidebarMenu.classList.contains('show')) {
                    sidebarMenu.classList.remove('show');
                    const content = document.querySelector('.content');
                    if (content) {
                        content.classList.remove('shift');
                    }
                }
            }

            if (hamburgerMenu) {
                hamburgerMenu.classList.toggle('show');
            }
        });
    }

    if (closeHamburgerMenu) {
        closeHamburgerMenu.addEventListener('click', function () {
            const hamburgerMenu = document.getElementById('hamburgerMenu');
            if (hamburgerMenu) {
                hamburgerMenu.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', function () {
        const sidebar = document.getElementById('sidebarMenu');
        
        if (sidebar && footer) {
            const footerRect = footer.getBoundingClientRect();
            const sidebarHeight = window.innerHeight - 56; // Înălțimea sidebar-ului minus header-ul

            if (footerRect.top <= sidebarHeight) {
                sidebar.style.top = (footerRect.top - sidebarHeight) + 'px';
            } else {
                sidebar.style.top = '56px';
            }
        }
    });
});

