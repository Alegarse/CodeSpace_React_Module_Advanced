export const LOAD_MOBILES = 'LOAD_MOBILES';
export const SELECT_MOBILE = 'SELECT_MOBILE';

export const loadMobiles = (mobiles) => {
  return {
    type: LOAD_MOBILES,
    payload: {
      mobiles,
    },
  };
};

export const selectMobile = (mobile) => {
  return {
    type: SELECT_MOBILE,
    payload: {
      mobile,
    },
  };
};
