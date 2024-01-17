function validateform() {
  var username = document.getElementById("username").value;
  var password1 = document.getElementById("password1").value;

  if(username == "") {  
    document.getElementById("message1").innerHTML = "*Kindly fill your username*";  

  } 
  if(password1 == "") {  
    document.getElementById("message3").innerHTML = "*Fill the password please!*";  
    return false;  
  } 
  if(password1.length < 6) {  
    document.getElementById("message3").innerHTML = "*Password length must be atleast 6 characters*";  
    return false;  
  }
    // to get the data

    var getuser = sessionStorage.getItem("username_key");
    var getpassword = sessionStorage.getItem("password_key");
    
    if (username === getuser && password1 === getpassword) {
        alert ("Login successful");
        document.write("You are now logged in.");
      } else {
      alert("Invalid data, Please input correct data.");
    }
  }
  function removeErrorMessage() {
    document.getElementById("message1").innerHTML= "";
    document.getElementById("message3").innerHTML= "";
    }
