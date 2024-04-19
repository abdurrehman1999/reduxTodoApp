import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './Reducers/todoSliders.js'

export default configureStore({
  reducer: {
    toDo: toDoReducer
    ,
  },
});
