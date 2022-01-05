function adduser()
{
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("password", password);
    window.location = "kwitter_room.html";

    if(user_name == ""){
        window.alert("Please put your username");
        window.location = "index.html";
    }

    if(password == ""){
        window.alert("Please put your password");
        window.location = "index.html";
    }
}

function switchpage()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "forgetpassword.html";
    if(user_name == ""){
        window.alert("Please put your username");
        window.location = "index.html";
    }
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.keyCode;
    if(keypressed == "13"){
        user_name = document.getElementById("user_name").value;
        password = document.getElementById("password").value;
        localStorage.setItem("user_name", user_name);
        localStorage.setItem("password", password);
        window.location = "kwitter_room.html";
    
        if(user_name == ""){
            window.alert("Please put your username");
            window.location = "index.html";
        }
    
        if(password == ""){
            window.alert("Please put your password");
            window.location = "index.html";
        }
    }
}
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function term()
  {
      window.location = "terms.html";
  }

  function tc()
  {
      window.location = "index.html";
  }