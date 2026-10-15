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

// 2. Close mobile menu after selecting a link
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

// 3. Update copyright year
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 4. Contact form - send messages using Web3Forms
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        const originalButtonText = submitButton
            ? submitButton.textContent
            : "Submit Message";

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        formMessage.textContent = "Sending your message...";

        try {
            const formData = new FormData(contactForm);

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                formMessage.textContent =
                    "Your message was sent successfully! Thank you for contacting EmmzyTech Studio.";

                contactForm.reset();
            } else {
                formMessage.textContent =
                    "We couldn't send your message. Please check the form setup or contact us through WhatsApp.";
            }
        } catch (error) {
            formMessage.textContent =
                "A connection problem prevented your message from being sent. Please try again or use WhatsApp.";
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        }
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
            "Account registration is not available yet. A secure authentication service must be connected.";

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
            "Login is not available yet. A secure authentication service must be connected.";

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
