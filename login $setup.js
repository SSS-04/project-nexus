function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields for login.');
    } else {
        alert('Login successful!');
        // You can redirect or perform additional actions here
    }
}

function signup() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    if (newUsername === '' || newPassword === '') {
        alert('Please fill in all fields for sign up.');
    } else {
        alert('Sign up successful!');
        // You can redirect or perform additional actions here
    }
}
