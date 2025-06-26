import React, { useContext, useState } from "react";
import Context from "../core/context/Context";

const RegisterComponent = () => {
  const [newUser, setNewUser] = useState(undefined);

  const newUserHandler = (propName, propValue) => {
    setNewUser({
      ...newUser,
      [propName]: propValue,
    });
  };

  const { addUser, setState, goToLogin } = useContext(Context);

  const registerUser = () => {
    addUser(newUser);
    setState("LOGIN");
  };

  return (
    <div className="first-container">
      <h3>Registro de usuario</h3>
      <div className="input-container">
        <span>Username</span>
        <input
          type="text"
          onChange={(p) => newUserHandler("username", p.target.value)}
        />
      </div>
      <div className="input-container">
        <span>Password</span>
        <input
          type="text"
          onChange={(p) => newUserHandler("password", p.target.value)}
        />
      </div>
      <div className="input-container">
        <span>Email</span>
        <input
          type="text"
          onChange={(p) => newUserHandler("email", p.target.value)}
        />
      </div>
      <div className="input-container">
        <span>Nombre</span>
        <input
          type="text"
          onChange={(p) => newUserHandler("nombre", p.target.value)}
        />
      </div>
      <div className="buttons-container">
        <button className="btn-register" onClick={registerUser}>Registrar Usuario</button>
        <button onClick={goToLogin}>Ir a Login de usuario</button>
      </div>
    </div>
  );
};

export default RegisterComponent;
