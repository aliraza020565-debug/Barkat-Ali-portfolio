// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");


    const icon =
        menuToggle.querySelector("i");


    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



// ========================================
// CLOSE MOBILE MENU
// ========================================

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");


        const icon =
            menuToggle.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



// ========================================
// BACK TO TOP
// ========================================

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// ========================================
// CURRENT YEAR
// ========================================

document.getElementById("year").textContent =
    new Date().getFullYear();



// ========================================
// NAVBAR SHADOW
// ========================================

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0, 0, 0, 0.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});