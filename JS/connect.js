const storedUserData = localStorage.getItem("users");
console.log(storedUserData);
const usersData = JSON.parse(storedUserData);
console.log(usersData);

let storedEmail = "";
let storedPassword = "";
let enteredEmail = "";
let enteredPassword = "";

document.getElementById("email").addEventListener("focusout", () => {
  let enteredEmail = document.getElementById("email").value;
  return enteredEmail;
});

document.getElementById("password").addEventListener("blur", () => {
  let enteredPassword = document.getElementById("password").value;
  return enteredPassword;
});

/* essayer avec Array.prototype.find()??? */

document.getElementById("submit").addEventListener("click", (event) => {
  for (let i = 0; i < usersData.length; i++) {
    let matchEmail = usersData[i].mail;
    let matchPassword = usersData[i].password;
    console.log(matchEmail);
    console.log(matchPassword);
    if (matchEmail == enteredEmail && matchPassword == enteredPassword) {
      console.log("you are conected");
      let storedname = localStorage.getItem("name");
      document.getElementById("datatrue").innerText =
        "Bonjour" && storedname && "!!!";
    } else {
      event.preventDefault();
      console.log("echec");
      document.getElementById("datafalse").innerText =
        "identifiants incorrects";
    }
  }
});
