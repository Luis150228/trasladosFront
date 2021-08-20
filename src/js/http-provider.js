const urlCRUD = 'http://localhost:3002/api/auth/listUser';

const obtenerUsuarios = async () => {
  const resp = await fetch(urlCRUD);
  const data = await resp.json();

  console.log(data);
  return data;
};

export { obtenerUsuarios };
