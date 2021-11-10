
//ADD YOUR FIREBASE LINKS HERE
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
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names="+Room_names);
row='<div class="room_name" id="'+Room_names+'" onclick="redirectToRoomname(this.id)">#'+Room_names+'</div><hr>';
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom(){
room_name=document.getElementById("room_name").value;
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function redirectToRoomname(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}