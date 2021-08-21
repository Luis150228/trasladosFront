import * as API from "./js/login-provider.js";
// import "./assets/css/signin.css";

const frmLogin = document.querySelector("#frmLogin");
const btnSubmit = document.querySelector("#btnLogin");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let datosForm = new FormData(frmLogin);

  API.logIn({
    username: datosForm.get("usarname"),
    pass: datosForm.get("pass"),
  }).then(console.log);
});
