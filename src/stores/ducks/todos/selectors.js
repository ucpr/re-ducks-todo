import types from "./types";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case types.VisibilityFilters.SHOW_ALL:
      return todos;
    case types.VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case types.VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default {
  getVisibleTodos
};
