const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');

function validateName() {
  if (nameInput.value === '') {
    nameInput.style.borderColor = 'red';
    nameError.textContent = 'Please enter your name';
    return false;
  }
  nameError.textContent = '';
  nameInput.style.borderColor = '';
  return true;
}

nameInput.addEventListener('blur', validateName);


const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;


function validateEmail() {
    if (emailInput.value === '') {
      emailInput.style.borderColor = 'red';
      emailError.textContent = 'Please enter your email';
      return false;
    } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address';
      emailInput.style.borderColor = 'red';
      return false;
    }
    emailError.textContent = '';
    emailInput.style.borderColor = '';
    return true;
  }

emailInput.addEventListener('blur', validateEmail);




const subjectInput = document.getElementById('subject');
const subjectError = document.getElementById('subjectError');

function validateSubject() {
  if (subjectInput.value === '') {
    subjectInput.style.borderColor = 'red';
    subjectError.textContent = 'Please enter your subject';
    return false;
  }
  subjectError.textContent = '';
  subjectInput.style.borderColor = '';
  return true;
}

subjectInput.addEventListener('blur', validateSubject);




const messageInput = document.getElementById('message');
const messageError = document.getElementById('messageError');

function validateMessage() {
  if (messageInput.value === '') {
    messageInput.style.borderColor = 'red';
    messageError.textContent = 'Please enter your message';
    return false;
  }
  messageError.textContent = '';
  messageInput.style.borderColor = '';
  return true;
}

messageInput.addEventListener('blur', validateMessage);



const contactForm = document.getElementById('contact-form');
const sendBtn = document.querySelector('.btn');

sendBtn.addEventListener('click', function() {
  validateForm();
});

function validateForm() {
  let isValid = true;
  if (!validateName()) isValid = false;
  if (!validateEmail()) isValid = false;
  if (!validateSubject()) isValid = false;
  if (!validateMessage()) isValid = false;
  if (isValid) {
    form.submit();
  }
}




const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateName() && validateEmail()) {
    form.submit();
  }
});
