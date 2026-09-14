/* =========================================================
   MAH-DEN PRODUCTION
   SCRIPT.JS COMPLET
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. MENU MOBILE
    ===================================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (navbar.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

                menuToggle.setAttribute(
                    "aria-label",
                    "Fermer le menu"
                );

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

                menuToggle.setAttribute(
                    "aria-label",
                    "Ouvrir le menu"
                );
            }

        });


        /* Fermer le menu après avoir cliqué sur un lien */

        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

                menuToggle.setAttribute(
                    "aria-label",
                    "Ouvrir le menu"
                );

            });

        });

    }


    /* =====================================================
       2. LIEN ACTIF DU MENU
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".navbar a");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        links.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* =====================================================
       3. FERMER LE MENU AVEC LA TOUCHE ESC
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (navbar) {
                navbar.classList.remove("active");
            }

            if (menuToggle) {

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

                menuToggle.setAttribute(
                    "aria-label",
                    "Ouvrir le menu"
                );
            }

        }

    });


    /* =====================================================
       4. ANIMATION APPARITION DES ÉLÉMENTS
    ===================================================== */

    const animatedElements = document.querySelectorAll(
        ".service-card, .portfolio-item, .contact-item"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        animatedElements.forEach(function (element) {

            element.style.opacity = "0";
            element.style.transform = "translateY(25px)";
            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            observer.observe(element);

        });

    }


    /* =====================================================
       5. ANNÉE AUTOMATIQUE DU FOOTER
    ===================================================== */

    const footerText = document.querySelector(
        ".footer-bottom p"
    );

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.innerHTML =
            "© " +
            currentYear +
            " MAH-DEN PRODUCTION. Tous droits réservés.";

    }


    /* =====================================================
       6. LOG DE CONFIRMATION
    ===================================================== */

    console.log(
        "MAH-DEN PRODUCTION fonctionne correctement."
    );

});
