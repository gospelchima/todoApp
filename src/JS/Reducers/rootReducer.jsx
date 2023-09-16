// import { ADD_ARTICLE } from "../Constants/actions-types";

// const initialState = {
//     posts: [
//         {
//             id: 1,
//             title: '',
//             content: ''
//         }
//     ]
// }
// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_ARTICLE:
//             return {
//                 posts: [...state.posts, action.payload]
//             }
//         default:
//             return state
//     }
// }

// export default rootReducer
// reducers.js
// reducers.js
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK } from './actions';

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.id,
            description: action.description,
            isDone: false,
          },
        ],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id
            ? { ...task, description: action.description }
            : task
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
