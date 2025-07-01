import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMobiles } from '../../core/services/MobilesFetch';
import { loadMobiles, selectMobile } from './MobileComponentActions';

const MobileComponent = () => {
  const dispatch = useDispatch();

  const { mobiles, mobileSelected } = useSelector(
    (state) => state.mobilesComponentReducer
  );

  const load = () => {
    const aux = getAllMobiles();
    dispatch(loadMobiles({mobiles: aux}));
  };

  const selectMobileHandler = (mobile) => {
    dispatch(selectMobile(mobile));
  };

  const resetMobileSelected = () => {
    dispatch(selectMobile(undefined));
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
        marginBottom: '30px',
      }}
    >
      {!mobiles ? (
        <div>Cargando datos...</div>
      ) : mobiles.length <= 0 ? (
        <div>No hay elementos</div>
      ) : (
        mobiles.map((m, idx) => (
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
              {m.brand} {m.model} {m.year}
            </span>
            <button onClick={() => selectMobileHandler(m)}>Select</button>
          </div>
        ))
      )}
      <hr />
      {!mobileSelected ? (
        <div>No hay movil seleccionado</div>
      ) : (
        <div
          style={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {JSON.stringify(mobileSelected)}
          <button onClick={resetMobileSelected}>Clear selected</button>
        </div>
      )}
    </div>
  );
};

export default MobileComponent;
