const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const psw = document.getElementById('psw');

function checkName() {
  // trim to remove the whitespaces
  const nameValue = name.value.trim();
  
  if(nameValue === '') {
    setErrorFor(name, 'Username cannot be blank');
  } else {
    setSuccessFor(name);
  }

}

function checkEmail() {
  // trim to remove the whitespaces
  const emailValue = email.value.trim();
  
  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

}

function checkPsw() {
  // trim to remove the whitespaces
  const pswValue = psw.value.trim();
  
  if(pswValue === '') {
    setErrorFor(psw, 'Password cannot be blank');
  } else {
    setSuccessFor(psw);
  }

}


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
  
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}