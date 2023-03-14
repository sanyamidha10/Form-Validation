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

const isEmail()={
    
}

// validate function
const validate = (Val) =>{
    const usernameVal = username.value.trim;
    const emailVal = email.value.trim;
    const passwordVal = password.value.trim;
    const cpasswordVal = cpassword.value.trim;

    // USERNAME VALIDATION
    if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blank');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'username must be of minimum 3 characters');
    }else{
        setSuccessMsg(username);
    }

    // EMAIL VALIDATION
    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
    }
    else if (!isEmail(emailVal)){
        setErrorMsg(emailVal, 'email min 3 char');
    }
    else{
        setSuccessMsg(email);
    }
}