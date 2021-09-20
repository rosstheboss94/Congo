import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  currentUser: "Sign-up/Login",
  isAuthenticated: false,
  loginModalState: false,
  loggingIn: false,
  signingUp: false
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    modalState: (state) => {
      state.loginModalState = !state.loginModalState;
    },
    login: (state, action) => {
      state.loggingIn = action.payload.loggingIn;
    },
    signup: (state, action) => {
      state.signingUp = action.payload.signingUp;
    },
    setUser: (state,action) => {
      state.currentUser = action.payload
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice;
