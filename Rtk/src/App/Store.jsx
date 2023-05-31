import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/CounterSlice.js";
import TodoReducer from "../Features/Todo/TodoSlice.js";
import UserReducer from "../Features/User/UserSlice.js";

//Creates a new store
const Store = configureStore({
  reducer: {
    Counter: counterReducer,
    Todo: TodoReducer,
    user: UserReducer,
  },
});

//exports store
export default Store;
