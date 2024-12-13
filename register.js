document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password')
    };

    console.log('User registered:', user); // Replace with API call if needed.
});
