function validation(){
    var x = document.getElementById("v1").value;
    var y = document.getElementById("v2").value;
    var inputemail = document.getElementById("v3").value.toString();
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;
    if(x == ""){
        document.getElementById("v6").innerHTML = "First Name Required!";
    }else{
        document.getElementById("v6").innerHTML = "";
    }
    
    if(y == ""){
        document.getElementById("v5").innerHTML = "Second Name Required!";
    }else{
        document.getElementById("v5").innerHTML = "";
    }
    
    if(inputemail == ""){
        document.getElementById("v4").innerHTML = "Enter Email Address!";
    }else if(!validateEmail(inputemail)){
        document.getElementById("v4").innerHTML = "Enter Valid Email Address!";
    }else{
        document.getElementById("v4").innerHTML = "";
    }
    
    if(pass1 == ""){
        document.getElementById("password12").innerHTML = "Enter Password!";
    }else{
        document.getElementById("password12").innerHTML = "";
    }
    
    if(pass2 == ""){
        document.getElementById("password13").innerHTML = "Re-Enter Password!";
    }else if(pass1 != pass2){
        document.getElementById("password13").innerHTML = "Password Not Match!";
    }else{
        document.getElementById("password13").innerHTML = "Password Match!";
    }
    
  
}

function validateEmail(v3) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(v3).toLowerCase());
}
