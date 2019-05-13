export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'COMPLETED_TODO';


export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
};

export const toggleComplete = (todoId) => {
  return {
    type: TOGGLE_COMPLETE,
    payload: todoId
  }
};
