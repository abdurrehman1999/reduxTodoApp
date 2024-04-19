import { createSlice } from "@reduxjs/toolkit";

export const todoSlider = createSlice({
  name: "toDo",
  initialState: {
    todoList: [
      // { id: "1", content: "gym" },
      // { id: "2", content: "school" },
    ],
  },
  reducers: {
    addToDO: (state, action) => {
      let newToDo = {
        id: Math.random(),
        content: action.payload.newContent
      };
      state.todoList.push(newToDo);
     
    },
    deleteTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !==action.payload.id);
    },
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addToDO, deleteTodo, editTodo } = todoSlider.actions;

export default todoSlider.reducer;
