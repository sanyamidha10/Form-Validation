const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


// add event
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validate();
})

// validate function
const validate = () =>{
    const username = username.value.trim;
    const email = email.value.trim;
    const password = password.value.trim;
    const cpassword = cpassword.value.trim;
}