
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC5vYCnmgqtIKYFP4q-4CQlj_u8WQcUs5w",
      authDomain: "fake-twitter-f0734.firebaseapp.com",
      databaseURL: "https://fake-twitter-f0734-default-rtdb.firebaseio.com",
      projectId: "fake-twitter-f0734",
      storageBucket: "fake-twitter-f0734.appspot.com",
      messagingSenderId: "685099617149",
      appId: "1:685099617149:web:9c90acb549dda4cec69a14",
      measurementId: "G-F3C0ZX5S46"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="Hello "+user_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"add a roomname"
      });
      localStorage.setItem("roomname",room_name);
      window.location="kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html."
}