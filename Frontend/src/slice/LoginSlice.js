import { createSlice } from '@reduxjs/toolkit';

// Starting Values..
const initialState = {
     value: 0,
     login: false,
     user: 0,
     privilege: false,
}

export const LoginSlice = createSlice({
     name: 'login',
     initialState,
     reducers: {
          increment: (state) => { 
               state.value += 1; 
          },
          loginSuccess: (state, action) => {
               state.login = true;
               state.user = action.payload;
               // state.privilege = x;
          },
          loginPrivilege: (state, action) => {
               state.privilege = action.payload;
          },
          logout: (state) => {
               state.login = false;
               state.user = 0;
               state.privilege = false;
          },
     }
})

export const { increment, loginSuccess, loginPrivilege, logout } = LoginSlice.actions

export default LoginSlice.reducer