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
    room_name = localStorage.getItem("room_name");
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
});

      document.getElementById("msg").value = "";
}