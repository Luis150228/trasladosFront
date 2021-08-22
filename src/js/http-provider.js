const urlCRUD = "http://localhost:3001/api";

const obtenerUsuarios = async () => {
  const resp = await fetch(`${urlCRUD}/auth/listUser`);
  const data = await resp.json();

  console.log(data);
  return data;
};

const obtenerTraslados = async () => {
  try {
    const resp = await fetch(`${urlCRUD}/traslados`);

    if (!resp.ok) throw "Conexion perdida a la base";
    const data = await resp.json();

    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};

export { obtenerUsuarios, obtenerTraslados };
