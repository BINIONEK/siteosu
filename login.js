document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {
        username: formData.get('username'),
        password: formData.get('password'),
    };

    console.log('Logging in user:', user);

    // Example API call for login (replace with real API endpoint if needed)
    fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Login failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error logging in:', error);
        });
});
