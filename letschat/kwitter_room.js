var firebaseConfig = {
      apiKey: "AIzaSyDN3MJY4OBd3O-DjN6cQspz0DUZIqhDCX0",
      authDomain: "kwitter-2c569.firebaseapp.com",
      databaseURL: "https://kwitter-2c569-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c569",
      storageBucket: "kwitter-2c569.appspot.com",
      messagingSenderId: "208975818841",
      appId: "1:208975818841:web:0a51e6c1ec3a23e601c148"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
     
 function addRoom()
 { 
    room_name = document.getElementById("room_name").ariaValueMax;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    window.location = "kwitter_page.html";
    
 }

 function redirectToRoomName(name)
 {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
 }

 function logout()
 {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
 }