const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ ;
let inputEmail = document.getElementById('email');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('prevent default is working');
    console.log('the email is ' + inputEmail.value);

    const invalidWarning = document.getElementById('valid-required');

    if(validEmail.test(inputEmail.value)) {
      console.log("that's a valid email");
      const firstMsg = document.getElementById('start-msg');
      firstMsg.classList.add('hide');
      const secondMsg = document.getElementById('happy-msg');
      secondMsg.classList.remove('hide');
      invalidWarning.classList.add('hide');
      inputEmail.classList.remove('error-state');
    }
    else {
      console.log("that isn't a valid email");
      invalidWarning.classList.remove('hide');
      inputEmail.classList.add('error-state');
    }
});

function dismiss(){
  firstMsg = document.getElementById('start-msg');
  firstMsg.classList.remove('hide');
  const secondMsg = document.getElementById('happy-msg');
  secondMsg.classList.add('hide');
}
