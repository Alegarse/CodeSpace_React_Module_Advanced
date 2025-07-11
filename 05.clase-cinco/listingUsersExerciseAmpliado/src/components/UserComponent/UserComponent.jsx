import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../core/services/usersFetch';
import { loadUsers, selectUser } from './UserComponentActions';

const UserComponent = () => {
  const dispatch = useDispatch();

  const { users, userSelected } = useSelector(
    (state) => state.userComponentReducer
  );
  const mobiles = useSelector((state) => state.mobilesComponentReducer.mobiles);

  const load = () => {
    const aux = getAllUsers();
    dispatch(loadUsers({ users: aux }));
  };

  const selectUserHandler = (user) => {
    dispatch(selectUser(user));
  };

  const resetUserSelected = () => {
    dispatch(selectUser(undefined));
  };

  const getMobileNameById = (idMobile) => {
    const aux = mobiles.find((m) => m.id === idMobile);
    if (aux) {
      return `tiene el movil ${aux.brand} ${aux.model}`;
    } else {
      return 'no dispone de movil';
    }
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <div
      style={{
        border: '1px solid orange',
        borderRadius: '15px',
        padding: '20px',
      }}
    >
      {!users ? (
        <div>Cargando datos ...</div>
      ) : users.length <= 0 ? (
        <div>No hya usuarios</div>
      ) : (
        users.map((u, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              gap: '50px',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '5px',
            }}
          >
            <span>
              {u.username} {u.password}
            </span>
            <button
              onClick={() => {
                selectUserHandler(u);
              }}
            >
              Select
            </button>
          </div>
        ))
      )}
      <hr />
      {!userSelected ? (
        <div>No se ha seleccionado un usuario</div>
      ) : (
        <div
          style={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>
            El usuario {userSelected.username} {getMobileNameById(userSelected.mobile)}
          </span>
          <button onClick={resetUserSelected}>Clear selected</button>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
