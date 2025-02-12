document.addEventListener('DOMContentLoaded', function() {
    // Create form elements
    const formContainer = document.getElementById('form-container');

    const form = document.createElement('form');
    form.setAttribute('id', 'login-form');

    const heading = document.createElement('h2');
    heading.textContent = 'Login';
    form.appendChild(heading);

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('placeholder', 'Enter your email');
    emailInput.required = true;
    form.appendChild(emailInput);

    form.appendChild(document.createElement('br'));

    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'Password:';
    form.appendChild(passwordLabel);

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('id', 'password');
    passwordInput.setAttribute('placeholder', 'Enter your password');
    passwordInput.required = true;
    form.appendChild(passwordInput);

    form.appendChild(document.createElement('br'));

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginButton.setAttribute('type', 'button');
    loginButton.addEventListener('click', function() {
        const email = emailInput.value;
        const password = passwordInput.value;

        if (!email || !password) {
            alert('Please fill in both fields.');
            if (!email) emailInput.style.borderColor = 'red';
            if (!password) passwordInput.style.borderColor = 'red';
        } else {
            alert(`Email: ${email}\nPassword: ${password}`);
        }
    });
    form.appendChild(loginButton);

    // Append the form to the container
    formContainer.appendChild(form);
});
