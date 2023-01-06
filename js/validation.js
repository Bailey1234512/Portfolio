const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');

function validateName() {
  if (nameInput.value === '') {
    nameError.textContent = 'Please enter your name';
    console.log('Please enter your name');
    return false;
  }
  nameError.textContent = '';
  return true;
}

nameInput.addEventListener('blur', validateName);


const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validateEmail() {
    if (emailInput.value === '') {
      emailError.textContent = 'Please enter your email';
      console.log('Please enter your email');
      return false;
    } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address';
      console.log('Please enter a valid email address');
      return false;
    }
    emailError.textContent = '';
    return true;
  }

emailInput.addEventListener('blur', validateEmail);


const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateName() && validateEmail()) {
    form.submit();
  }
});