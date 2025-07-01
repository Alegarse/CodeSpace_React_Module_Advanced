import { LOAD_MOBILES, SELECT_MOBILE } from "./MobileComponentActions";

const initialState = {
  mobiles: undefined,
  mobileSelected: undefined
};

const mobilesComponentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_MOBILES:
      return {
        ...state,
        mobiles: payload.mobiles,
      };
      case SELECT_MOBILE:
        return {
            ...state,
            mobileSelected: payload.mobile
        }
    default:
      return state;
  }
};

export default mobilesComponentReducer;
