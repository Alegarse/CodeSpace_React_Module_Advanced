import { combineReducers } from 'redux';
import mobilesComponentReducer from '../../../components/MobileComponent/MobilecomponentReducer';
import userComponentReducer from '../../../components/UserComponent/UserComponentReducer';

const reducer = combineReducers({
  mobilesComponentReducer,
  userComponentReducer,
});

export default reducer;
