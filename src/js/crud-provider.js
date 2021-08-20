const urlCRUD = 'http://localhost:3003/api/auth';

const logIn = (usr, pass) => {
  console.log({
    usuario: usr,
    password: pass,
  });
};

const getUsuario = async (usuario) => {
  const resp = await fetch(`${urlCRUD}/${usuario}`);
  const data = await resp.json();
  return data;
};

const crearUsuario = async (usuario) => {
  const resp = await fetch(`${urlCRUD}/signup`, {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  //   return await resp.json();

  const { confirm } = await resp.json();
  alert(`Usuario ${confirm}`);
  return await confirm;
};

const actualizarUsuario = async (id, usuario) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(usuario),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await resp.json();
};

const borrarUsuario = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: 'DELETE',
  });

  return resp.ok ? 'Borrado' : 'No se pudo eliminar';
};

export { getUsuario, crearUsuario, actualizarUsuario, borrarUsuario, logIn };
