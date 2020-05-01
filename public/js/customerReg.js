function customerValidation(){
    var first_name = document.form.first_name;
    var last_name = document.form.last_Name;
    var birthday = document.form.birthday;
    var telno = document.form.telno;
    var nationality = document.form.nationality;
    var nin = document.form.nin;
    var maritalStatus = document.form.maritalStatus;
    var single = document.form.single;
    var married = document.form.married;
    var stage_name = document.form.stage_name;
    var lc1 = document.form.lc1;
    var lc3 = document.form.lc3;
    var oYes = document.getElementById('yes');
    var oNo = document.getElementById('no');
    var other_loan = document.form.other_loan;
    var referee_name = document.form.referee_name;
    var refereeDob = document.form.refereeDob;
    var referee_work = document.form.referee_work;
    var vehicleType = document.form.vehicleType;
    var downpayment = document.form.downpayment;
    var date_today = document.form.date_today;
    
    
    if(validatefirstName(first_name)){
        if(validatelastName(last_name)){
            if(validateDob(birthday)){
                if(validateContact(telno)){
                    if(validateNationality(nationality)){
                        if(validateNin(nin)){                                                         
                                if(validateStageName(stage_name)){
                                        if(validateLc(lc1,lc3)){
                                           if(validateOtherLoans(oYes,oNo)){
                                                if(validateRefereeName(referee_name)){
                                                    if(validateRefereeDob(refereeDob)){
                                                        if(validateRefereeOccupation(referee_work)){
                                                            if(validateVehicle(vehicleType)){
                                                                if(validateDownPayment(downpayment)){
                                                                    if(validateTodayDate(date_today)){
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
        last_name.focus();    
        return false;
    }   
  }  
  //Validate Date of Birth
  function validateDob(date){
    if(date.value != ""){
        birthday.style.border = "2px solid green";
      return true;
    }
    else {
        birthday.style.border = "2px solid red";
        alert('birth date is required');
        birthday.focus();
        return false;
  
    }
  }  
  //Validate phone contact
  function validateContact(a){
    var numbers = /^[0-9]+$/;
    if(a.value.match(numbers)){
        telno.style.border = "2px solid green";
        return true;
    }
    else {
      telno.style.border = "2px solid red";
      alert('phone number is required');  
      telno.focus();
      return false;
    }
  }
  //Validate Nationality
  function validateNationality(name){
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)){
        nationality.style.border = "2px solid green";
        return true;
    }
    else {
        nationality.style.border = "2px solid red";
        alert('nationality is required');
        nationality.focus();
        return false;
    }   
  }
   //Validate NIN
   function validateNin(uid){
    var uid_len = uid.value.length;
    var letters = /^[A-Za-z]{3}[a-zA-Z0-9]/;
    if ( uid.value.match(letters)==null || uid_len !== 13){
        nin.style.border = "2px solid red";
        alert('NIN must have 13 characters starting with 3 letters');
        nin.focus();
        return false;
   
    }
    nin.style.border = "2px solid green";
    return true;
}
  /**Validate marital status
  function validateLc(single,married){
    x=0;
    if(single.checked){
        x++;
    }
    if(married.checked){
        x++; 
    }
    if(x==0){
        alert('Select LC confirmation letters');
        single.focus();
        return false;
    }
    
    return true;
    
}
function validateOtherLoans(single,married){
    x=0;
    if(single.checked){
        x++;
    }
    if(married.checked){
        x++; 
    }
    if(x==0){
        alert('Please Select Other Loans field');
        single.focus();
        return false;
    }
    
    return true;
    
}**/
 //Validate Stage name
 function validateStageName(name){
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)){
        stage_name.style.border = "2px solid green";
        return true;
    }
    else {
        stage_name.style.border = "2px solid red";
        alert('stage name is required');
        stage_name.focus();
        return false;
    }   
}
 //Validate Referee name
 function validateRefereeName(referee_name){
    var letters = /^[A-Za-z]+$/;
    if(referee_name.value.match(letters)){
        referee_name.style.border = "2px solid green";
        return true;
    }
    else {
        referee_name.style.border = "2px solid red";
        alert('referee name is required');
        referee_name.focus();
        return false;
    }   
  }
   /**Validate Referee Date of Birth
   function validateRefereeDob(refereeDob){
    if(refereeDob.value != ""){
       return true;
    }
    else {
        
        refereeDob.style.border = "2px solid red";
        alert('birth date is required');
        refereeDob.focus();
        return false;
  
    }
} **/ 

 //Validate Referee Occupation
 function validateRefereeOccupation(referee_work){
    var letters = /^[A-Za-z]+$/;
    if(referee_work.value.match(letters)){
        referee_work.style.border = "2px solid green";
        return true;
    }
    else {
        referee_work.style.border = "2px solid red";
        alert('referee work is required');
        referee_work.focus();
        return false;
    }   
  }

  /**Validate vehicle
  function validateVehicle(vehicleType){
    if(vehicleType.value == ""){
        alert('Select your vehicle from the list');
        vehicleType.focus();
        return false;
    }
    else {
        return true;
    }
} **/ 
  //Validate down payment
  function validateDownPayment(downpayment){
      var mailformat = /^[0-9a-zA-Z _.,!]+$/;
      if(downpayment.value.match(mailformat)){
        downpayment.style.border = "2px solid green";
        return true;
      } 
      else {
      downpayment.style.border = "2px solid red";
      alert('invalid value');
      downpayment.focus();
      return false;
      }
  }  
  //Validate current date
  function validateTodayDate(today_date){
      if(today_date.value != ""){
        today_date.style.border = "2px solid green";
          return true;
      }
      else {
          
          today_date.style.border = "2px solid red";
          alert('enter valid date');
          today_date.focus();
          return false;
    
      }
  }  
    
  