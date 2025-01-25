const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ ;

const inputEmail = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('prevent default is working');
    console.log('the email is ' + inputEmail.value);

    if(validEmail.test(inputEmail.value)) {
      console.log("that's a valid email");
      const firstMsg = document.getElementById('start-msg');
      firstMsg.classList.add('hide');
      const secondMsg = document.getElementById('happy-msg');
      secondMsg.classList.remove('hide');
    }
    else {
      console.log("that isn't a valid email");
    }
});

const dButton = document.getElementById('dismiss');

dButton.addEventListener('onClick', (e) => {
  console.log('dismiss got clicked');
});

function dismiss(){
  firstMsg = document.getElementById('start-msg');
  firstMsg.classList.remove('hide');
  const secondMsg = document.getElementById('happy-msg');
  secondMsg.classList.add('hide');
}

