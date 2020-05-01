  function validate(){
    var fn=document.getElementById('name').value;
      if(fn == ""){
          alert('Please fill in this field');
          document.getElementById('name').style.border = "2px solid red";
          return false;
      }else{
          document.getElementById('name').style.border = "2px solid green";
      }
      if (/^[0-9]+$/.test(document.getElementById("name").value)) {
          alert("enter alphabets only!!");
          document.getElementById('name').style.border = "2px solid red";
          return false;
      }else{
          document.getElementById('name').style.border = "2px solid green";
      }

    var nIn=document.getElementById('nin').value;
      if(nIn == ""){
          alert('Please fill in this field');
          document.getElementById('nin').style.border = "2px solid red";
          return false;
      }else{
          document.getElementById('nin').style.border = "2px solid green";
      }
      if (/^[0-9]+$/.test(document.getElementById("nin").value.length(3))) {
        alert("NiN should start with three alphabets!!");
        document.getElementById('nin').style.border = "2px solid red";
        return false;
      }else{
          document.getElementById('nin').style.border = "2px solid green";
      }
      if(nIn.length !=13){
          alert('Should be 13 characters');
          document.getElementById('nin').style.border = "2px solid red";
          return false;
      }else{
          document.getElementById('nin').style.border = "2px solid green";
      }

    var downpay=document.getElementById('downpayment').value;
      if(downpay == ""){
          alert('you can not register without downpayment');
          document.getElementById('downpayment').style.border = "2px solid red";
          return false;
      }else{
          document.getElementById('downpayment').style.border = "2px solid green";
      }
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("downpayment").value)){
        document.getElementById('nin').style.border = " 2px solid green";
        return true;
      }else{
        alert("Down Payment should be alpha-numerals!!");
        document.getElementById('downpayment').style.border = "2px solid red";
      }
      if(downpay != "850,000/="){
      alert('Downpayment should be 850,000/=');
      document.getElementById('downpayment').style.border = "2px solid red";
      return false;
      }else{
        document.getElementById('downpayment').style.border = "2px solid green";
      }
    
    var phoneno=document.getElementById('phonenumber').value;
      if(phoneno == ""){
          alert('Please enter your phone number');
          document.getElementById('phonenumber').style.border = "2px solid red";
          return false;
      }else{
          document.getElementById('phonenumber').style.border = "2px solid green";
      }
      if (/^[0-9]+$/.test(document.getElementById("phonenumber").value)) {
        alert("Phone number should only be text!!");
        document.getElementById('phonenumber').style.border = "2px solid red";
        return false;
      }else{
        document.getElementById('phonenumber').style.border = "2px solid green";
      }
      if(phoneno.length < 10){
        alert('Should not be less than 10 characters');
        document.getElementById('nin').style.border = "2px solid red";
        return false;
      }else{
        document.getElementById('nin').style.border = "2px solid green";
      }
    var pwd=document.getElementById('password').value;
      if(pwd == ""){
          alert('Please enter a password');
          document.getElementById('password').style.border = "2px solid red";
          return false;
      }else{
          document.getElementById('password').style.border = "2px solid green";
      }
      if(pwd.length==0 ||pwd.length<6||pwd.length>12 ){
        alert('Should not be between 6-12 characters');
        document.getElementById('password').style.border = "2px solid red";
        return false;
      }else{
        document.getElementById('password').style.border = "2px solid green";
      }

    var iD=document.getElementById('id').value;
      if(iD == ""){
          alert('Please enter an id');
          document.getElementById('id').style.border = "2px solid red";
          return false;
      }else{
          document.getElementById('id').style.border = "2px solid green";
      }
      if(pwd.length==0 ||pwd.length<5||pwd.length>35 ){
          alert('Should not be between 5-35 characters');
          document.getElementById('id').style.border = "2px solid red";
          return false;
      }else{
          document.getElementById('id').style.border = "2px solid green";
      }

  }
  //validate()
  /**function validate()
  {

    var firstname = document.form.first_name
    var lastname = document.form.last_name
    var datetoday    = document.form.date_today
    var nation = document.form.nationality
    var birth = document.form.birthday
    var sex = document.form.gender
    var emails  = document.form.email
    var phoneno = document.form.telno
    var niN = document.form.nin
    var downpay = document.form.downpayment
    var vehicle = document.form.subject
    var stage = document.form.stage_name
    var loan = document.form.other_loan
    var refname = document.form.referee_name
    var refwork = document.form.referee_work
    

    function alphabet()
  {
    /**declaring a variable letter that stores the regular expression that 
    will be matched against**/
    var letter = /^[A-Za-z]+$/
    if (firstname.value.match(letter))
    {
      document.getElementById('name').style.border = "2px solid green";
      return true
    }
    else
    {
      alert("Value should not be numeric")
      firstname.focus()
      document.getElementById('name').style.border = "2px solid red";
      return false
    }
  }
      var tel =(phoneno) =>{
        if(phoneno.value.length==0 || phoneno.value.length!=10)
        {
          alert("Invalid phone number")
          phoneno.focus()
          document.getElementById('phonenumber').style.border = "2px solid red";
          return false
        }
        else
        {
          document.getElementById('phonenumber').style.border = "2px solid green";
          return true
        }
      }



  var alphanumeric =(downpay)=>{

    var payment = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (downpay.value.match(payment))
    {
      document.getElementById('downpayment').style.border = "2px solid green";
      return true
    }
    else
    {
      alert("Value should be alphanumeric")
      downpay.focus()
      document.getElementById('downpayment').style.border = "2px solid red";
      return false
    }
  }

  if(alphabet())
  {

  } 
  if(tel(phoneno))
  {

  }
  
  if(alphanumeric(downpay, payment))
  {

  }
  }**/