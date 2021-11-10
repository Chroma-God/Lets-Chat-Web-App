//YOUR FIREBASE LINKS
// Your web app's Firebase configuration

var firebaseConfig = {
      apiKey: "AIzaSyBGXhJCqNcn8bWvoqiLlQERhDCcfyA_BSg",
      authDomain: "kwitter-4db6f.firebaseapp.com",
      databaseURL: "https://kwitter-4db6f-default-rtdb.firebaseio.com",
      projectId: "kwitter-4db6f",
      storageBucket: "kwitter-4db6f.appspot.com",
      messagingSenderId: "955799762780",
      appId: "1:955799762780:web:e816b64cb91dac60e87399"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function send() {
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}