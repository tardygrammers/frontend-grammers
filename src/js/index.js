const form = document.getElementById('auth-form');
let email;
let password;
form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  email = formData.get(email);
  password = formData.get(password);

  return fetch('https://tardy-graham-cracker.herokuapp.com/api/v1/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(res => res.json())
    .then(console.log('stuff'));
  
});
