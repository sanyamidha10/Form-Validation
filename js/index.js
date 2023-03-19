const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone')
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


// add event
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validate();
})

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;

    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2) return false;

    if (dot === emailVal.length - 1) return false;

    return true;

}

const sendData = (usernameVal ,sRate, count) =>{
    if(sRate === count){
        alert("Thank you for registering with us!")
        // swal("Welcome! "+usernameVal, "Registration successful", "success");
        location.href = `success.html?username=${usernameVal}`
    }
}

// for final data validation
const successMsg = (usernameVal) =>{
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i=0; i<formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            var sRate = 0+i;
            console.log(sRate);
            sendData(usernameVal ,sRate, count);
        }
        else{
            return false;
        }
    }
}

// validate function
const validate = () =>{
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // USERNAME VALIDATION
    if(usernameVal === ""){
        setErrorMsg(username, 'Username cannot be blank');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'Username must be of minimum 3 characters');
    }else{
        setSuccessMsg(username);
    }

    // EMAIL VALIDATION
    if(emailVal === ""){
        setErrorMsg(email, 'Email cannot be blank');
    }
    else if (!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid Email');
    }
    else{
        setSuccessMsg(email);
    }

    // PHONE VALIDATION
    if(phoneVal === ""){
        setErrorMsg(phone, 'Phone number cannot be blank');
    }
    else if (phoneVal.length != 10){
        setErrorMsg(phone, 'Not a valid Phone number');
    }
    else{
        setSuccessMsg(phone);
    }

    // PASSWORD VALIDATION
    if(passwordVal === ""){
        setErrorMsg(password, 'Passeord cannot be blank');
    }
    else if (passwordVal.length <= 5){
        setErrorMsg(password, 'Minimum 6 characters');
    }
    else{
        setSuccessMsg(password);
    }

    // CONFIRM PASSWORD VALIDATION
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Confirm Password cannot be blank');
    }
    else if (cpasswordVal.length <= 5){
        setErrorMsg(cpassword, 'Minimum 6 characters');
    }
    else if (cpasswordVal != passwordVal){
        setErrorMsg(cpassword, 'Password and Confirm Password should be same');
    }
    else{
        setSuccessMsg(cpassword);
    }

    successMsg(usernameVal);

}



function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}