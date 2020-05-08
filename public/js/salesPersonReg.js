function formValidation(){
  var first_name = document.executive.first_name;
  var last_name = document.executive.last_name;
  var current_date = document.executive.current_date;
  var phonenumber = document.executive.phonenumber;
  var email = document.executive.email;
  var id = document.executive.id;
  var password = document.executive.password;
  var supervisor = document.executive.supervisor;
  var workingdays = document.executive.workingdays;
  
  
  if(validatefirstName(first_name)){
      if(validatelastName(last_name)){
          if(validateDate(current_date)){
              if(validateContact(phonenumber)){
                  if(validateEmail(email)){
                      if(validateId(id,5,35)){
                          if(validatePassword(password,6,12)){                              
                                      if(validateSupervisor(supervisor)){
                                        if(validateWorkingDays(workingdays)){
                                            form.submit();

                                      }
                                  }                         
                          }
                      }
                  }
              }
          }
      }
  } 
  return false;
} 

//Validate first name
function validatefirstName(name){
  var letters = /^[A-Za-z]+$/;
  if(name.value.match(letters)){
    first_name.style.border = "2px solid green";
    return true;
  }
  else {
    first_name.style.border = "2px solid red";
    alert('non-alphabets are not allowed');
    first_name.focus();
    return false;
    }
  }

//Validate last name
function validatelastName(name){
  var letters = /^[A-Za-z]+$/;
  if(name.value.match(letters)){
    last_name.style.border = "2px solid green";
    return true;
  }
  else {
      last_name.style.border = "2px solid red";
      alert('non-alphabets are not allowed');
      lastName.focus();
      return false;
    }
  
      
  }

//Validate Date of Birth
function validateDate(date){
  if(date.value != ""){
    return true;
  }
  else {
      current_date.style.border = "2px solid red";
      alert('date is required');
      current_date.focus();
      return false;

  }
}

//Validate phone contact
function validateContact(a){
  var numbers = /^[0-9]+$/;
  if(a.value.match(numbers)){
     return true;
  }
  else {
    phonenumber.style.border = "2px solid red";
    alert('contact is required');
    contact.focus();
    return false;
  }
}

//Validate email
function validateEmail(uemail){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat)){
        return true;
    } 
    else {
        email.style.border = "2px solid red";
        alert('enter valid email');
        email.focus();
        return false;
    }
} 

//Validate ID
function validateId(uid,mx,my){
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx){
        id.style.border = "2px solid red";
        alert('id should be between 5 and 35 characters');
        id.focus();
        return false;
   
    }
    return true;
}

//Validate password
function validatePassword(pass,mx,my){
    var pass_len = pass.value.length;
    if (pass_len == 0 || pass_len >= my || pass_len < mx) {
        password.style.border = "2px solid red";
        alert("Password must have 6-12 characters");
        password.focus();
        return false;
    }
    return true
}

//Validate number of working days
function validateWorkingDays(a){
    var numbers = /^[0-9]+$/;
    if(a.value.match(numbers)){
        return true;
    }
    else {
      workingDaysNum.style.border = "2px solid red";
      alert("This field is required");
      workingdays.focus();
      return false;
    }
}

//Validate Supervisor name
function validateSupervisor(name){
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)){
        return true;
    }
    else {
        supervisor.style.border = "2px solid red";
        alert("Supervisor name is required");
        supervisor.focus();
        return false;
    }   
}

//Validate current date
/**function validateTodayDate(date){
    if(date.value != ""){
        alert('Form Succesfully Submitted');
        return true;
    }
    else {
        
        todayDate.style.border = "2px solid red";
        document.getElementById('todayDate_div').style.color = "red";
        todayDate_error.textContent = "Date of birth is required";
        todayDate.focus();
        todayDate.addEventListener('blur', () =>{
            document.getElementById('todayDate_div').style.color = "";
            todayDate_error.textContent = "";
            todayDate.style.border = "";
           
        })
      
        return false;
  
    }
}  **/
  
