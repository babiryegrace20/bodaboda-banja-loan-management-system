// SELECTING ALL TEXT ELEMENTS

var email = document.forms['vform']['email'];
var password = document.forms['vform']['password'];

// SELECTING ALL ERROR DISPLAY ELEMENTS

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
// SETTING ALL EVENT LISTENERS

email.addEventListener('blur', emailVerify);
password.addEventListener('blur', passwordVerify);
// validation function
function Validate() {
  
  // validate email
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  // validate password
  if (password.value == "") {
    event.preventDefault();  
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_error.textContent = "Password is required";
    password.focus();
    return true;
  }
  
 
}
// event handler functions

function emailVerify() {
  if (email.value != "") {
  	email.style.border = "1px solid #5e6e66";
  	document.getElementById('email_div').style.color = "#5e6e66";
  	email_error.innerHTML = "";
  	return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
  	password.style.border = "1px solid #5e6e66";

  	document.getElementById('password_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
  
}

// function salesPersonValidation(){
//     event.preventDefault();
//     var username = document.loginForm.username;
//     var password = document.loginForm.password;

//     if(usernameValidation(username)){
//         if(passwordValidation(password,5,35)){        
//         }
//     }
//     return false;
// }

// var usernameError = document.getElementById('usernameError')
// var passwordError = document.getElementById('passwordError')

// function usernameValidation(username){
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(username.value.match(mailformat)){
//         return true;
//     } 
//     else {
//         username.style.border = '1px solid #f00'
//         usernameError.textContent = "Please input correct email"
//         username.focus();
//         return false;
//     }

// }
// function passwordValidation(password,min,max){
//     var password_len = password.value.length;
//     if (password_len == 0 || password_len >= max || password_len < min){
//         password.style.border = '1px solid #f00'
//         passwordError.textContent = "Password should be between 5-35 characters"
//         password.focus();
//         return false;
//     }
//     return true;

// }