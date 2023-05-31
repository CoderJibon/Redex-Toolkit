import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./TodoSlice.js";

const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.Todo);
  return (
    <div>
      Todo
      <div>
        <input
          type="text"
          placeholder="Do"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          onClick={() => {
            dispatch(addTodo(input));
            setInput("");
          }}
        >
          Add
        </button>
        <hr />
        <ul>
          {selector.todos.length > 0
            ? selector.todos.map((item) => {
                return (
                  <li key={item}>
                    {item}{" "}
                    <button onClick={() => dispatch(removeTodo(item))}>
                      x
                    </button>
                  </li>
                );
              })
            : "ToDos Not Found"}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
