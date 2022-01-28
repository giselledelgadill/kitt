//YOUR FIREBASE LINKS
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
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("username");
room_name=localStorage.getItem("room_name");
function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
message:msg,
like:0
  });
}
  // Initialize Firebase
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h3>"+name+"<img class='user_tick'src='tick.png'></h3> ";
message_tag="<h3 class='messge_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like- "+like+"</span></button>";
role=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=role;
//End code
 } });  }); }
getData();