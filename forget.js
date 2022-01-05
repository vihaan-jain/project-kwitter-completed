function send_code()
{
    email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    window.location = "done.html";
      
    if(email == ""){
        window.alert("Please type your Email");
        window.location = "forgetpassword.html";
    }
}

function logout_done()
{
    window.location = "index.html";
}