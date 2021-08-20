import * as API from './js/crud-provider.js';

const frmLogin = document.querySelector('#frmLogin');
const btnSubmit = document.querySelector('#btnLogin');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  let datosForm = new FormData(frmLogin);

  console.log({
    usuario: datosForm.get('usarname'),
    password: datosForm.get('pass'),
  });
});
