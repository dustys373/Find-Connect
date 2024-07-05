// client/src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import missingPersonsReducer from './reducers/missingPersonsReducer';
import emergencyReducer from './reducers/emergencyReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    missingPersons: missingPersonsReducer,
    emergencies: emergencyReducer,
  },
});

export default store;