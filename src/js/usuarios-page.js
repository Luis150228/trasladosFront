import { obtenerUsuarios } from './http-provider.js';

const body = document.body;
let tbody;
let correlativo = 0;

const crearHtml = () => {
  const html = `
    <h1 class="mt-5"> Usuarios</h1>
    <hr>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Usuario</th>
                <th scope="col">Nombre</th>
                <th scope="col">Area</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

  const div = document.createElement('div');
  div.innerHTML = html;
  body.appendChild(div);
  tbody = document.querySelector('tbody');
};

const crearFilaUsuario = (usuario) => {
  correlativo++;

  const html = `
        <td scope="col"> ${correlativo}. </td>
        <td scope="col"> ${usuario.username} </td>
        <td scope="col"> ${usuario.name} </td>
        <td scope="col"> ${usuario.user_level} </td>
        </td>
    `;

  const tr = document.createElement('tr');
  tr.innerHTML = html;
  tbody.appendChild(tr);
};

export const init = async () => {
  await crearHtml();

  correlativo = 0;

  (await obtenerUsuarios()).forEach(crearFilaUsuario);
};
