export const LOAD_MOBILES = 'LOAD_MOBILES';
export const SELECT_MOBILE = 'SELECT_MOBILE';

export const loadMobiles = (payload) => {
  return {
    type: LOAD_MOBILES,
    payload
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
