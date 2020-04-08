/*

operationは1つ以上のactionを組み合わせたもの
redux-thunkなどのmiddlewareはここで使うらしい

参考
----
https://github.com/jthegedus/re-ducks-examples/blob/master/re-ducks-todos/src/state/ducks/todos/operations.js
*/

import * as actions from "./actions";

const addTodo = actions.addTodo;
const setVisibilityFilter = actions.setVisibilityFilter;
const toggleTodo = actions.toggleTodo;

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo
};
