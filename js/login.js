document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("text").value;
    const password = document.getElementById("pass").value;

    const apiEndpoint = 'https://fakestoreapi.com/auth/login';

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Parolni xato kritdingiz');
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem('token', data.token); 
        window.location.href = 'admin.html'; 
    })
    .catch(error => {
        console.error(error);
    });
});
