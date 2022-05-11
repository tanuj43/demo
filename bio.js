//most imotent part of nav baar//
function navbarbtn() {//yaha pe nav baar function defin kiya jo onclick pe lgya tha//
  var x = document.querySelector(".list");//yaha query selector ki help se list class ko call kiya ///
   var y=document.querySelector(".paradata")//fir yaha pe parada class ko call kiya jo hmare web page ka 1st element h
                                                                          //or isi class m js ki help se style lgai or visibility ka use kiya jise nav bar hide ya open hota h//


  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.visibility="visible"
  }
  else {
    x.style.display = "block";
     y.style.visibility="hidden"//yaha div ka element hide ho gya nav open krne m//



  }
}

function btnA() {
  window.location.href = "https://www.youtube.com/"
}
function btnB() {
  window.location.href = "https://fontawesome.com/"
}
function btnC() {
  window.location.href = "https://www.w3schools.com/"
}

function validation() {
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;

  var namecheck = /^[A-Za-z. ]{3,30}$/
  var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
  var numbercheck = /^[789]{0-9}{9}$/
  var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,9}$/

  if (namecheck.test(name)) {
    document.getElementById("nameerror").innerHTML = "";
  }
  else {
    document.getElementById("nameerror").innerHTML = "**invalid name**";
    return false;
  }

  if (passwordcheck.test(password)) {
    document.getElementById("passworderror").innerHTML = "";
  }
  else {
    document.getElementById("passworderror").innerHTML = "**invalid password**";
    return false;
  }

  if (numbercheck.test(number)) {
    document.getElementById("numbererror").innerHTML = "";
  }
  else {
    document.getElementById("numbererror").innerHTML = "**invalid number**";
    return false;
  }

  if (emailcheck.test(email)) {
    document.getElementById("emailerror").innerHTML = "";
  }
  else {
    document.getElementById("emailerror").innerHTML = "**invalid email**";
    return false;
  }

}




  


