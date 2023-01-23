import { configureStore } from '@reduxjs/toolkit';
import signedReducer from '../features/signed/signedUserSlice';

export const store = configureStore({
  reducer: {
    signed: signedReducer,
  },
});
