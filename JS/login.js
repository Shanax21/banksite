//step 1 add click event handler
document.getElementById('btn-submit').addEventListener('click',function(){
    //step 2 get the email address inside the email input field.
    //use .value to get text from inpout field
    const emailfield = document.getElementById('user-email');
    const email=emailfield.value;
    //step 3 get password
    //set id on html
    const passfinder = document.getElementById('user-pass');
    const pass=passfinder.value;
    //Do not verify email password on client side
    if (email==='labiba@gmail.com' && pass ==='secret'){
        window.location.href='bank.html';
    }
    else{
        alert('Wrong password , try again.');
    }



})