import React, { useState, useReducer } from "react";
import "./App.css";
import { Card } from "semantic-ui-react";
import { initialState, todoReducer } from "./Reducers/todoReducer";

function App() {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "add-todos", payload: todo });
    setTodo("");
  };

  return (
    <div className="App">
      <h1>Todos with Reducers</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={handleChange}
          placeholder="What do you need to do?"
        />
        <button type="submit">Add One</button>
      </form>

      
      <div className="card-container">
        {state.todos.map(todo => (
          <Card
            key={todo.id}
            onClick={() => dispatch({ type: "toggle-todos", payload: todo })}
          >
            <p>{todo.item}</p>
            <p>Finished? {todo.completed ? "All Done" : "Not quite"}</p>
          </Card>
        ))}
      </div>

      <button onClick={() => dispatch({ type: "clear-todos" })}>
        Get them out of my sight
      </button>
    </div>
  );
}

export default App;