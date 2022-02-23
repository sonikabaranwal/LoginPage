let users = [
  {
    email: "sonika@gmail.com",
    phone: "9876543210",
    password: "so1234",
  },
  {
    email: "shubham@gmail.com",
    phone: "9999999999",
    password: "sh0308",
  },
  {
    email: "vibha@gmail.com",
    phone: "9898989898",
    password: "vb1601",
  },
  {
    email: "satyam@gmail.com",
    phone: "8877665544",
    password: "sat1105",
  },
  {
    email: "shiva@gmail.com",
    phone: "9999933333",
    password: "shiv3399",
  },
];

const form = document.getElementById("form");
const unerror = document.getElementById("unerror");
const pwderror = document.getElementById("pwderror");
const errormsg = document.getElementById("errormsg");
const un = document.getElementById("username");
const pwd = document.getElementById("password");
form.addEventListener("submit", (event) => {
  event.preventDefault();
    if (un.value == "") {
    unerror.innerText = "Username cannot be empty!";
  } else if (un.value.length < 10) {
    unerror.innerText = "Enter atleast 10 characters!";
  } else if (validate()) {
    errormsg.style.display = "block";
    errormsg.innerText = "Login Successful!!";
    errormsg.style.color = "green";
  } else {
    errormsg.style.display = "block";
    errormsg.innerText = "Incorrect username or password!!";
    errormsg.style.color = "red";
  }
});

function validate() {
  const username = un.value;
  const password = pwd.value;

  for (let i = 0; i < users.length; i++) {
    if (
      (username == users[i].email || username == users[i].phone) &&
      password == users[i].password
    ) {
      return true;
    }
  }
  return false;
}
