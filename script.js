// EMMZYTECH STUDIO - WEBSITE FEATURES

// 1. Mobile navigation menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("show-menu");

        const isOpen = navigation.classList.contains("show-menu");
        menuButton.setAttribute("aria-expanded", isOpen);
    });
}

// 2. Close the mobile menu after selecting a link
if (navigation) {
    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("show-menu");

            if (menuButton) {
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
    });
}

// 3. Update the copyright year automatically
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 4. Contact form validation
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formMessage.textContent =
            "Your form looks complete, but message delivery has not been connected yet.";

        formMessage.setAttribute("role", "status");
    });
}

// 5. Sign-up form demonstration
const signupForm = document.querySelector("#signup-form");
const signupMessage = document.querySelector("#signup-message");

if (signupForm && signupMessage) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!signupForm.checkValidity()) {
            signupForm.reportValidity();
            return;
        }

        signupMessage.textContent =
            "The form is working, but account registration needs a secure authentication service.";

        signupMessage.setAttribute("role", "status");
    });
}

// 6. Login form demonstration
const loginForm = document.querySelector("#login-form");
const loginMessage = document.querySelector("#login-message");

if (loginForm && loginMessage) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!loginForm.checkValidity()) {
            loginForm.reportValidity();
            return;
        }

        loginMessage.textContent =
            "Login is not connected yet. A secure authentication service is required.";

        loginMessage.setAttribute("role", "status");
    });
}

// 7. Reveal elements when they enter the screen
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
}
