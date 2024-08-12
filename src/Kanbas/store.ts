import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/reducer";
import coursesReducer from "./Courses/reducer"; // 添加 coursesReducer

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    accountReducer,
    coursesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
