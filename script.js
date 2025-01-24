const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ ;

const inputEmail = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('prevent default is working');
    console.log('the email is ' + inputEmail.value);

});

