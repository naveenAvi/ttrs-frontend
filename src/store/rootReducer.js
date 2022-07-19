import { combineReducers } from '@reduxjs/toolkit';
import FairsStationReducer from "../Redux/Reducers/FairsStationReducer"
import TrainsReducer from '../Redux/Reducers/TrainsReducer'

const rootReducer = combineReducers({
  FairsStationReducer,
  TrainsReducer
});

export default rootReducer;
