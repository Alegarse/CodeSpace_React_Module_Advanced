import React, { useContext, useState } from "react";
import Context from "../core/context/Context";

const LoginComponent = () => {
  const [userToLog, setUserToLog] = useState(undefined);
  const { loginUser, setState, goToRegister, users } = useContext(Context);

  const loginHandler = (propName, propValue) => {
    setUserToLog({
      ...userToLog,
      [propName]: propValue,
    });
  };

  const logingUser = () => {
    const userLogged = users.find((u) => u.username === userToLog.username && u.password === userToLog.password);
    if (userLogged) {
      loginUser(userLogged);
      setState("INFO");
    }
  };

  return (
    <div className="first-container">
      <h3>Logeo de usuario</h3>
      <div className="input-container">
        <span>Username</span>
        <input
          type="text"
          onChange={(p) => loginHandler("username", p.target.value)}
        />
      </div>
      <div className="input-container">
        <span>Password</span>
        <input
          type="text"
          onChange={(p) => loginHandler("password", p.target.value)}
        />
      </div>
      <div className="buttons-container">
        <button className="btn-login" onClick={logingUser}>
          Iniciar sesion
        </button>
        <button onClick={goToRegister}>Registrar nuevo usuario</button>
      </div>
    </div>
  );
};

export default LoginComponent;
