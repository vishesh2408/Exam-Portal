


import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.error = false;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;













// import { createSlice } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     currentUser: null, // Initially, no user is logged in
//     isFetching: false, // Indicates if the login request is in progress
//     error: false, // Error state for login
//   },
//   reducers: {
//     loginStart: (state) => {
//       state.isFetching = true; // Set fetching to true when login starts
//     },
//     loginSuccess: (state, action) => {
//       state.isFetching = false; // Reset fetching to false when login succeeds
//       state.currentUser = action.payload; // Store the user data
//     },
//     loginFailure: (state) => {
//       state.isFetching = false; // Reset fetching to false when login fails
//       state.error = true; // Set error to true when login fails
//     },
//     logout: () => {
//       storage.removeItem('persist:root'); // Clear persisted state upon logout
//     },
//   },
// });

// // Export actions for dispatching
// export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
// export default userSlice.reducer; // Export reducer to be used in store
















// import { createSlice } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     currentUser: null,
//     isFetching: false,
//     error: false,
//   },
//   reducers: {
//     loginStart: (state) => {
//       state.isFetching = true;
//     },
//     loginSuccess: (state, action) => {
//       state.isFetching = false;
//       state.currentUser = action.payload;
//     },
//     loginFailure: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//     logout: () => {
//       storage.removeItem('persist:root')
//     },
//   },
// });

// export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
// export default userSlice.reducer;