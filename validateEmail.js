// regEx for valid email is 
// /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ ;

const email = document.querySelector('input[name=email]');
const button = document.querySelector('#btn');

function isValid(email) {
  debugger;
  if(validEmail.test(input)) {
    console.log("that's a valid email");
  }
  else {
    console.log("that isn't a valid email");
  }
}

button.addEventListener('click', isValid());