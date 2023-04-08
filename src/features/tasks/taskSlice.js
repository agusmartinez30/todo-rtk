import { createSlice } from "@reduxjs/toolkit";
import { persistLocalStorage } from "../../utilities/localStorage.utility";

const items =
  localStorage.getItem("task") !== null
    ? JSON.parse(localStorage.getItem("task"))
    : [];

const initialState = {
  taskItems: items,
};

export const UserKey = "task";

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.taskItems = [...state.taskItems, action.payload];
      persistLocalStorage(
        UserKey,
        state.taskItems.map((item) => item)
      );
    },
    updateTasks: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTaks = state.taskItems.find((task) => task.id === id);
      if (foundTaks) {
        foundTaks.title = title;
        foundTaks.description = description;
      }
      persistLocalStorage(
        UserKey,
        state.taskItems.map((item) => item)
      );
    },
    deleteTasks: (state, action) => {
      const taskFound = state.taskItems.find(
        (task) => task.id === action.payload
      );
      if (taskFound) {
        state.taskItems.splice(state.taskItems.indexOf(taskFound), 1);
        persistLocalStorage(
          UserKey,
          state.taskItems.map((item) => item)
        );
      }
    },
  },
});

export const { addTasks, deleteTasks, updateTasks } = taskSlice.actions;
export default taskSlice.reducer;
