// Code for Simple Form ...
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const errorMessage = document.querySelector('#errorMsg');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    errorMessage.textContent = 'You need to fill in both names!';
  }
});