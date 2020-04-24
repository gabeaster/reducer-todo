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
      <div className="App-header">
      <h1>Todos with Reducers</h1>
      <form onSubmit={handleSubmit}>
        <input className="addInput"
          type="text"
          name="todo"
          value={todo}
          onChange={handleChange}
          placeholder="What do you need to do?"
        />
        <button className="addBtn" type="submit">ADD IT</button>
      </form>
      <div className="buttonDiv">
          
          <button className="clear-btn" onClick={() => dispatch({ type: "clear-todos" })}>Clear Them</button>
        </div>
    </div>
      
      <div className="card-container">
        {state.todos.map(todo => (
          <Card
            key={todo.id}
            onClick={() => dispatch({ type: "toggle-todos", payload: todo })}
          >
            <p className="p1">{todo.item}</p>
            <p className="p2">{todo.completed ? "Done" : "Do"}</p>
          </Card>
        ))}
      </div>

      
    </div>
  );
}

export default App;