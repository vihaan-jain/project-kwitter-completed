const firebaseConfig = {
    apiKey: "AIzaSyDOOuPPSK8doL8yZcGO9DlCqmVHvaUdQss",
    authDomain: "project-kwitter-de54e.firebaseapp.com",
    databaseURL: "https://project-kwitter-de54e-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-de54e",
    storageBucket: "project-kwitter-de54e.appspot.com",
    messagingSenderId: "1015998641077",
    appId: "1:1015998641077:web:75d935093770e8e8181ffc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("welcome").innerHTML = "Welcome " + user_name + " ! ";

  function add_room()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding user"
    });
    localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout()
{
    window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("roomname-" + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick = 'redirect_to_room_name(this.id)'>#"+Room_names+"</div><hr>"
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirect_to_room_name(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}