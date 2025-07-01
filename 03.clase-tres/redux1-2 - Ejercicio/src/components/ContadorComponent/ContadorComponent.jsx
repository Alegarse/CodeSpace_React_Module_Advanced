import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
  modifyAuthor,
  modifyName,
  multiplyCount,
} from "./ContadorComponentActions";

const ContadorComponent = () => {
  //   const [count, setCount] = useState(0)
  const [name, setName] = useState(undefined);
  const [author, setAuthor] = useState(undefined);

  const dispatch = useDispatch();

  // useSelector es un hook que me permite traerme el estado que necesite de redux
  const count = useSelector((state) => state.contadorComponentReducer.count);
  const countName = useSelector(
    (state) => state.contadorComponentReducer.countName
  );
  const authorName = useSelector((state) => state.contadorComponentReducer.authorName)
  /* 
    Acciones: 
        INCREMENT => Va a incrementar en uno el contador
        DECREMENT => Va a decrementar en uno el contador
  */

  const lanzarAccionIncrement = () => {
    dispatch(incrementCount(count + 1));
  };

  const lanzarDecrement = () => {
    dispatch(decrementCount(count - 1));
  };

  const lanzarMultx2 = () => {
    dispatch(multiplyCount(count === 0 ? 1 : count * 2))
  }

  const lanzarCambioDeNombre = () => {
    dispatch(modifyName(name));
  };

  const lanzarCambioDeAutor = () => {
    dispatch(modifyAuthor(author));
  };

  return (
    <div>
      <h1>Esto está realizado por {authorName}</h1>
      <hr />
      <h1>
        {countName} is {count}
      </h1>
      <button onClick={lanzarAccionIncrement}>Incrementar</button>
      <button onClick={lanzarDecrement}>Decrementar</button>
      <button onClick={lanzarMultx2}>Multiplicar por 2</button>
      <hr />
      <div>
        <span>Nombre contador: </span>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={lanzarCambioDeNombre}>Guardar Nombre</button>
      </div>
      <div>
        <span>Introduzca autor: </span>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} />
        <button onClick={lanzarCambioDeAutor}>Guardar autor</button>
      </div>
    </div>
  );
};

export default ContadorComponent;
