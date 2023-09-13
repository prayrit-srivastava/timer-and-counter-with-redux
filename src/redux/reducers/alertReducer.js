// import { createSlice } from "@reduxjs/toolkit";
// const INITIAL_STATE = { message: null };
// const alertSlice =createSlice({
//     name:"alert",
//     initialState:INITIAL_STATE,
//     reducers:{
//         reset:(state,action)=>{
//             state.message = null;
//         }
//     },
//     extraReducers:{
//         "timer/startTimer":(state,action)=>{
//             state.message = "Timer has Started";
//         },
//         "timer/pauseTimer":(state,action)=>{
//             state.message = "Timer is Paused"
//         },
//         "timer/resetTimer":(state,action)=>{
//             state.message = "Timer set to 0"
//         }
//     }
// })

// // create alert slice to handle start, pause, timer actions below

// // export the alert reducer function here
// export const alertReducer = alertSlice.reducer;
// export const alertSelector = (state)=>state.alertReducer;
// // create and export alert selector function here
// export const action = alertSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = { message: null };

const alertSlice = createSlice({
  name: "alert",
  initialState: INITIAL_STATE,
  reducers: {
    resetAlert: (state, action) => {
      state.message = null;
    }
  },
  extraReducers: {
    "timer/startTimer": (state, action) => {
      state.message = "Timer has started.";
    },
    "timer/pauseTimer": (state, action) => {
      state.message = "Timer is paused.";
    },
    "timer/resetTimer": (state, action) => {
      state.message = "Timer set to 0.";
    }
  }
});

export const alertReducer = alertSlice.reducer;
export const { resetAlert } = alertSlice.actions;
export const alertSelector = (state) => state.alertReducer;
