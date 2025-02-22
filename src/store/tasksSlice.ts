import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export interface Task{
    id:string,
    title:string,
    completed:boolean,

}

interface TaskState{
    tasks:Task[],
    status:'idle'|'loading'|'succeded'|'failed',
    error:string | null,
}


const initialState:TaskState={
    tasks:[],
    status:'idle',
    error:null,
}

export const addTask=createAsyncThunk('tasks/addTask',async(task:Omit<Task,'id'>)=>console.log(task))

const tasksSlice = createSlice({
    name:'tasks',
    initialState:{},
    reducers:{},
});

export default tasksSlice.reducer;