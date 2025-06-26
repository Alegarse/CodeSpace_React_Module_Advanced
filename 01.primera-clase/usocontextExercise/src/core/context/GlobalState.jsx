import React, { useState } from "react";
import Context from "./Context";

const GlobalState = ({ children }) => {

  const [users, setUsers] = useState([]);
  const [state, setState] = useState("REG");
  const [userLogged, setUserLogged] = useState(undefined)

  const addUser = (newUser) => {
    const aux = [...users];
    aux.push(newUser);
    setUsers(aux);
  };

  const loginUser = (userLogged) => {
      setUserLogged(userLogged)
  };

  const goToLogin = () => {
    setState("LOGIN")
  }

  const goToRegister = () => {
    setState("REG")
  }

  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        addUser,
        state,
        setState,
        loginUser,
        userLogged,
        setUserLogged,
        goToLogin,
        goToRegister
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalState;
