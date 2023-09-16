// import { ADD_ARTICLE } from "../Constants/actions-types";

//  const addPost = newPost => {
//     return {
//         type: ADD_ARTICLE,
//         payload: newPost
//     }
// }

// export default addPost
// actions.js

// Action types
// actions.js
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = (id, description) => ({
  type: ADD_TASK,
  id,
  description,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  id,
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  id,
  description,
});
