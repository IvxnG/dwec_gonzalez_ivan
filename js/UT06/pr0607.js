document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const emailError = document.getElementById('email-error');
    const passwordMatchError = document.getElementById('password-match-error');
    const passwordStrength = document.getElementById('password-strength');

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // fortaleza de la contraseña
    function calculatePasswordStrength(password) {
        let strength = 0;

        if (password.length >= 8) {
            strength++;
        }

        if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
            strength++;
        }

        if (/\d/.test(password)) {
            strength++;
        }

        if (/[^A-Za-z0-9]/.test(password)) {
            strength++;
        }

        return strength;
    }

    //fuerzaa de la contraseña
    function updatePasswordStrength(password) {
        const strength = calculatePasswordStrength(password);

        switch (strength) {
            case 0:
            case 1:
                passwordStrength.textContent = 'Muy débil';
                passwordStrength.className = 'weak';
                break;
            case 2:
                passwordStrength.textContent = 'Débil';
                passwordStrength.className = 'weak';
                break;
            case 3:
                passwordStrength.textContent = 'Aceptable';
                passwordStrength.className = 'acceptable';
                break;
            case 4:
                passwordStrength.textContent = 'Fuerte';
                passwordStrength.className = 'strong';
                break;
            case 5:
                passwordStrength.textContent = 'Muy segura';
                passwordStrength.className = 'very-strong';
                break;
            default:
                break;
        }
    }

    emailInput.addEventListener('blur', function () {
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'El correo electrónico no es válido';
        } else {
            emailError.textContent = '';
        }
    });

    //validar si las contraseñas coinciden
    confirmPasswordInput.addEventListener('keyup', function () {
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordMatchError.textContent = 'Las contraseñas no coinciden';
        } else {
            passwordMatchError.textContent = '';
        }
    });

    //mostrar la fortaleza de la contraseña
    passwordInput.addEventListener('keyup', function () {
        updatePasswordStrength(passwordInput.value);
    });

    document.getElementById('signup-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        console.log('Correo Electrónico:', email);
        console.log('Contraseña:', password);
    });
});
