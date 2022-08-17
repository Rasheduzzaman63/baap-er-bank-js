// step-1:add event handler 
document.getElementById('submit-btn').addEventListener('click', function(){
    // step-2: 
    // step-2.1: set the id of email and password field
    // step-2.2: get the value of email field 
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
     // step-2.3: get the value of email field 
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if(email == 'bipul@gmail.com' && password == 'kamal'){
        window.location.href = 'bank.html';
    }
    else{
        console.log('invalid')
    }

    
})