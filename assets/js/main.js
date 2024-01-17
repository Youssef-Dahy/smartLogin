var user = [];
user = JSON.parse(localStorage.getItem("user"));

var singInEmail = document.getElementById("signEmail");
var signInPassword = document.getElementById("signPassword");

document.getElementById("login").addEventListener("click", function () {
  if (singInEmail.value == "" || signInPassword.value == "") {
    document.getElementById(
      "message"
    ).innerHTML = `<div class="alert alert-danger p-1 ">
    All inputs is Required
  </div>`;
  } else {
    checkUser();
  }
});

function checkUser() {
  var emailRegex = /^(?=.*@(gmail|yahoo|hotmail)\.(com|net|org)$).*$/;
  var passwordRegex = /^(?=.*[@*#]).{15,}$/;

  if (!emailRegex.test(singInEmail.value)) {
    document.getElementById(
      "wrongPasswordorEmail"
    ).innerHTML = `<div class="alert alert-danger p-1 ">
      Incorrect email format
    </div>`;
    return;
  }

  if (!passwordRegex.test(signInPassword.value)) {
    document.getElementById(
      "wrongPasswordorEmail"
    ).innerHTML = `<div class="alert alert-danger p-1 ">
      Incorrect password format
    </div>`;
    return;
  }

  // Check if the email and password match signup data
  for (var i = 0; i < user.length; i++) {
    if (
      singInEmail.value === user[i].email &&
      signInPassword.value === user[i].password
    ) {
      var y = user[i].name;
      localStorage.setItem("userName", y);
      location.href = "../../home/index.html";
      return;
    }
  }

  document.getElementById(
    "wrongPasswordorEmail"
  ).innerHTML = `<div class="alert alert-danger p-1 ">
    Incorrect email or password
  </div>`;
}
