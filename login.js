function clicked() {

  var user = document.getElementById('username');
  var pass = document.getElementById('password');

  var coruser = "test";
  var corpass = "1234";

    if(user.value == coruser) {

      if(pass.value == corpass) {

        window.alert("Success! You are logged in as" + user.value);

      } else {

              window.alert("Fail! Incorrect username or password!");

      } else {

              window.alert("Fail! Incorrect username or password!");

    }





}
