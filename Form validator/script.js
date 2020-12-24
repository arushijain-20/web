const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpass = document.getElementById('confirmpass');


function showError(input,message){
    const controls=input.parentElement;
    controls.className = 'controls error';
    const small=controls.querySelector('small')
    small.innerText=message;
}

function showSuccess(input){
    const controls=input.parentElement;
    controls.className = 'controls success';
}
// return true if email is valid
function vaildmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkLength(input, min, max){
    if(input.value.length<min){
        showError(input,`Must contain atleat ${min} characters`);
    }
    else if(input.value.length>max){
        showError(input,`Must contain atmost ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}

function checkPass(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,'Passwords do not match');
    }
    else{
        showSuccess(input2);
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    if (username.value === ''){
        showError(username,'Username is required');
    }
    else{
        checkLength(username,3,10);
    }
    if (email.value === ''){
        showError(email,'E-mail is required');
    }
    else if(!vaildmail(email.value)){
        showError(email,'Enter valid e-mail');
    }
    else{
        showSuccess(email);
    }
    if (password.value === ''){
        showError(password,'Password is required');

    }
    else{
        checkLength(password, 5, 10);
        
    }
    if (confirmpass.value === ''){
        showError(confirmpass,'This field is required');
    }
    else{
        checkPass(password,confirmpass);
    }

});