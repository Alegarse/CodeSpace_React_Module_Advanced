import { LOAD_USERS, SELECT_USER } from "./UserComponentActions";

const initialState = {
  users: undefined,
  userSelected: undefined,
};

const userComponentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USERS:
      return {
        ...state,
        users: payload.users,
      };
    case SELECT_USER:
      return {
        ...state,
        userSelected: payload.user,
      };
    default:
      return state;
  }
};

export default userComponentReducer
