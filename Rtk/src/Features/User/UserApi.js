import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// get all users
export const getAllData = createAsyncThunk("user/getAllData", async () => {
  const response = await axios.get("http://localhost:5050/api/v1/user");
  return response.data;
});

//delete user
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  const response = await axios.delete(
    `http://localhost:5050/api/v1/user/${id}`
  );
  return id;
});

//create user
export const createNewUser = createAsyncThunk(
  "user/createNewUser",
  async (data) => {
    const response = await axios.post(
      "http://localhost:5050/api/v1/user/register",
      data
    );
    return response.data.user;
  }
);
