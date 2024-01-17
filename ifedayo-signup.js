function validateform() {
    var username = document.getElementById("username").value;  
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;  
    var password2 = document.getElementById("password2").value;  
   
    if(username == "") {  
      document.getElementById("message1").innerHTML = "*Kindly fill your username*";
    } 
    if(email == "") {  
      document.getElementById("message2").innerHTML = "*Kindly fill your email*";
    }
    if(password1 == "") {  
      document.getElementById("message3").innerHTML = "*Fill the password please!*";
    }  
    if(password2 == "") {  
      document.getElementById("message4").innerHTML = "*Enter the password please!*";
      return false;
    }
    if(password1.length < 6) {  
      document.getElementById("message3").innerHTML = "*Password length must be atleast 6 characters*";
      return false;
    } 
    if(password1 != password2) {  
      document.getElementById("message4").innerHTML = "*Passwords do not match*";
      return false;
    }  else {
      alert ("Your account has been created successfully!");
    }

    sessionStorage.setItem("username_key", username);
    sessionStorage.setItem("email_key", email);
    sessionStorage.setItem("password_key", password1); 
}  
function removeErrorMessage(){
  document.getElementById("message1").innerHTML= "";
  document.getElementById("message2").innerHTML= "";
  document.getElementById("message3").innerHTML= "";
  document.getElementById("message4").innerHTML= "";
  }
