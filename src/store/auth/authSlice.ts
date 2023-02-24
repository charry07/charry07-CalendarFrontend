import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'no-authenticated', // 'checking' , 'authenticated'
    user: {},
    errorMessage: null,
  },
  reducers: {
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = null;
    },
    onLogout: (state) => {
      state.status = 'no-authenticated';
      state.user = {};
      state.errorMessage = null;
    },
    onCheckingCredentials: (state) => {
      state.status = 'checking';
      state.user = {};
      state.errorMessage = null;
    },
    onErrorAuth: (state, { payload }) => {
      state.status = 'no-authenticated';
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    }
  },
});

export const { onLogin, onLogout, onCheckingCredentials , onErrorAuth , clearErrorMessage } = authSlice.actions;
