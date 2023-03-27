import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "test 1",
    description: "test desc",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.push(action.payload);
    },
    updateTasks: (state, action) => {
      console.log(action.payload);
      const { id, title, description } = action.payload;
      const foundTaks = state.find((task) => task.id === id);
      if (foundTaks) {
        foundTaks.title = title;
        foundTaks.description = description;
      }
    },
    deleteTasks: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
      console.log(taskFound);
    },
  },
});

export const { addTasks, deleteTasks, updateTasks } = taskSlice.actions;
export default taskSlice.reducer;
