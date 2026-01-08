import { createSlice } from "@reduxjs/toolkit";
import { clearPost, clearPosts } from "./postSlice";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("auth/logout", (state, action) => {
      // handled by reducers above
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
