









import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { publicRequest } from "../requestMethods";

// Login function
export const login = async (dispatch, user) => {
    dispatch(loginStart()); // Dispatch login start action
    try {
        const res = await publicRequest.post("/users/login", user); // API call
        console.log("API call success:", res.data); // Log success response
        dispatch(loginSuccess(res.data)); // Dispatch login success with user data
    } catch (err) {
        // Improved error logging
        console.error(
            "Login failed:",
            err.response?.data || "No response data",
            `Status: ${err.response?.status || "No status"}`
        );
        dispatch(loginFailure()); // Dispatch failure action
    }
};

// Logout function
export const logoutD = (dispatch) => {
    try {
        dispatch(logout()); // Dispatch logout action
        console.log("Logout successful");
    } catch (err) {
        console.error("Logout failed:", err.message || "Unknown error"); // Handle logout errors
    }
};


















// import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
// import { publicRequest } from "../requestMethods";

// // Login function
// export const login = async (dispatch, user) => {
//     dispatch(loginStart());
//     try {
//         const res = await publicRequest.post("/users/login", user); // No need for full URL due to proxy setup
//         console.log("API call success");
//         dispatch(loginSuccess(res.data)); // Dispatch login success with user data
//     } catch (err) {
//         console.error("Login failed:", err);
//         dispatch(loginFailure()); // Dispatch failure action
//     }
// };

// // Logout function
// export const logoutD = (dispatch) => {
//     try {
//         dispatch(logout()); // Dispatch logout action
//     } catch (err) {
//         console.error("Logout failed:", err);
//     }
// };










// // import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
// // import { publicRequest } from "../requestMethods";

// // export const login = async (dispatch, user) => {
// //     dispatch(loginStart());
// //     try {
// //         const res = await publicRequest.post("/users/login", user);
// //         console.log("apiCalls suc")
// //         dispatch(loginSuccess(res.data));
// //     } catch (err) {
// //         dispatch(loginFailure());
// //     }
// // };

// // export const logoutD = (dispatch) => {
// //     try{
// //         dispatch(logout());
// //     }catch{
// //         console.log("apicall err")
// //     }
// // }