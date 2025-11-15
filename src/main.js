import './sass/main.scss';

///

const form = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('email-error');
const succesMsg = document.getElementById('success');
const wrraper = document.getElementById('wrapper');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const value = emailInput.value.trim(); // for white space

  if (!validateEmail(value)) {
    showErrorMsg();
  } else {
    showSuccessMsg();
  }
});

// functions

function validateEmail(email) {
  const regex = /^ash@loremcompany\.com$/;
  return regex.test(email);
}
const test = 'xxx@gmail.com';
const test1 = 'ash@loremcompany.com';

// console.log(validateEmail(test));
// console.log(validateEmail(test1));

function showErrorMsg() {
  emailInput.classList.add('error-msg');
  emailError.style.display = 'block';
}

function showSuccessMsg() {
  wrraper.style.display = 'none';
  succesMsg.style.display = 'block';
}
