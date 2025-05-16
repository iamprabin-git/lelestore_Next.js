import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import userPreferenceReducer from './userPreference/userPreferenceSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    userPreference: userPreferenceReducer,

});
  export default rootReducer;