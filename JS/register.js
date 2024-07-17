document.getElementById("name").addEventListener("focusout", () => {
  let name = document.getElementById("name").value;
  console.log(name);
  let valideName = namevalidator(name)
  console.log(valideName)
});

document.getElementById("email").addEventListener("focusout", () => {
  let email = document.getElementById("email").value;
  emailvalidator(email);
  let valideEmail = namevalidator(email);
  console.log(valideEmail);
});


document.getElementById("password").addEventListener("blur", () => {
  let password = document.getElementById("password").value;
  console.log("Listener", password);
  let validePassword = passwordValidator(password);
  console.log(validePassword)    
});

document.getElementById("verifiedPassword").addEventListener("focusout", () => {
  let secondpassword = document.getElementById("verifiedPassword").value;
  let valideSecondPassword = passwordValidator(secondpassword);
  console.log(valideSecondPassword);
});

if (validePassword !== valideSecondPassword) {
  console.log("KO");
  document.getElementById("secondPasswordfail").hidden = false;
} else {
  document.getElementById("secondPasswordfail").hidden = true;
}


function namevalidator(name) {
  console.log(name);
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
  console.log(email)
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
  console.log("passwordValidator", password);

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

