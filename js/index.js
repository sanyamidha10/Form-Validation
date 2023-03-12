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

    // USERNAME VALIDATION
    if(username === ""){
        setErrorMsg(username, 'username cannot be blank');
    }
    else if(username.length <=2){
        setErrorMsg(username, 'username must be of minimum 3 characters');
    }else{
        setSuccessMsg(username);
    }
}