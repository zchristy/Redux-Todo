export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'COMPLETED_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';


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

export const deleteTodo = (deletedTodos) => {
  return {
    type: DELETE_TODO,
    payload: deletedTodos
  }
};

export const clearCompleted = (completedArr) => {
  return {
    type: CLEAR_COMPLETED,
    payload: completedArr
  }
};
