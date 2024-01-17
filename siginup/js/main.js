function add() {
  var signUpName = document.getElementById("signName");
  var signUpEmail = document.getElementById("signEmail");
  var signUpPassword = document.getElementById("signPassword");

  var nameRegex = /^[A-Z][a-zA-Z]*(?:-[A-Z][a-zA-Z]*)?$/;
  var emailRegex = /^(?=.*@(gmail|yahoo|hotmail)\.(com|net|org)$).*$/;
  var passwordRegex = /^(?=.*[@*#]).{15,}$/;

  if (!nameRegex.test(signUpName.value)) {
    document.getElementById(
      "userNameError"
    ).innerHTML = `<div class="alert alert-danger p-1 ">Please enter a valid name</div>`;
    return;
  } else {
    document.getElementById("userNameError").innerHTML = "";
  }

  if (!emailRegex.test(signUpEmail.value)) {
    document.getElementById(
      "emailError"
    ).innerHTML = `<div class="alert alert-danger p-1 ">Please enter a valid email </div>`;
    return;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  if (!passwordRegex.test(signUpPassword.value)) {
    document.getElementById(
      "passwordError"
    ).innerHTML = `<div class="alert alert-danger p-1 ">Please enter a valid Password</div>`;
    return;
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }

  var user = JSON.parse(localStorage.getItem("user")) || [];
  var obj = {
    name: signUpName.value,
    email: signUpEmail.value,
    password: signUpPassword.value,
  };
  user.push(obj);
  localStorage.setItem("user", JSON.stringify(user));
  location.href = "../index.html";
}
