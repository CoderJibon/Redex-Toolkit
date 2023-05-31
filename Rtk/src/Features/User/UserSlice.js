import { createSlice } from "@reduxjs/toolkit";
import { createNewUser, deleteUser, getAllData } from "./UserApi.js";

// user slice
export const UserSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, { type, payload }) => {
        state.users = payload;
      })
      .addCase(deleteUser.fulfilled, (state, { type, payload }) => {
        state.users = state.users.filter((user) => user._id !== payload);
      })
      .addCase(createNewUser.fulfilled, (state, { type, payload }) => {
        state.users.push(payload);
      });
  },
});

//user selections
export const getAllUser = (state) => state.user;

//user actions
export const {} = UserSlice.actions;

//export reducer
export default UserSlice.reducer;
