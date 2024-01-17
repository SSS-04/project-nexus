document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');

  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('User registered successfully');
    } else {
      alert('Failed to register user');
    }
  });

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Login successful');
    } else {
      alert('Invalid username or password');
    }
  });
});
