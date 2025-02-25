document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const validUsername = 'user';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        // Successful login
        window.location.href = 'index2.html'; // Redirect to dashboard (or another page)
    } else {
        // Display error message
        errorMessage.textContent = 'Invalid username or password';
    }
});