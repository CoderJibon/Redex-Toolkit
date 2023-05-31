import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser, deleteUser, getAllData } from "./UserApi.js";
import { getAllUser } from "./UserSlice.js";

const User = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(getAllUser);
  const [input, setInput] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserCreate = (e) => {
    e.preventDefault();
    dispatch(createNewUser(input));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleUserCreate}>
          <input
            onChange={handleInputChange}
            value={input.name}
            type="text"
            placeholder="name"
            name="name"
          />
          <input
            onChange={handleInputChange}
            value={input.email}
            type="text"
            placeholder="email"
            name="email"
          />
          <input
            onChange={handleInputChange}
            value={input.password}
            type="text"
            placeholder="password"
            name="password"
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    <button onClick={() => dispatch(deleteUser(user?._id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
