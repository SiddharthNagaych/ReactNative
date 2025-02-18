import reducer from "./projectSlice";
import tasksReducer from "./tasksSlice";
import projectsReducer from "./projectSlice";
import { configureStore } from "@reduxjs/toolkit";



export const store=configureStore({
    reducer:{
        tasks:tasksReducer,
        projects:projectsReducer
    }
})

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;