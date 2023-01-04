

$('document').ready(function (){
    alert('Welcome to Rose Portfolio!');
});

function validateForm(){
    if (document.forms[0].myName.value == ""){
        alert("Please enter an Name.");
        return false;
    } //end if
    
    if (document.forms[0].myEmail.value == ""){
        alert("Please enter an e-mail adress.");
        return false;
    } //end if
    else {
        return true;
    }
} //end function validateForm


// let checkPassword = prompt("Enter Password");

// document.password = checkPassword;

// function showAlert(){
//     alert("enter your password");
// }
// function clickAlert(){
//     alert('Click on Okay to continue');
// }

// function checkPassword(){
//     let password = "weir@wwu.edu";

//     if(password.length > 8){
//     alert('Password');
//     }
//     if(password == 'password'){
//     alert('');
//     }
// }