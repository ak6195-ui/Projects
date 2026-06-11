let email="abhi@gmail.com"
let name="ABI KHADKA "   
   function login() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var age = document.getElementById("age").value;
      var education=document.getElementById("education").value;


      if (name != "ABI KHADKA") {
        document.getElementById("errorMsg").innerHTML = "Please again enter your name.";
      } else if (email!="abhi@gmail.com") {
        document.getElementById("errorMsg").innerHTML = "SORRY !!!";
      } else {
        document.getElementById("showName").innerHTML = name;
        document.getElementById("showEmail").innerHTML = email;
        document.getElementById("showAge").innerHTML=age;
        document.getElementById("showeducation").innerHTML=education;
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("profilePage").style.display = "block";
      }
    }

    function logout() {
      document.getElementById("loginPage").style.display = "block";
      document.getElementById("profilePage").style.display = "none";
    }