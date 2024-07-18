import { saveUser } from "./modules/saveUser.js";

let valideName = "";
let valideEmail = "";
let validePassword = "";
let valideSecondPassword = "";
const user = {};

document.getElementById("name").addEventListener("focusout", () => {
  let name = document.getElementById("name").value;
  console.log(name);
  valideName = namevalidator(name);
  return valideName;
});

document.getElementById("email").addEventListener("focusout", () => {
  let email = document.getElementById("email").value;
  emailvalidator(email);
  valideEmail = namevalidator(email);
  return valideEmail;
});

document.getElementById("password").addEventListener("blur", () => {
  let password = document.getElementById("password").value;
  validePassword = passwordValidator(password);
  return validePassword;
});

document.getElementById("verifiedPassword").addEventListener("focusout", () => {
  let secondpassword = document.getElementById("verifiedPassword").value;
  valideSecondPassword = passwordValidator(secondpassword);
  return valideSecondPassword;
});

document.getElementById("submit").addEventListener("click", (event) => {
  if (validePassword !== valideSecondPassword ) {
    console.log("KO");
    document.getElementById("secondPasswordfail").hidden = false;
    event.preventDefault();
  } 
  
  if (valideName == false || valideEmail == false || validePassword == false){
   event.preventDefault(); 
  } else {
    console.log("OK");
    document.getElementById("secondPasswordfail").hidden = true;
    user.name = valideName;
    user.mail = valideEmail;
    user.password = validePassword;
    saveUser(user);
    document.getElementById("userSave").textContent = "User saved";
  }
});

function namevalidator(name) {
  const pattern = /(.*[a-z]){3}/i;
  if (name.match(pattern)) {
    console.log("OK");
    document.getElementById("namefail").hidden = true;
    return name;
  } else {
    console.log("KO");
    document.getElementById("namefail").hidden = false;
    return false;
  }
}

function emailvalidator(email) {
  const pattern =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (email.match(pattern)) {
    console.log("OK");
    document.getElementById("mailfail").hidden = true;
    return email;
  } else {
    console.log("KO");
    document.getElementById("mailfail").hidden = false;
    return false;
  }
}

function passwordValidator(password) {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
  //changer de Regex après test:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
  if (password.match(pattern)) {
    console.log("OK");
    document.getElementById("passwordfail").hidden = true;
    return password;
  } else {
    console.log("KO");
    document.getElementById("passwordfail").hidden = false;
    return false;
  }
}
