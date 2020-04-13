import React from 'react';

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "add-todos":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {item: action.payload,
                    completed: false,
                    id: Date.now()
                    }
                ]
            };
        case "toggle-todos":
            return {
                ...state,
                todos: state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
                })
            };
    case "clear-todos":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed !== true)
      };
    default:
      return state;
  }
};
    

