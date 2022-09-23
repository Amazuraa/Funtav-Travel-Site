import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from '../slice/LoginSlice';

export const store = configureStore({
     reducer: {
          loginReducer: LoginSlice,
     }
})