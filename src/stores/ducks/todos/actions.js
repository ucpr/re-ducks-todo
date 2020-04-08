import types from "./types";

let nextTodoId = 0;
const addTodo = text => ({
  type: types.ADD_TODO,
  id: nextTodoId,
  text
});

const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
});

const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id
});

export {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
};
