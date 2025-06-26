    document.addEventListener("DOMContentLoaded", function () {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const toast = document.getElementById("toast");

    // Toggle between sign in and sign up forms
    signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
    });

    // Login form validation
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (!email || !password) {
        showToast("Please fill in all fields");
        return;
        }

        if (!validateEmail(email)) {
        showToast("Please enter a valid email address");
        return;
        }

        // Simulate login success
        showToast("Login successful! Redirecting...");
        loginForm.reset();
    });

    // Signup form validation
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById(
        "signupConfirmPassword"
        ).value;

        if (!name || !email || !password || !confirmPassword) {
        showToast("Please fill in all fields");
        return;
        }

        if (!validateEmail(email)) {
        showToast("Please enter a valid email address");
        return;
        }

        if (password.length < 6) {
        showToast("Password must be at least 6 characters");
        return;
        }

        if (password !== confirmPassword) {
        showToast("Passwords do not match");
        return;
        }

        // Simulate signup success
        showToast("Account created successfully!");
        signupForm.reset();
        container.classList.remove("right-panel-active");
    });

    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Toast notification
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(() => {
        toast.classList.remove("show");
        }, 3000);
    }
    });
