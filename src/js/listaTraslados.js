import { obtenerTraslados } from "./http-provider.js";

const divTabla = document.getElementById("cardContent");
let tbody;

const crearHtml = () => {
  const html = `
  <div class="card-body card-dashboard">
    <div class="table-responsive">
      <table
        class="table table-striped table-bordered dynamic-height">
        <thead>
          <tr>
            <th>Nota</th>
            <th>Escritura</th>
            <th>Area</th>
            <th>Enajenante</th>
            <th>Adquiriente</th>
            <th>Estatus</th>
          </tr>
        </thead>
        <tbody id="listTraslados">                
        </tfoot>
      </table>
    </div>
  </div>
  `;

  const div = document.createElement("div");
  div.innerHTML = html;
  divTabla.appendChild(div);

  tbody = document.querySelector("#listTraslados");
};

const crearFila = (informacion) => {
  const html = `
        <td> ${informacion.folio} </td>
        <td> ${informacion.num_escr} </td>
        <td> ${informacion.area} </td>
        <td> ${informacion.enajenante} </td>
        <td> ${informacion.adquiriente} </td>
        <td> ${informacion.status_traslado} </td>
    `;

  const tr = document.createElement("tr");
  tr.innerHTML = html;
  tbody.appendChild(tr);
};

export const init = async () => {
  crearHtml();

  // const informacion = await obtenerTraslados();
  // informacion.forEach(crearFila);
};
