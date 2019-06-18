import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO, CLEAR_COMPLETED } from '../actions';

const initialState = {
  todos: []
}

let nextId = 0;
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    return {
        ...state,
        todos: [...state.todos, {
          id: nextId++,
          value: action.payload,
          completed: false
        }]
    }
    case TOGGLE_COMPLETE:

    const completedTodo = state.todos.map(todo => {
      return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
    });

    return {
      ...state,
      todos: completedTodo

    }
    case DELETE_TODO:
    const newTodosArr = [...state.todos];

    const index = newTodosArr.findIndex(todo => {
      return todo.id === action.payload.id
    });

    newTodosArr.splice(index, 1);

    return {
      ...state,
      todos: newTodosArr
    }
    case CLEAR_COMPLETED:
    return {
      ...state,
      todos: action.payload
    }
    default:
      return state;
  }
};
