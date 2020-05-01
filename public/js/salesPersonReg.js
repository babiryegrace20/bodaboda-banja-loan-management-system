function formValidation(){
  var firstName = document.registration.firstName;
  var lastName = document.registration.lastName;
  var dob = document.registration.dob;
  var contact = document.registration.contact;
  var email = document.registration.email;
  var id = document.registration.id;
  var password = document.registration.password;
  var workingDaysNum = document.registration.workingDaysNum;
  var supervisor = document.registration.supervisor;
  var todayDate = document.registration.todayDate;
  
  
  if(validatefirstName(firstName)){
      if(validatelastName(lastName)){
          if(validateDob(dob)){
              if(validateContact(contact)){
                  if(validateEmail(email)){
                      if(validateId(id,5,35)){
                          if(validatePassword(password,6,12)){                              
                                  if(validateWorkingDays(workingDaysNum)){
                                      if(validateSupervisor(supervisor)){
                                          if(validateTodayDate(todayDate)){
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
  } 
  return false;
} 

//Validate first name
function validatefirstName(name){
  var letters = /^[A-Za-z]+$/;
  if(name.value.match(letters)){
      return true;
  }
  else {
      firstName.style.border = "2px solid red";
      document.getElementById('firstName_div').style.color = "red";
      firstName_error.textContent = "First name is required";
      firstName.focus();
      firstName.addEventListener('blur', () =>{
          document.getElementById('firstName_div').style.color = "";
          firstName_error.textContent = "";
          firstName.style.border = "";
         
      })
    
      return false;
  }   
}

//Validate last name
function validatelastName(name){
  var letters = /^[A-Za-z]+$/;
  if(name.value.match(letters)){
      return true;
  }
  else {
      lastName.style.border = "2px solid red";
      document.getElementById('lastName_div').style.color = "red";
      lastName_error.textContent = "Last name is required";
      lastName.focus();
      lastName.addEventListener('blur', () =>{
        document.getElementById('lastName_div').style.color = "";
        lastName_error.textContent = "";
        lastName.style.border = "";
       
    })
  
      return false;
  }   
}

//Validate Date of Birth
function validateDob(date){
  if(date.value != ""){
    return true;
  }
  else {
      dob.style.border = "2px solid red";
      document.getElementById('dob_div').style.color = "red";
      dob_error.textContent = "Date of birth is required";
      dob.focus();
      dob.addEventListener('blur', () =>{
        document.getElementById('dob_div').style.color = "";
        dob_error.textContent = "";
        dob.style.border = "";
       
    })
  
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
    contact.style.border = "2px solid red";
    document.getElementById('contact_div').style.color = "red";
    contact_error.textContent = "Contact is required";
    contact.focus();
    contact.addEventListener('blur', () =>{
        document.getElementById('contact_div').style.color = "";
        contact_error.textContent = "";
        contact.style.border = "";
       
    })
  
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
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Enter correct email";
    email.focus();
    email.addEventListener('blur', () =>{
        document.getElementById('email_div').style.color = "";
        email_error.textContent = "";
        email.style.border = "";
       
    })
  
    return false;
    }
} 

//Validate ID
function validateId(uid,mx,my){
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx){
        id.style.border = "2px solid red";
        document.getElementById('id_div').style.color = "red";
        id_error.textContent = "ID must have 5-35 characters";
        id.focus();
        id.addEventListener('blur', () =>{
            document.getElementById('id_div').style.color = "";
            id_error.textContent = "";
            id.style.border = "";
           
        })
      
        
        return false;
   
    }
    return true;
}

//Validate password
function validatePassword(pass,mx,my){
    var pass_len = pass.value.length;
    if (pass_len == 0 || pass_len >= my || pass_len < mx) {
        password.style.border = "2px solid red";
        document.getElementById('password_div').style.color = "red";
        password_error.textContent = "Password must have 6-12 characters";
        password.focus();
        password.addEventListener('blur', () =>{
            document.getElementById('password_div').style.color = "";
            password_error.textContent = "";
            password.style.border = "";
           
        })
      
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
      document.getElementById('workingDaysNum_div').style.color = "red";
      workingDaysNum_error.textContent = "This field is required";
      workingDaysNum.focus();
      workingDaysNum.addEventListener('blur', () =>{
        document.getElementById('workingDaysNum_div').style.color = "";
        workingDaysNum_error.textContent = "";
        workingDaysNum.style.border = "";
       
    })
  
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
        document.getElementById('supervisor_div').style.color = "red";
        supervisor_error.textContent = "Supervisor name is required";
        supervisor.focus();
        supervisor.addEventListener('blur', () =>{
            document.getElementById('supervisor_div').style.color = "";
            supervisor_error.textContent = "";
            supervisor.style.border = "";
           
        })
      
      
        return false;
    }   
}

//Validate current date
function validateTodayDate(date){
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
}  
  
