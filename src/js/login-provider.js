const urlCRUD = "http://localhost:3001/api/auth";

const logIn = async (usr) => {
  const resp = await fetch(`${urlCRUD}/signin`, {
    method: "POST",
    body: JSON.stringify(usr),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //   console.log(await resp.json());

  //   return await resp.json();

  const { menssage, token } = await resp.json();
  sessionStorage.setItem("usrtoken", `${token}`);
  token
    ? window.location.replace("./app.html")
    : window.location.replace("./index.html");
  //
  return menssage;
};

const logOut = () => {
  sessionStorage.removeItem("usrtoken");
  window.location.replace("./index.html");
};

export { logIn, logOut };
