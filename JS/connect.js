const storedUserData = localStorage.getItem("users");
console.log(storedUserData);
const usersData = JSON.parse(storedUserData);
console.log(usersData);

let storedEmail = "";
let storedPassword = "";
let enteredEmail = "";
let enteredPassword = "";

document.getElementById("email").addEventListener("focusout", () => {
  enteredEmail = document.getElementById("email").value;
});

document.getElementById("password").addEventListener("blur", () => {
  enteredPassword = document.getElementById("password").value;
});

/* essayer avec Array.prototype.find()??? */

document.getElementById("submit").addEventListener("click", (event) => {
  for (let i = 0; i < usersData.length; i++) {
    let matchEmail = usersData[i].mail;
    let matchPassword = usersData[i].password;
    
    if (matchEmail == enteredEmail && matchPassword == enteredPassword) {
      console.log("you are conected");
      let storedname = usersData[i].name
      document.getElementById("datatrue").innerText = "Bonjour " + storedname + " !!!";
      document.getElementById("datafalse").innerText = ""
      return
    } else {
      event.preventDefault();
      console.log("echec");
      document.getElementById("datafalse").innerText = "identifiants incorrects";
      document.getElementById("datatrue").innerText =""
    }
  }
});
