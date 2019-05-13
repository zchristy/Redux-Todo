import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
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
    default:
      return state;
  }
};
